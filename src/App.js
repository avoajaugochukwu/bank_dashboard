import React from 'react';

import {fetchAPI} from './api';
import './App.css';

import { Cards, Charts } from './components';

class App extends React.Component {
  state = {
    data: null,
  }

  async componentDidMount() {
    const data = await fetchAPI();

    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    if (data === null) {
      return null;
    }

    return (
      <div className="App">
        <Cards data={ data } />
        <Charts data={ data }/>
      </div>
    );

  }
}

export default App;
