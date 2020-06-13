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

  handleSelectedBranch = async (selectValue) => {
    this.data = {};
    const selectType = "Branch";
    const data = await fetchAPI(selectValue, selectType);

    this.setState({ data });
  }

  handleSelectedDepositType = async (selectValue) => {
    this.data = {};
    const selectType = "DepositType";
    const data = await fetchAPI(selectValue, selectType);

    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    if (data === null) {
      return null;
    }

    return (
      <div className="App">
        <Header 
          handleSelectedBranch={this.handleSelectedBranch} 
          handleSelectedDepositType={this.handleSelectedDepositType}
          data={ data } />
        <Cards data={ data } />
        <Charts data={ data }/>
      </div>
    );

  }
}

export default App;
