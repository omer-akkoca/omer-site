import React from 'react'

export function ShowEducation({education, setEducation}) {
    return (
        <div className="show-education">
            <i className="fas fa-times close" onClick={() => setEducation(undefined)}/>
            <div>
                {
                    education.map((info) => (
                        <span key={info.id}>
                            <p>{info.year}</p>
                            <p>{info.school}</p>
                            {
                                info.id === "university" ?
                                <span>
                                    <p>Of Teknoloji Fakültesi</p>
                                    <p>Yazılım Mühendisliği</p>
                                </span> : null
                            }
                        </span>
                    ))
                }
            </div>
        </div>
    )
}
