import React from "react";
import {PageLayout} from "components/common";
import home from "../pages/home.css";


export default function Home(){

    return (
        
    <div>
    <PageLayout />
      <div class="col s12 m3">
        <div class="sidebar">
            <div class='top'>
                <span class="categories">Categories</span>
            </div>
            <div class='button'>
                <span class="button-text">books</span>
            </div>
            <div class='button'>
                <span class="button-text">outdoor</span>
            </div>
            <div class='button'>
                <span class="button-text">tools</span>
            </div>
            <div class='button'>
                <span class="button-text">clothes</span>
            </div>
        </div>
      </div>

     


    </div>
       
    );
}; 