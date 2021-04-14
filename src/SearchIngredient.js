import React, { useState } from 'react';
import axios from "axios";
import Results from './Results';

import './SearchIngredient.css';


export default function SearchIngredient(props){
    const [results, setResults] = useState(null);
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [loaded, setLoaded] = useState(false);
  

function handleRecipeSearch(response){
    console.log(response.data.hits);
    setResults(response.data.hits);
}



function search(){
    const appId = '9b532b11';
    const apiKey = 'de21fbe6d9b182981ab1d310ba9a4ac7';
    let apiUrl = `https://api.edamam.com/search?q=${keyword}&app_id=${appId}&app_key=${apiKey}`;
    axios.get(apiUrl).then(handleRecipeSearch);
}    
    
function handleSubmit(event){
    event.preventDefault();
    search();
}


function handleKeyword(event){
    setKeyword(event.target.value);
}

function load(){
    setLoaded(true);
    search();
}

if(loaded){
return (
    <div className="SearchIngredient">
        <h3>Enter your random ingredient here</h3>
        <form onSubmit={handleSubmit} className="p-2 d-flex justify-content-evenly">
            <input type="text" onChange={handleKeyword} defaultValue={props.defaultKeyword} />
            <button type="submit" className="btn btn-primary" >Search</button>        
        </form>
        <Results results={results} />     
    </div>
);
} else {
    load();
    return "Loading";
}

}