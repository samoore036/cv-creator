import React from 'react';

export default function Education(props) {
    const { schoolName, from, to, degree, subject, gpa } = props;

    return(
        <div className='education-div'>
            <div className='first-div'>
                {schoolName && <p className='bold'>{schoolName}</p>}
                {from && <p>{`${from} - ${to}`}</p>}
            </div>
            <div className='second-div'>
                {(degree || subject) && <p>{`${degree} in ${subject}`}</p>}
                {gpa && <p>{`GPA: ${gpa}`}</p>}
            </div>
            
        </div>
    )
}