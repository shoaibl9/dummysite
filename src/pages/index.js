import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

import '../styling/index.css'

const IndexPage = () => {
  return (
    <Container class="container">
        <p class="text">
          I'll add stuff in a sec <br />
          In the meanwhile, <br />
          check out one of my favorite slam poems: <br />
          <a
          class="text-lower"
          href="https://www.youtube.com/watch?v=vnKZ4pdSU-s"
          rel="noopener noreferrer"
          target="_blank">Here</a>
        </p>
        <footer>
          Shoaib Laghari © 2020
        </footer>
    </Container>
  )
}

export default IndexPage
