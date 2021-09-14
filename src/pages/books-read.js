import React from 'react'
import { NavbarContainer } from "../container/navbar"
import { FooterContainer } from "../container/footer"
import { PageTopContainer } from "../container/page-top"
import { booksRead_top } from "../constants/page-top"
import TopImage from "../images/pages/book.jpg"
import { useFireStore } from '../utils/use-firestore'
import Book from "../components/book"
import "../styles/pages/books-read/books-read.css"

export default function BooksRead() {

    const {text, button} = booksRead_top;

    const {docs : books} = useFireStore("books-read");

    return (
        <>
            <NavbarContainer/>
            <div className="booksread-container">
                <PageTopContainer bg={TopImage} text={text} button={button}/>   
                <div className="books-container">
                    {
                        books !== undefined ? books.map((book) => (
                            <Book key={book.id} book={book}/>
                        )) : null
                    }
                </div>
            </div>
            <FooterContainer/>
        </>
    )
}
