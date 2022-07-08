import logo from './logo.svg';
import React from 'react'
import './App.css';
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import ShoppingApp from './ShoppingApp';
//import FirstComponent from './FirstComponent';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import RestClientPart2 from './RestClientPart2';
import AddEmployee from './AddEmployee';
function App() {
  return (
    <div>
      <AppHeader title="Welcome to React Training in CDAC" />
      {/* <ShoppingApp/> */}
      <div>
        <Router>
          <nav className='navbar justify-content-center bg-secondary navbar-dark'>
            <ul className='nav  nav-pills'>
              <li className='nav-item'>
                <Link className='nav-link' style={{ 'color': 'yellow' }} to='/'>List of Employees</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' style={{ 'color': 'yellow' }} to='/AddNew'>Add New</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' style={{ 'color': 'yellow' }} to='/ShoppingCart'>Shopping cart</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <RestClientPart2 />
            </Route>
            <Route exact path="/AddNew">
              <AddEmployee />
            </Route>
            <Route exact path="/ShoppingCart">
              <ShoppingApp />
            </Route>
          </Switch>
        </Router>
      </div>
      <AppFooter company="CDAC India Inc." year="2023" />
    </div>
  )
}

export default App;
