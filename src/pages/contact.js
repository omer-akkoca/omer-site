import React from 'react'
import {NavbarContainer} from "../container/navbar"
import {FooterContainer} from "../container/footer"
import {PageTopContainer} from "../container/page-top"
import {contact_top} from "../constants/page-top"
import TopImage from "../images/pages/contact.jpg"
import LocationIcon from '../components/contact/location-icon'
import SocialMediaIcon from '../components/contact/social-media-icon'
import { socialMediaDATA } from '../constants/social-media'
import "../styles/pages/contact/contact.css"

export default function Contact() {

    const {text, button} = contact_top;

    return (
        <>
            <NavbarContainer/>
            <div className="contact-container">
                <PageTopContainer bg={TopImage} text={text} button={button}/>
                <div className="contact-info">
                    <div className="location">
                        <LocationIcon icon="fas fa-map-marker" text="Sancaktepe / Istanbul Turkey"/>
                        <LocationIcon icon="fas fa-envelope" text="omerakkoca1042@gmail.com"/> 
                        <LocationIcon icon="fas fa-phone-alt" text="(+90) 534 623 52 70"/>       
                    </div>
                    <div className="social-media">
                        {
                            socialMediaDATA.map((social) => (
                                <SocialMediaIcon key={social.id}
                                    link={social.link} icon={social.icon}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <FooterContainer/>
        </>
    )
}
