import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import  Home  from './components/common/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <h1>Hello World</h1> */}
        <Home />
      </Switch>
    </BrowserRouter>
  )
}

export default App
