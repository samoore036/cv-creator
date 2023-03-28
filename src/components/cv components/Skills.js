import React from 'react';
import { nanoid } from 'nanoid';

export default function Skills(props) {
    const skillElements = props.data.data
        .filter(skill => skill !== '')

    let skillString = '';
    for (let i = 0; i < skillElements.length; i++) {
        if (i === skillElements.length - 1) {
            skillString += skillElements[i];
        } else {
            skillString += `${skillElements[i]}, `;
        }
    }

    return(
        <div className='skills-div'>
            <h4>{props.data.title}</h4>
            <p className='skills-list'>{skillString}</p>
        </div>
    )
}