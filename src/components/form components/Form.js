import React from 'react';
import PersonalInformation from '../form components/Personal';
import Education from '../form components/Education';
import Experience from '../form components/Experience';

export default function Form(props) {
    const {personalInformation, education, skills, experience} = props.formData;

    let skillId = -1;
    const skillElements = skills.data.map(skill => {
        skillId++;
        return(
            <input 
                key={`skill-${skillId}`} 
                id={`skill-${skillId}`} 
                type='text' 
                placeholder='Enter a skill' 
                value={skills.data[skillId]}
                onChange={props.handleSkillsChange}
            />
        )
    })

    let expId = -1;
    const experiences = experience.map(section => {
        expId++;
        return(
            <Experience 
                key={`exp-${expId}`}
                id={`exp-${expId}`}
                data={experience}
                handleDeleteExperience={props.handleDeleteExperience}
                handleChange={props.handleExperienceChange}
                handleMouseOver={handleMouseOver} 
                handleMouseLeave={handleMouseLeave}
            />
        )
    })

    let eduId = -1;
    const educations = education.map(section => {
        eduId++;
        return(
            <Education 
                key={`edu-${eduId}`}
                id={`edu-${eduId}`}
                data={education}
                handleDeleteEducation={props.handleDeleteEducation}
                handleChange={props.handleEducationChange}
                handleMouseOver={handleMouseOver} 
                handleMouseLeave={handleMouseLeave}
            />
        )
    })

    function handleMouseOver(e) {
        e.target.parentElement.style.border = '2px solid red';
    }

    function handleMouseLeave(e) {
        e.target.parentElement.style.border = 'none';
    }

    return(
        <div className='form-div non-printable'>
            <div className='personal section'>
                <h4>Personal Information</h4>
                <PersonalInformation data={personalInformation} handleChange={props.handlePersonalInformationChange}/>
            </div>

            <div className='skills section'>
                <h4>Skills</h4>
                <fieldset>
                    <input placeholder='Title of section (ex: Languages/Technologies)' name='title' value={skills.title} onChange={props.handleTitleChange}></input>
                    {skillElements}
                    <button onClick={props.handleAddSkill} className='add-btn'>Add Skill</button>
                </fieldset>
            </div>
            
            <div className='experience section'>
                <h4>Experience</h4>
                {experiences}
                <button onClick={props.handleAddExperience} className='add-btn'>Add Experience</button>  
            </div>

            <div className='education section'>
                <h4>Education</h4>
                {educations}
                <button onClick={props.handleAddEducation} className='add-btn'>Add Education</button>
            </div>

            <div className='btn-div'>
                <button onClick={props.handlePdf} className='pdf-btn'>Generate PDF</button>
                <button onClick={props.loadExample} className='example-btn'>Load Example</button>
                <button onClick={props.handleReset} className='reset-btn'>Reset</button>
            </div>
        </div>
    )
}