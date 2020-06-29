import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function Home() {
  return (
      
    <Container>
      {/* <Link to="/contact/">Contact</Link> */}
      <Header><img className="headerWordmark" src="https://raw.githubusercontent.com/wolfpeachgames/website-source/master/src/images/wordmark2.png" alt="Wolf Peach Games word mark"/></Header>
      <h2>Coming soon...</h2>
      <p>Wolf Peach Games is <a href="http://theverdigris.ca">Stephanie</a> and <a href="https://tyrelh.github.io">Tyrel</a></p>
      <p>🐺🍑🎮</p>
    </Container>
  )
}
