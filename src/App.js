import React from 'react';

import {fetchAPI} from './api';
import './App.css';

import { Cards } from './components';

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const data = await fetchAPI();

    this.setState({ data });
    // console.log(typeof this.state.data);
    // console.log(data);
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        {/* {console.log(this.state.data)} */}
        <Cards data={data} />
      </div>
    );

  }
}

export default App;
