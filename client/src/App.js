import React, { Component } from 'react';
import '../node_modules/bulma/css/bulma.css';
import './assets/css/App.css';

// components 

import Header from './components/Header.js';
import Chat from './components/Chat.js';
import UserList from './components/UserList.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      client: null,
      clients: []
    }
    this.sendClients = this.sendClients.bind(this);
    this.sendClient = this.sendClient.bind(this);


  }
  sendClients(clients){
    this.setState({ clients: clients });
  }
  sendClient(client){
    this.setState({ client: client });
  }
  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <Header client={ this.state.client }/>
        <div className="container">
          <div className="columns">
            <UserList clients={ this.state.clients }/>
            <Chat 
              sendClients={ this.sendClients }
              sendClient={ this.sendClient }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
