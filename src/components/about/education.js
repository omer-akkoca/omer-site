import React from 'react'

export function Education({school, setEducation}) {

    const {text, icon, info} = school;

    return (
        <div className="column" onClick={() => setEducation(info)}>
            <div className="text">
                <p>{text}</p>
                <i className={icon}/>
            </div> 
        </div>
    )
}
