import React from 'react';

export default function Results(props){
    if (props.results){
        return(
            <div className="row">
                <div className="col-6">
                      <h2> {props.results[0].recipe.label}</h2>
                      <p>{props.results[0].recipe.ingredientLines}</p>
                      <img href={props.results[0].recipe.image} />

                </div>
            </div>
        );
    } else {
        return null;
    }
}