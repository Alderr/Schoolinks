import React from 'react';
import List from './components/List/List';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      data: {},
    };
  }

  componentDidMount() {
    this.fetchIP().then(data => this.setState({input : data }));
  }

  queryIP = () => {
    return axios.get(`https://ip.nf/${this.state.input}.json`)
      .then((response) => {
        console.log(response);
        this.setState({ data: response.data.ip });
      })
      .catch(function (error) { 
        console.error(error);
      });
  }

  fetchIP = () => {
    return axios.get('https://ip.nf/me.json')
      .then(function (response) {
        return response.data.ip.ip;
      })
      .catch(function (error) { 
        console.error(error);
      });
  }

  inputOnChange = (event) => {
    this.setState({ input: event.currentTarget.value});
  }

	render() {
		return (
			<div className="App">
				<div>
					<input value={this.state.input} onChange={this.inputOnChange} placeholder="Enter an IP!" />
					<button onClick={this.queryIP}>Press Me</button>
				</div>
				<List data={this.state.data}/>
			</div>
		);
	}
}

export default App;
