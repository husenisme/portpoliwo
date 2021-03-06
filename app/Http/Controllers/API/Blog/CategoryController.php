<?php

namespace App\Http\Controllers\API\Blog;

use App\Http\Controllers\Controller;
use App\Http\Resources\Blog\Categories;
use App\Models\Blog\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $categories = Category::when($request->filled('search'), function ($search) use ($request) {
                            $search->where('title', 'like', "%{$request->search}%");
        })->get();
        $data = collect(Categories::collection($categories));
        return $this->successResponse($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'unique:blog_categories,title'],
            'slug' => ['unique:blog_categories,slug']
        ]);
        if ($request->missing('slug')) {
            $request->request->add(['slug' => $request->title]);
        }
        if ($request->has('slug') && empty($request->slug)) {
            $request->merge(['slug' => $request->title]);
        }
        $request->merge(['slug' => Str::slug($request->slug, '-')]);
        $category = Category::create($request->all());
        $data = collect(new Categories($category));
        return $this->dataCreated($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $data = collect(new Categories($category));
        return $this->successResponse($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'title' => ['required', Rule::unique('blog_categories')->ignore($category)],
            'slug' => [Rule::unique('blog_categories')->ignore($category)]
        ]);
        if ($request->missing('slug')) {
            $request->request->add(['slug' => $request->name]);
        }
        if ($request->has('slug') && empty($request->slug)) {
            $request->merge(['slug' => $request->name]);
        }
        $request->merge(['slug' => Str::slug($request->slug, '-')]);
        $category->fill($request->all());
        $category->save();
        $data = collect(new Categories($category));
        return $this->dataUpdated($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Category::destroy($request->selectedData);
        return $this->dataDeleted();
    }
}
