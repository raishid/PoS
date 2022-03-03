<?php

namespace App\Controllers;

use App\Controller;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $model_categories = new Category();
        $categories = $model_categories->list();

        //load datable scripts
        loadDatatable();

        return $this->view->loadView('categories.index', true, ['categories' => $categories]);
    }

    public function create()
    {
        if(!input()->exists(['name'])){
            return http_response_code(400);
        }

        $data = input()->all();

        $category = new Category();
        $category->name = $data['name'];
        if(input()->exists('description')){
            $category->description = $data['description'];
        }
        
        $result = $category->save();

        if(!$result){
            return response()->json(array('status' => false, "response" => $category->exception));
        }

        return response()->json(array('status' => true, 'response' => json_encode($result)));

    }

    public function edit($id)
    {
        if(!input()->exists(['name'])){
            return http_response_code(400);
        }
        $data = input()->all();
        $category = new Category();
        $category->name = $data['name'];
        if(input()->exists('description')){
            $category->description = $data['description'];
        }
        $category->update_at = date('Y-m-d');
        
        $result = $category->update($id);

        if(!$result){
            return response()->json(array('status' => false, "response" => $category->exception));
        }

        return response()->json(array('status' => true, 'response' => json_encode($result)));

    }

    public function delete($id)
    {
        $category = new Category();
        $result = $category->delete($id);

        if(!$result){
            return response()->json(array('status' => false, "response" => $category->exception));
        }

        return response()->json(array('status' => true, 'response' => $result));
    }
}