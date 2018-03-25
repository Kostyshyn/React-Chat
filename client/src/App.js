import React, { Component } from 'react';
import '../node_modules/bulma/css/bulma.css';
import './assets/css/App.css';
import socketIOClient from 'socket.io-client';

// components 

import Header from './components/Header.js';
import Message from './components/Message.js';
import Chat from './components/Chat.js';
import UserList from './components/UserList.js';

const ROOT_URI = '192.168.0.119:7000/';
const socket = socketIOClient(ROOT_URI);

const Message = (message, self) => {
  return (
    
  )
};

class App extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   user: null,
    //   users: [],
    //   message: '',
    //   messages: []
    // }
    // this.send = this.send.bind(this);
    // this.onChange = this.onChange.bind(this);
    // this.join = this.join.bind(this);

    // socket.on('receive.message', (message) => {
    //   this.setState({ messages: this.state.messages.concat(message) });
    // });

    // socket.on('user', (users) => {
    //   this.setState({ users: users });
    //   console.log(users)
    // });

  }
  // componentDidMount(){

  // }
  // join(){
  //   if (!this.state.user){
  //     let currenUser = prompt('Хто ви?');
  //     socket.emit('user', currenUser.trim());
  //     this.setState({ user: currenUser });
  //   }
  // }
  // onChange(e){
  //   this.setState({ message: e.target.value });
  // }
  // send(e){
  //   if (this.state.user && this.state.message.trim()){
  //     socket.emit('message', {
  //       user: this.state.user,
  //       message: this.state.message,
  //       date: new Date()
  //     });
  //     this.setState({ message: '' });
  //   }
  // }
  // addMessage(message){

  // }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="columns">
            <UserList />
            <Chat />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

        // <header className="App-header">
        //   <h1 className="App-title">Чат</h1>
        //   <button onClick={ this.join }>Увійти</button>
        // </header>
        // <div className="users">
        //   <h2>Користувачі</h2>  
        //   <ul>
        //    { this.state.users.map(user => {
        //       return (
        //         <li key={ user.id }>
        //           { user.name }
        //         </li>
        //       )
        //     })}
        //   </ul>        
        // </div>
        // <div className="chat">
        //   <div className="messages">
        //   { this.state.messages.map(message => {
        //     const self = this.state.user === message.user;
        //     return ( <Message message={ message } self={ self } key={ message } />)
        //   })}
        //   </div>
        //   <div className="textarea">
        //     <textarea className="message-input" onChange={ this.onChange } value={ this.state.message }></textarea>
        //     <button className="send-message" onClick={ this.send }>Надіслати</button>
        //   </div>
        // </div>
