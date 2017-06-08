import React from 'react';
import {render} from 'react-dom';
import Content from './content.js'
import Test from './test.js'
import './styles.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'

render((
  <Router baseName='/'>
    <div>
      <Route exact path='/' component={Content} />
      <Route path='/test/:id/:name' component={Test} />
    </div>
  </Router>)
  , document.getElementById('root'))
