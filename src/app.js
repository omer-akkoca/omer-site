import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, About, PlacesVisited, BooksRead, Contact } from "./pages"

export default function App() {
  return (
    <Router>
      <Route exact path="/">
          <Home/>
      </Route>

      <Route exact path="/about">
        <About/>
      </Route>
      
      <Route exact path="/places-visited">
        <PlacesVisited/>
      </Route>

      <Route exact path="/books-read">
        <BooksRead/>
      </Route>

      <Route exact path="/contact">
        <Contact/>
      </Route>

      </Router>
  )
}
