import React from 'react';
import { nanoid } from 'nanoid';

export default function Experience(props) {
    const { jobTitle, company, location, from, to, description} = props;
    const descriptionElements = description.split('\n').map(string => {
        return(
            string !== '' ? <li key={nanoid()}>{string}</li> : null
        )
    })

    return(
        <div className='experience-div'>
            <div className='first-div'>
                {company && <p className='bold'>{company}</p>}
                {location && <p>{location}</p>}
            </div>
            <div className='second-div'>
                {jobTitle && <p className='job-title'>{jobTitle}</p>}
                {from && <p>{`${from} - ${to}`}</p>}
            </div>
            {descriptionElements[0] !== '' && <div>
                {descriptionElements}
            </div>}
        </div>
    )
}