import React from 'react'

import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'

import './app.css'
import FrontHeader from 'components/FrontHeader'
import OtherHeader from 'components/OtherHeader'
import Footer from 'components/Footer'


function App() {
  return (
    <Root>
      <Router>
        <FrontHeader path="/" />
        <OtherHeader path="/*" />
      </Router>

      <React.Suspense fallback={<em>...</em>}>
        <Router>
          <Routes path="/" />
          <Routes
            path="/*"
            render={({ routePath, getComponentForPath }) => {
              return (
                <div id="other_main">
                  <div className="top">
                    <div className="bottom">
                      <div className="wrapper">
                        { getComponentForPath(routePath)}
                      </div>
                    </div>
                  </div>
                </div>
              )
            }}
          />
        </Router>
      </React.Suspense>

      <Footer />
    </Root>
  )
}

export default App
