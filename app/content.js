import React from 'react';
import Config from './config.json';
import {NavLink} from 'react-router-dom';
import { Button } from 'antd-mobile';

export default class Content extends React.Component {
  render() {
    return (
    <div>
      <h2>Lets start</h2>
      <h2><NavLink to="/test/1/Cyrus" activeStyle={{color: 'black'}}>With color red</NavLink></h2>
      <h2><NavLink to="/test/1/Cyrus">Go to test page</NavLink></h2>
      <Button>Start</Button>
    </div>
    )
  }
}
