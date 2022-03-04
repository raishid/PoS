<?php

namespace App\Controllers;

use App\Controller;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();

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
            return response()->json(array('status' => false, "response" => $result));
        }

        return response()->json(array('status' => true, 'response' => $category));

    }

    public function edit($id)
    {
        if(!input()->exists(['name'])){
            return http_response_code(400);
        }
        $data = input()->all();
        $category = Category::find($id);
        $category->name = $data['name'];
        if(input()->exists('description')){
            $category->description = $data['description'];
        }
        $result = $category->save();

        if(!$result){
            return response()->json(array('status' => false, "response" => $result));
        }

        return response()->json(array('status' => true, 'response' => $category));

    }

    public function delete($id)
    {
        $result = Category::destroy($id);

        if(!$result){
            return response()->json(array('status' => false, "response" => $result));
        }

        return response()->json(array('status' => true, 'response' => $result));
    }
}