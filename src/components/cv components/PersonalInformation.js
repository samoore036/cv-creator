import React from 'react';

export default function PersonalInformation(props) {
    const { firstName, lastName, address, phoneNumber, email, portfolioLink, linkTitle} = props;
    return(
        <div className='personal-info-div'>
            <h3>{`${firstName} ${lastName}`}</h3>
            <div className='personal-details-div'>
                {phoneNumber && <p>{phoneNumber}</p>}
                {email && <p>{email}</p>}
                {address && <p>{address}</p>}
                {linkTitle && <a href={portfolioLink}>{linkTitle}</a>}
            </div>
        </div>
    )
}