import React from 'react';
import Photo from './Photo';
import './Results.css';

export default function Results(props){
    if (props.results){
        return(
            <div className="row d-flex justify-content-evenly Results">
                <div className="col-6 recipe-content">
                      {props.results.map(function(recipe, index){
                          return(
                              <div key={index}>
                                    <h2>{recipe.recipe.label}</h2>
                                    {recipe.recipe.ingredientLines.map(function(ingredients, index){
                                        return(
                                            <p key={index}>
                                                {ingredients}
                                            </p>
                                        )
                                    })}
                                    <Photo photo={recipe.recipe} />
                              </div>
                          );
                      })}
                </div>
            </div>
        );
    } else {
        return null;
    }
}