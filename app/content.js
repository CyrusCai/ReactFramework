import React from 'react';
import Config from './config.json';

export default class Content extends React.Component {
  render() {
    return (
    <div>
        <p>Let us rock!</p>
        {Config.greetText}
      </div>
    )
  }
}
