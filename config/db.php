<?php

namespace config;
use Dotenv\Dotenv;
use PDO;

class db
{
    function __construct($table)
    {
        $dotenv = Dotenv::createImmutable(ROOT_PATH);
        $this->ENV = $dotenv->load();
        $this->connect($this->ENV['DB_USER'], $this->ENV['DB_PASSWD'], $this->ENV['DB_NAME'], $this->ENV['DB_HOST'], $this->ENV['DB_PORT']);
    }

    private function connect($dbuser, $dbpass, $dbname, $dbhost, $dbport = '3306')
    {
        $dsn = 'mysql:host=' . $dbhost . ';port=' . $dbport . ';dbname=' . $dbname . ';charset=utf8';
        $conn = new PDO($dsn, $dbuser, $dbpass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);	
    }

    public function list()
    {
        try
		{
			$result = array();

			$stm = $this->pdo->prepare("SELECT * FROM $this->table");
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
			$stm = $this->pdo
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
			$stm = $this->pdo
			            ->prepare("DELETE FROM $this->table WHERE id = ?");			          

			$stm->execute(array($id));
		} catch (Exception $e) 
		{
			die($e->getMessage());
		}
	}

    public function query($query)
	{
		try 
		{
            
		} catch (Exception $e) 
		{
			die($e->getMessage());
		}
	}
}