import React from 'react';

export default function PersonalInformation(props) {
    return(
        <fieldset>
                <input placeholder='First name' name='firstName' value={props.data.firstName} onChange={props.handleChange}></input>
                <input placeholder='Last name' name='lastName' value={props.data.lastName} onChange={props.handleChange}></input>
                <input placeholder='Phone number' name='phoneNumber' value={props.data.phoneNumber} onChange={props.handleChange}></input>
                <input placeholder='Email' name='email' value={props.data.email} onChange={props.handleChange}></input>
                <input placeholder='Address' name='address' value={props.data.address} onChange={props.handleChange}></input>
                <input placeholder='Portfolio link' name='portfolioLink' value={props.data.portfolioLink} onChange={props.handleChange}></input>
                <input placeholder='Link title' name='linkTitle' value={props.data.linkTitle} onChange={props.handleChange}></input>
            </fieldset>
    )
}