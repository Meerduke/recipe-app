import React from 'react';

export default function Photo(props){
    const image = props.photo.image;
    
    return(
        <div>
            <img src={image} alt="recipe image"/>
        </div>
    )
};