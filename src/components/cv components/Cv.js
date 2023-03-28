import React from 'react';
import PersonalInformation from './PersonalInformation';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

export default function Cv(props) {
    const { personalInformation, skills, experience, education} = props.data;

    let expIndex = -1;
    const experienceElements = experience.map(experience => {
        expIndex++;
        return(
            <Experience 
                key={expIndex}
                {...experience}
            />
        )
    })

    let eduIndex = -1;
    const educationElements = education.map(education => {
        eduIndex++;
        return(
            <Education
                key={eduIndex}
                {...education}            
            />
        )
    })

    return(
        <div className='cv-holder'>
            <div id='to-print' className='cv-div'>
                <PersonalInformation {...personalInformation}/>
                <Skills data={skills}/>
                <div className='cv-section'>
                    {props.hasExperienceInfo && <h3>Experience</h3>}
                    {experienceElements}
                </div>
                <div className='cv-section'>
                    {props.hasEducationInfo && <h3>Education</h3>}
                    {educationElements}
                </div>
            </div>
        </div>
    )
}