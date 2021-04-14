import React from 'react';

export default function Photo(props){
    const image = props.photo.image;
    
    return(
        <div>
            <img src={image} alt="recipe example" className= "img-fluid rounded m-3 d-none d-md-inline"/>
        </div>
    )
};