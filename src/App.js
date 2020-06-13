import React from 'react';

import {fetchAPI} from './api';
import './App.css';

import { Cards, Charts, Header } from './components';

class App extends React.Component {
  state = {
    data: null,
  }

  async componentDidMount() {
    const data = await fetchAPI();

    this.setState({ data });    
  }

  handleSelectedBranch = async (searchValue) => {
    this.data = {};
    const data = await fetchAPI(searchValue);

    this.setState({ data });
    // console.log('I was hit');
  }


  render() {
    const { data } = this.state;

    if (data === null) {
      return null;
    }

    return (
      <div className="App">
        <Header handleSelectedBranch={this.handleSelectedBranch} data={ data } />
        <Cards data={ data } />
        <Charts data={ data }/>
      </div>
    );

  }
}

export default App;
