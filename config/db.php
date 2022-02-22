<?php

namespace config;
use Dotenv\Dotenv;
use PDO;

class db
{
    function __construct()
    {
        $dotenv = Dotenv::createImmutable(ROOT_PATH);
        $this->ENV = $dotenv->load();
        $this->connect($this->ENV['DB_USER'], $this->ENV['DB_PASSWD'], $this->ENV['DB_NAME'], $this->ENV['DB_HOST'], $this->ENV['DB_PORT']);
    }

    private function connect($dbuser, $dbpass, $dbname, $dbhost, $dbport = '3306')
    {
        $dsn = 'mysql:host=' . $dbhost . ';port=' . $dbport . ';dbname=' . $dbname . ';charset=utf8';
        $this->conn = new PDO($dsn, $dbuser, $dbpass);
       	$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);	
    }

    public function list()
    {
        try
		{
			$result = array();

			$stm = $this->conn->prepare("SELECT * FROM $this->table");
			$stm->execute();

			return $stm->fetchAll(PDO::FETCH_OBJ);
		}
		catch(Exception $e)
		{
			die($e->getMessage());
		}
    }

    public function get($id)
	{
		try 
		{
			$stm = $this->conn
			          ->prepare("SELECT * FROM $this->table WHERE id = ?");
			          

			$stm->execute(array($id));
			return $stm->fetch(PDO::FETCH_OBJ);
		} catch (Exception $e) 
		{
			die($e->getMessage());
		}
	}

    public function delete($id)
	{
		try 
		{
			$stm = $this->conn
			            ->prepare("DELETE FROM $this->table WHERE id = ?");			          

			$stm->execute(array($id));
		} catch (Exception $e) 
		{
			die($e->getMessage());
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
			
            
		} catch (Exception $e) 
		{
			die($e->getMessage());
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

			#var_dump($sql);
			
			$prepare = $this->conn->prepare($sql);
			$prepare->execute(array($id));
			
            
		} catch (Exception $e) 
		{
			die($e->getMessage());
		}
	}

	public function where($column, $value, $operator = '=')
	{
		try 
		{
			$stm = $this->conn
			          ->prepare("SELECT * FROM $this->table WHERE $column $operator ?");
			          

			$stm->execute(array($value));
			return $stm->fetch(PDO::FETCH_OBJ);
		} catch (Exception $e) 
		{
			die($e->getMessage());
		}
	}

	/**
	
	* @param string $username username user
	* @param string $passwordhash password in passwordHash
	* @param array $columns Columns name array in db index 0 username column and index 1 passoword column
	* @return object data db
	*/

	public function verifyLogin(string $username, string $passwordhash, array $columns)
	{
		try 
		{
			$user_column = $columns[0];
			$pass_column = $columns[1];

			$stm = $this->conn
			          ->prepare("SELECT * FROM $this->table WHERE $user_column = ? AND $pass_column = ?");
			          

			$stm->execute(array($username, $passwordhash));
			return $stm->fetch(PDO::FETCH_OBJ);
		} catch (Exception $e) 
		{
			die($e->getMessage());
		}
	}
}