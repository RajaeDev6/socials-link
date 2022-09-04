import React from 'react';
import './button.css';



export default function Button(prop){
    return (
        <div>

        <a href={prop.link}><button>{prop.icon}{prop.name}</button></a>
        </div>
)
}
