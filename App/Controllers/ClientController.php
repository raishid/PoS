<?php

namespace App\Controllers;

use App\Controller;
use App\Models\Client;

class ClientController extends Controller
{
    public function index()
    {
        $customers = Client::all();
        //load datable scripts
        loadDatatable();

        return $this->view->loadView('customers.index', true, ['customers' => $customers]);
    }

    public function create()
    {
        if(!input()->exists(['name', 'dni', 'address'])){
            return http_response_code(400);
        }
        $data = input()->all();
        $client = new Client();
        $client->name = $data['name'];
        $client->dni = $data['dni'];
        $client->email = !empty($data['email']) ? $data['email'] : null;
        $client->phone = !empty($data['phone']) ? $data['phone'] : null;
        $client->address = $data['address'];
        $client->credit = !empty($data['credit']) ? $data['credit'] : null;
        $result = $client->save();

        if(!$result){
            return response()->json(array('status' => false, "response" => $result));
        }

        return response()->json(array('status' => true, 'response' => $client));
    }

    public function edit($id)
    {
        if(!input()->exists(['name', 'dni', 'address',])){
            return http_response_code(400);
        }
        $data = input()->all();
        $client = Client::find($id);

        $client->name = $data['name'];
        $client->dni = $data['dni'];
        $client->email = !empty($data['email']) ? $data['email'] : null;
        $client->phone = !empty($data['phone']) ? $data['phone'] : null;
        $client->address = $data['address'];
        $client->credit = !empty($data['credit']) ? $data['credit'] : null;
        $result = $client->save();

        if(!$result){
            return response()->json(array('status' => false, "response" => $result));
        }

        return response()->json(array('status' => true, 'response' => $client));
    }

    public function delete($id)
    {
        $result = Client::destroy($id);

        if(!$result){
            return response()->json(array('status' => false, "response" => $result));
        }

        return response()->json(array('status' => true, 'response' => $result));
    }
}