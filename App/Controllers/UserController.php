<?php

namespace App\Controllers;

use App\Controller;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $model_user = new User();
        $users = $model_user->list();

        //load datable scripts
        loadDatatable();

        return $this->view->loadview('users.index', true, ["users" => $users]);
    }

    public function create()
    {
        if(!input()->exists(['name_user', 'username', 'password', 'role'])){
            return http_response_code(400);
        }

        $data = input()->all();
        $image = input()->file('pic');
        if(isset($image)){
            if($image->getMime() === 'image/jpeg' || $image->getMime() === 'image/png' || $image->getMime() === 'image/jpg') 
            {
                $filename = sprintf('%s.%s', uniqid(), $image->getExtension());
                $relative_path = "/images/users/$filename";
                $destinationFilename = assets($relative_path);
                $relative_path = '/assets' . $relative_path;
                $image->move($destinationFilename);
            }
        }else{
            $relative_path = $data['pic'];
        }

        $user = new User();
        $user->name = $data['name_user'];
        $user->username = $data['username'];
        $user->password = password_hash($data['password'], PASSWORD_DEFAULT);
        $user->role = $data['role'];
        $user->pic = $relative_path;
        $user->state = 1;
        
        $result = $user->save();

        if(!$result){
            return response()->json(array('status' => false, "response" => $user->exception));
        }

        return response()->json(array('status' => true, 'response' => json_encode($result)));

    }

    public function edit($id)
    {
        if(!input()->exists(['name_user', 'username', 'password', 'role'])){
            return http_response_code(400);
        }
        $data = input()->all();
        $image = input()->file('pic');
        $user = new User();

        if(isset($image)){
            if($image->getMime() === 'image/jpeg' || $image->getMime() === 'image/png' || $image->getMime() === 'image/jpg') 
            {
                $filename = sprintf('%s.%s', uniqid(), $image->getExtension());
                $relative_path = "/images/users/$filename";
                $destinationFilename = assets($relative_path);
                $image->move($destinationFilename);
                $user->pic = "/assets" . $relative_path;

            }
        }

        $user->name = $data['name_user'];
        $user->username = $data['username'];
        $user->password = password_hash($data['password'], PASSWORD_DEFAULT);
        $user->role = $data['role'];
        $result = $user->update($id);

        if(!$result){
            return response()->json(array('status' => false, "response" => $user->exception));
        }

        return response()->json(array('status' => true, 'response' => $result));

    }
    
    public function updateState($id)
    {
        if(!input()->exists('new_state')){
            return http_response_code(400);
        }

        $data = input()->all();

        $user = new User();
        $user->state = $data['new_state'];
        $result = $user->update($id);

        if(!$result){
            return response()->json(array('status' => false, "response" => $user->exception));
        }

        return response()->json(array('status' => true, 'response' => $result));
    }

    public function delete($id)
    {
        $user = new User();
        $result = $user->delete($id);

        if(!$result){
            return response()->json(array('status' => false, "response" => $user->exception));
        }

        return response()->json(array('status' => true, 'response' => $result));
        
    }
}