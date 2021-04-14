import React from 'react';
import Photo from './Photo';
import './Results.css';

export default function Results(props){
    if (props.results){
        return(
                <div className="Results">
                      {props.results.map(function(recipe, index){
                          return(
                              <div key={index}>
                                  <section>
                                    <h2>{recipe.recipe.label}</h2>
                                    {recipe.recipe.ingredientLines.map(function(ingredients, index){
                                        return(
                                            <p key={index}>
                                                {ingredients}
                                            </p>
                                        )
                                    })}
                                    <Photo photo={recipe.recipe} />
                                    </section>
                              </div>
                          );
                      })} 
                </div>
        );
    } else {
        return null;
    }
}