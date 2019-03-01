import React from 'react';
import './FoodFinder.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Results } from './components/Results';
import { Search } from './components/Search';
 
function AppRouter(){
  return (
    <Router>
      <div>
        <Route path="/" exact component={Search} />
        <Route path="/results" component={Results} />
      </div>
    </Router>
  );
}

export default AppRouter;
