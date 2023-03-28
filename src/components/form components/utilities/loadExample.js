const Example = {
    personalInformation: {
        firstName: 'Shaheen',
        lastName: 'Moore',
        phoneNumber: '(123)-456-7890',
        email: 'ValidEmail@email.com',
        address: 'Some St., City, State',
        portfolioLink: 'https://github.com/samoore036',
        linkTitle: 'GitHub'
      },
      skills: {
        title: 'Languages/Technologies',
        data: ['JavaScript', 'React', 'HTML', 'CSS', 'Java', 'Git', 'Webpack']
      },
      experience: [
        {
            company: 'Amazon',
            location: 'Tempe, Az',
            jobTitle: 'Flow Lead',
            from: 'January 2021',
            to: 'Present',
            description: 
            'Remotely consult with management team at a Fulfillment Center to develop and execute shift plans to fulfill customer orders while maximizing efficiency and minimizing unnecessary labor moves \n' +  
            'Created a tracker in JavaScript that highlights priority customer orders to reduce costs of late shipments and improve customer experience \n' + 
            'Redeveloped a desktop application as a web app in JavaScript to improve usability and improve visibility of planning metrics at a regional level \n' +
            "Responsible for developing and maintaining the department's wiki"
          },
          {
            company: 'Village Tavern',
            location: 'Scottsdale, Az',
            jobTitle: 'Bartender',
            from: 'November 2018',
            to: 'January 2021',
            description: 
            'Engaged guests with a professional, service-oriented attitude in a fast-paced environment \n' +
            'Met guest expectations while resolving any discrepancies in a friendly and courteous manner'
          },
          {
            company: 'Strategic Development Solutions',
            location: 'Los Angeles, CA',
            jobTitle: 'Research Assistant',
            from: 'April 2018',
            to: 'June 2018',
            description: 
            'Researched demographics and economic indicators for vetting development projects to fund \n' +
            'Created reports that assess the economic, environmental, and community impacts of multi-million dollar projects in low-income communities \n' +
            'Collaborated with project developers to submit annual project data for US Treasury compliance'
          },
          {
            company: 'United States Marine Corps',
            location: 'Camp Pendleton, CA',
            jobTitle: 'Assaultman Team Leader',
            from: '2010',
            to: '2014',
            description: 
            'Responsible for the training, leading, and well-being of Marines \n' +
            'Aided villagers and assisted in planning operations in a combat environment in Afghanistan \n' +
            'Conducted over 150 patrols employing attention to detail, diligence, and communication \n' +
            'Handpicked by the 31st Marine Expeditionary Command to assist the explosive ordinance disposal technician during the South East Asia Economic Conference Security Mission'
          }

      ],
      education: [
        {
            schoolName: 'University of California, Los Angeles',
            from: '2014',
            to: '2018',
            degree: 'BA',
            subject: 'International Development Studies',
            gpa: ''
          }
      ]
}

export default Example;