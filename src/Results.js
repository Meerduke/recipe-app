import React from 'react';
import Photos from './Photos';

export default function Results(props){
    if (props.results){
        return(
                <div className="col-6">
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
                              <Photos /> 
                              </div>
                          );
                      })}
                </div>
        );
    } else {
        return null;
    }
}