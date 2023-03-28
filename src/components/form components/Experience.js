import React from 'react';
import extractId from './extractId';

export default function Experience(props) {
    return(
        <fieldset id={props.id}>
            <input placeholder='Company' name='company' value={props.data[extractId(props.id)].company} onChange={props.handleChange}></input>
            <input placeholder='Location' name='location' value={props.data[extractId(props.id)].location} onChange={props.handleChange}></input>
            <input placeholder='Job title' name='jobTitle' value={props.data[extractId(props.id)].jobTitle} onChange={props.handleChange}></input>
            <input placeholder='From' name='from' value={props.data[extractId(props.id)].from} onChange={props.handleChange}></input>
            <input placeholder='To' name='to' value={props.data[extractId(props.id)].to} onChange={props.handleChange}></input>
            <textarea placeholder='Description' name='description' value={props.data[extractId(props.id)].description} onChange={props.handleChange}/>
            <button onClick={props.handleDeleteExperience} onMouseOver={props.handleMouseOver} onMouseLeave={props.handleMouseLeave} className='delete-btn'>Delete</button>
        </fieldset>
    )
}

