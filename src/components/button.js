import React from 'react';
import './button.css';

export default function Button({link, icon, name}){
    return (
        <div>
        <a href={link}><button>{icon}{name}</button></a>
        </div>
)
}
