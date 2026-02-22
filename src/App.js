import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import './App.css'

import Home from './components/Home'

import TeamMatches from './components/TeamMatches'
import Live from './components/Live'
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route exact path="/live" component={Live} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App
