import React, {useState} from 'react'

export default function Place({place}) {

    const {img ,date, location, description} = place;

    const [info,setInfo] = useState(false);

    return (
        <div className="place">
            {
                !info ? (<i className="get-info fas fa-info-circle"
                    onClick={() => setInfo(true)}
                />) : null
            }
            
            <img src={img} alt={location}></img>
            <div className="place-info" style={info ? {transform: "translateY(0)"} : {transform: "translateY(100%)"}}>
                <h2>{location}</h2>
                <h4>{date}</h4>
                <p>{description}</p>
                <i className="fas cancel fa-times-circle"
                    onClick={() => setInfo(false)}
                />
            </div>
        </div>
    )
}
