<?php

namespace config;
use PDO;
use PDOException;

class db
{
	private $conn;
	private $stm;
	public $exception;

    function __construct()
    {
        $dbhost = Env('DB_HOST');
        $dbport = Env('DB_PORT');
        $dbname = Env('DB_NAME');
        $dbuser = Env('DB_USER');
        $dbpass = Env('DB_PASSWD');

        $this->connect($dbuser, $dbpass, $dbname, $dbhost, $dbport);
    }

    private function connect($dbuser, $dbpass, $dbname, $dbhost, $dbport = '3306')
    {
        $dsn = 'mysql:host=' . $dbhost . ';port=' . $dbport . ';dbname=' . $dbname . ';charset=utf8';
        $this->conn = new PDO($dsn, $dbuser, $dbpass);
       	$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);	
    }

	private function disconnect()
	{
		$this->conn = null;
		$this->stm = null;
	}

    public function list()
    {
        try
		{
			$this->stm = $this->conn->prepare("SELECT * FROM $this->table");
			$this->stm->execute();

			$result = $this->stm->fetchAll(PDO::FETCH_OBJ);
			$this->disconnect();
			return $result;
		}
		catch (PDOException $e) 
		{
			$this->exception = $e->getMessage();
			return false;
		}
    }

    public function get($id)
	{
		try 
		{
			$this->stm = $this->conn
			          ->prepare("SELECT * FROM $this->table WHERE id = ?");
			          

			$this->stm->execute(array($id));
			return $this->stm->fetch(PDO::FETCH_OBJ);
		} catch (PDOException $e) 
		{
			$this->exception = $e->getMessage();
			return false;
		}
	}

    public function delete($id)
	{
		try 
		{
			$this->stm = $this->conn
			            ->prepare("DELETE FROM $this->table WHERE id = ?");			          

			return $this->stm->execute(array($id));
		} catch (PDOException $e) 
		{
			$this->exception = $e->getMessage();
			return false;
		}
	}

    public function save()
	{
		try 
		{
			$properties = array();

			foreach($this->fillable as $fillable){
				if(property_exists($this, $fillable)){
					$properties[$fillable] = $this->$fillable;
				}
			}

			$sql  = "INSERT INTO `" . $this->table . "` (
						`" . implode('`, `', array_keys($properties)) . "`
					) VALUES (
						";


			foreach ($properties as $name => $detail)
			{
				$sql .= "'" . $detail . "', ";
			}

			$sql  = substr($sql, 0, -2);
			$sql .= "
					);";
			
			$prepare = $this->conn->prepare($sql);
			$prepare->execute();
			return $this->get($this->conn->lastInsertId());
			
            
		} catch (PDOException $e) 
		{
			$this->exception = $e->getMessage();
			return false;
		}
	}

	public function update($id)
	{
		try 
		{
			$properties = array();

			foreach($this->fillable as $fillable){
				if(property_exists($this, $fillable)){
					$properties[$fillable] = $this->$fillable;
				}
			}

			$sql  = "UPDATE `" . $this->table . "` SET";

			foreach($properties as $key => $column){
				$sql .= " $key = '$column', ";
			}
			
			$sql = substr($sql, 0, -2);

			$sql .= " WHERE id = ?";
			
			$prepare = $this->conn->prepare($sql);
			$prepare->execute(array($id));

			return $this->get($id);
			
            
		} catch (PDOException $e) 
		{
			$this->exception = $e->getMessage();
			return false;
		}
	}

	public function where($column, $value, $operator = '=')
	{
		try 
		{
			$this->stm = $this->conn
			          ->prepare("SELECT * FROM $this->table WHERE $column $operator ?");
			          

			$this->stm->execute(array($value));
			return $this->stm->fetch(PDO::FETCH_OBJ);
		} catch (PDOException $e) 
		{
			$this->exception = $e->getMessage();
			return false;
		}
	}

	/**
	
	* @param string $username username user
	* @param string $passwordhash password in passwordHash
	* @param array $columns Columns name array in db index 0 username column and index 1 passoword column
	* @return object data db
	*/

	public function verifyLogin(string $username, string $password, array $columns)
	{
		try 
		{
			$user_column = $columns[0];
			$pass_column = $columns[1];

			$this->stm = $this->conn
			          ->prepare("SELECT * FROM $this->table WHERE $user_column = ?");
			          

			$this->stm->execute(array($username));
			$data = $this->stm->fetch(PDO::FETCH_OBJ);
			
			if($data && password_verify($password, $data->$pass_column)){
				return $data;
			}else{
				return false;
			}
		} catch (PDOException $e) 
		{
			$this->exception = $e->getMessage();
			return false;
		}
	}
}