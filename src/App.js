import React from 'react';

import {fetchAPI} from './api';
import './App.css';

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const {data} = await fetchAPI();

    // this.setState({ data });
    console.log(data);
  }

  render() {

    return (
      <div className="App">
        
      </div>
    );

  }
}

export default App;
