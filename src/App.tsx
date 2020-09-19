import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
import Dynamic from 'containers/Dynamic'
import Layout from 'components/Layout'
import FrontHeader from 'components/FrontHeader'
import './app.css'
import './legacy.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

// function App() {
//   return (
//     <Root>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/blog">Blog</Link>
//         <Link to="/dynamic">Dynamic</Link>
//       </nav>
//       <div className="content">
//         <React.Suspense fallback={<em>Loading...</em>}>
//           <Router>
//             <Dynamic path="dynamic" />
//             <Routes path="*" />
//           </Router>
//         </React.Suspense>
//       </div>
//     </Root>
//   )
// }

function App() {
  return (
    <Root>
      <Layout
        header={
          <Router>
            <FrontHeader path="/" />
          </Router>
        }
      >
        <React.Suspense fallback={<em>...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Layout>
    </Root>
  )
}

export default App
