import "./CategoriesPage.css";
import {categories} from "../../data/categories";
import {CategoryCard} from "../index";
import {useDocumentTitle} from "../../customhooks";
import React from 'react';

function CategoriesPage(){
    useDocumentTitle("Categories");
    return(
    <div>
        <h1>Categories</h1>
        <div className="category-cards">
            {categories.map(item => <CategoryCard item={item}/> )}
        </div>
    </div>
    );
}

export {CategoriesPage};