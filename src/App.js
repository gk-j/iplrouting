import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
// import LatestMatch from './components/LatestMatch'
import NotFound from './components/NotFound'
// import TeamCard from './components/TeamCard'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
