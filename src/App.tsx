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
      <React.Suspense fallback={<em>...</em>}>
        <Router>
           <FrontHeader path="/" />
           <OtherHeader path="/*" />
        </Router>

        <Router>
          <Routes
            path="*"
            render={({ routePath, getComponentForPath }) => {
              const isIndex = routePath === '/'
              const component = getComponentForPath(routePath)

              if (isIndex) return component

              return (
                <div id="other_main">
                  <div className="top">
                    <div className="bottom">
                      <div className="wrapper">
                        {component}
                      </div>
                    </div>
                  </div>
                </div>
              )
            }}
          />
        </Router>

        <Footer />
      </React.Suspense>
    </Root>
  )
}

export default App
