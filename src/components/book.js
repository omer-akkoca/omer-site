import React from 'react'

export default function Book({book}) {

    const {img, name, writer, text, startDay, endDay} = book;    

    return (
        <div className="book">
            <div className="card-container">
                <div className="front-face">
                    <img src={img} alt={name}/>
                </div>
                <div className="back-face"> 
                    <h2>{name}</h2>
                    <h4 className="writer">{writer}</h4>
                    <h5>{`${startDay} - ${endDay}`}</h5>
                    <p>{text}</p>
                    </div>
            </div>
        </div>
    )
}
