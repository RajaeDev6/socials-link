import React, { useState } from 'react';
import './button.css';

export default function Button({link, icon, name}){
    const [hover, setHover] = useState(false);
    return (
        <a className = {hover ? 'buttonhover' : ''} href={link}
        onMouseEnter = {() => setHover(true)}
        onMouseLeave = {() => setHover(false)}
        >{icon}{name}</a>
)
}
