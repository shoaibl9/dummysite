import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import '../styling/index.css'

const IndexPage = () => {
  return (
    <div class="container">
      <p class="text">
        I'll add stuff in a sec <br />
        <br />
        In the meanwhile, click here to <br />
        check out one of my favorite slam poems
      </p>
      <a class="text"
      href="https://www.youtube.com/watch?v=vnKZ4pdSU-s"
      rel="noopener noreferrer"
      target="_blank"/>
      <footer>
        Shoaib Laghari © 2020
      </footer>
    </div>
  )
}

export default IndexPage
