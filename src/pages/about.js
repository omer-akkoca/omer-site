import React, { useState } from 'react'
import { NavbarContainer } from "../container/navbar"
import { FooterContainer } from "../container/footer"
import { PageTopContainer } from "../container/page-top"
import { about_top } from "../constants/page-top"
import TopImage from "../images/pages/about.jpg"
import { about_text } from '../constants/about-info'
import personal_avatar from "../images/pages/about-avatar.jpeg"
import "../styles/pages/about/about.css"
import { Education } from "../components/about/education"
import { ShowEducation } from '../container/show-education'
import { useFireStore } from "../utils/use-firestore"
import Language from "../components/about/language"

export default function About() {

    const {text, button} = about_top;

    const languages = useFireStore("language");

    const [education,setEducation] = useState(undefined);

    return (
        <>
            <NavbarContainer/>
            <div className="about-container">
                <PageTopContainer bg={TopImage} text={text} button={button}/>
                <div className="personal-info-container">
                    <div className="personal">
                        <div className="img">
                            <img src={personal_avatar} alt={personal_avatar}/>
                        </div>
                        <p className="text">
                            <span>{about_text.personal_info}</span>
                        </p>
                    </div>
                    <h2 className="title">Eğitim Bilgileri</h2>
                    <div className="education">
                        {
                            about_text.schools.map((school) => (
                                <Education key={school.id} school={school}
                                    setEducation={setEducation}
                                />
                            ))
                        }
                        {
                            education !== undefined ? <ShowEducation education={education} setEducation={setEducation}/> : null
                        }
                    </div>
                    <h2 className="title">Bildiğim Web Yazılım Dilleri</h2>
                    <div className="software-language">
                        {
                            languages !== undefined ? languages.docs.map((language) => (
                                <Language key={language.id} language={language}/>
                            )) : null
                        }
                    </div>
                    <h2 className="title">Neler Yaptım?</h2>
                    <div className="myprojects">
                        <p>Projelerimi GitHup sayfamdan görebilirsiniz.</p>
                        <a href="https://github.com/omer-akkoca" target="_blank" rel="noreferrer">
                            <p>Projeler İçin Tıklayınız...</p>
                            <i className="fab fa-github"/>
                        </a>
                    </div>
                </div>
            </div>
            <FooterContainer/>
        </>
    )
}
