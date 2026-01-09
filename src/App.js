import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team/:id" component={TeamMatches} />
    </Switch>
  </BrowserRouter>
)
export default App
