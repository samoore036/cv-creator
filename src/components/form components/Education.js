import React from 'react';
import extractId from './extractId';

export default function Education(props) {
    return(
        <fieldset id={props.id}>
            <input placeholder='School name' name='schoolName' value={props.data[extractId(props.id)].schoolName} onChange={props.handleChange}></input>
            <input placeholder='From' name='from' value={props.data[extractId(props.id)].from} onChange={props.handleChange}></input>
            <input placeholder='To' name='to' value={props.data[extractId(props.id)].to} onChange={props.handleChange}></input>
            <input placeholder='Degree' name='degree' value={props.data[extractId(props.id)].degree} onChange={props.handleChange}></input>
            <input placeholder='Subject' name='subject' value={props.data[extractId(props.id)].subject} onChange={props.handleChange}></input>
            <input placeholder='Gpa' name='gpa' value={props.data[extractId(props.id)].gpa} onChange={props.handleChange}></input>
            <button onClick={props.handleDeleteEducation} onMouseOver={props.handleMouseOver} onMouseLeave={props.handleMouseLeave} className='delete-btn'>Delete</button>
        </fieldset>
    )
}