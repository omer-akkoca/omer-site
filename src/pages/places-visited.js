import React from 'react'
import {NavbarContainer} from "../container/navbar"
import {FooterContainer} from "../container/footer"
import {PageTopContainer} from "../container/page-top"
import {placesVisited_top} from "../constants/page-top"
import TopImage from "../images/pages/place.jpg"
import {useFireStore} from "../utils/use-firestore"
import Place from "../components/place"
import "../styles/pages/places-visited/places-visited.css"

export default function PlacesVisited() {

    const {text, button} = placesVisited_top;

    const {docs : places} = useFireStore("visited-places");

    return (
        <>
            <NavbarContainer/>
            <div className="placevisited-container">
                <PageTopContainer bg={TopImage} text={text} button={button}/>
                <div className="places-container">
                    {
                        places !== undefined ? places.map((place) => (
                            <Place key={place.id} place={place}/>
                        )) : null
                    }
                </div>
            </div>
            <FooterContainer/>
        </>
    )
}
