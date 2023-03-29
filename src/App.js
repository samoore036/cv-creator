import React from 'react';
import Header from './components/Header';
import Form from './components/form components/Form';
import getEducationObject from './components/form components/educationObject';
import getExperienceObject from './components/form components/experienceObject';
import extractId from './components/form components/extractId';
import Footer from './components/Footer';

import Cv from './components/cv components/Cv';
import Example from './components/form components/utilities/loadExample';
import DefaultForm from './components/form components/utilities/DefaultForm';

function App() {
  const [hasExperienceInfo, setHasExperienceInfo] = React.useState(false);
  const [hasEducationInfo, setHasEducationInfo] = React.useState(false);
  const [hasSkillsInfo, setHasSkillsInfo] = React.useState(false);

  const [formData, setFormData] = React.useState(DefaultForm);

  const [addingEducation, setAddingEducation] = React.useState(true);
  const [educationToDelete, setEducationToDelete] = React.useState(null);
  const [educationCount, setEducationCount] = React.useState(1);

  const [addingExperience, setAddingExperience] = React.useState(true);
  const [experienceToDelete, setExperienceToDelete] = React.useState(null);
  const [experienceCount, setExperienceCount] = React.useState(1);

  const [skillCount, setSkillCount] = React.useState(1);

  function handleAddEducation(e) {
    setAddingEducation(true);
    setEducationCount(prevCount => prevCount + 1);
  }

  function handleAddExperience(e) {
    setAddingExperience(true);
    setExperienceCount(prevCount => prevCount + 1);
  }

  function handleDeleteEducation(e) {
    setAddingEducation(false);
    setEducationCount(prevCount => prevCount - 1);
    const { id } = e.target.parentElement;
    setEducationToDelete(extractId(id));
  }

  function handleDeleteExperience(e) {
    setAddingExperience(false);
    setExperienceCount(prevCount => prevCount - 1);
    const { id } = e.target.parentElement;
    setExperienceToDelete(extractId(id));
  }

  function handleAddSkill() {
    setSkillCount(prevCount => prevCount + 1);
  }

  React.useEffect(() => {
    if (addingEducation) {
      setFormData(prevData => {
        let newEducation = [...prevData.education];
        newEducation.push(getEducationObject());
        return(
          {...prevData, education: [...newEducation]}
        )
      })
    } else {
      setFormData(prevData => {
        let newEducation = [...prevData.education];
        newEducation.splice(educationToDelete, 1);
        return(
          {...prevData, education: [...newEducation]}
        )
      })
    }
  }, [educationCount, addingEducation])

  React.useEffect(() => {
    if (addingExperience) {
      setFormData(prevData => {
        let newExperience = [...prevData.experience];
        newExperience.push(getExperienceObject());
        return(
          {...prevData, experience: [...newExperience]}
        )
      })
    } else {
      setFormData(prevData => {
        let newExperience = [...prevData.experience];
        newExperience.splice(experienceToDelete, 1);
        return(
          {...prevData, experience: [...newExperience]}
        )
      })
    }
  }, [experienceCount, addingExperience])

  React.useEffect(() => {
    setFormData(prevData => {
      let newSkills = {...prevData.skills};
      let newSkillData = [...newSkills.data, ''];
      newSkills.data = [...newSkillData];
      return(
        {...prevData, skills: {...newSkills}}
      )
    })
  }, [skillCount])

  function handlePersonalInformationChange(e) {
    const { name, value } = e.target;
    setFormData(prevData => {
      let newPersonalInformation = {...prevData.personalInformation};
      newPersonalInformation[name] = value;
      return(
        {...prevData, personalInformation: newPersonalInformation}
      )
    })
  }

  function handleEducationChange(e) {
    setHasEducationInfo(true);
    const { name, value } = e.target;
    const { id } = e.target.parentElement;
    setFormData(prevData => {
      let newEducation = [...prevData.education];
      let newEducationSection = {...newEducation[extractId(id)]};
      newEducationSection[name] = value;
      newEducation[extractId(id)] = newEducationSection;
      return(
        {...prevData, education: newEducation}
      )
    })
  }

  function handleTitleChange(e) {
    const { value } = e.target;
    setFormData(prevData => {
      let newSkills = {...prevData.skills};
      newSkills.title = value;
      return(
        {...prevData, skills: newSkills}
      )
    })
  }

  function handleSkillsChange(e) {
    setHasSkillsInfo(true);
    const { value, id } = e.target;
    setFormData(prevData => {
      let newSkills = {...prevData.skills};
      let newSkillsData = [...newSkills.data];
      newSkillsData[extractId(id)] = value;
      newSkills.data = [...newSkillsData];
      return(
        {...prevData, skills: newSkills}
      )
    })
  }

  function handleExperienceChange(e) {
    setHasExperienceInfo(true);
    const { value, name } = e.target;
    const { id } = e.target.parentElement;
    setFormData(prevData => {
      let newExperience = [...prevData.experience];
      let newExperienceSection = {...newExperience[extractId(id)]};
      newExperienceSection[name] = value;
      newExperience[extractId(id)] = newExperienceSection;
      return(
        {...prevData, experience: newExperience}
      )
    })
  }

  function loadExample() {
    setHasExperienceInfo(true);
    setHasEducationInfo(true);
    setFormData(Example);
  }

  function handleReset() {
    setHasSkillsInfo(false);
    setHasExperienceInfo(false);
    setHasEducationInfo(false);
    setFormData(DefaultForm);
  }

  function printToPdf() {
    window.print();
  }

  return (
    <div className="App">
      <Header />
      <div className='main-content'>
        <Form 
          formData={formData} 
          handleAddEducation={(e) => handleAddEducation(e)}
          handleAddExperience={(e) => handleAddExperience(e)}
          handleAddSkill={handleAddSkill}
          handleDeleteEducation={(e) => handleDeleteEducation(e)}
          handleDeleteExperience={(e) => handleDeleteExperience(e)}
          handlePersonalInformationChange={(e) => handlePersonalInformationChange(e)}
          handleEducationChange={(e) => handleEducationChange(e)}
          handleTitleChange={(e) => handleTitleChange(e)}
          handleSkillsChange={(e) => handleSkillsChange(e)}
          handleExperienceChange={(e) => handleExperienceChange(e)}
          handlePdf={printToPdf}
          loadExample={loadExample}
          handleReset={handleReset}
        />
        <Cv 
          hasSkillsInfo={hasSkillsInfo}
          hasExperienceInfo={hasExperienceInfo} 
          hasEducationInfo={hasEducationInfo} 
          data={formData}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
