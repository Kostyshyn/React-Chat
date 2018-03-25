import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import Message from './Message.js';

const ROOT_URI = '192.168.1.105:7000/';
const socket = socketIOClient(ROOT_URI);

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	user: false,
    	client: null,
    	clients: null,
    	messages: []
    }
    this.toggle = this.toggle.bind(this);
    this.join = this.join.bind(this);
    this.send = this.send.bind(this);

    socket.on('receive.message', (message) => {
      	this.setState({ messages: this.state.messages.concat(message) });
    });

    socket.on('user', (clients) => {
      	this.setState({ clients: clients });
      	this.props.sendClients(clients);
    });
  }
  join(e){
  	e.preventDefault();
  	let client = e.target.client.value.trim();
  	let found = this.state.clients.filter(u => u.name === client);
  	if (found.length > 0){
  		alert('This user already exists');
  		return;
  	} else if(client.length === 0){
  		alert('Username can\'t be empty');
  		return;
  	} else {
  		this.setState({ client: client });
  		socket.emit('user', client);
  		this.props.sendClient(client);
  		this.toggle();
  	}
  }
  toggle(){
  	this.setState({ user: !this.state.user });
  }
  send(e){
  	e.preventDefault();
  	let message = e.target.message.value.trim();
  	if (this.state.user && message){
    	socket.emit('message', {
        	user: this.state.client,
        	message: message,
        	date: new Date()
      	});
  	}
  }
  componentDidMount(){

  }
  render() {
    return (
	  <div className="column is-9 no-b-padding">
	  	<div className="chat">
	  	{	this.state.user ? (
		  		<div>
			  		<div className="messages-list">
        			   	{ this.state.messages.map(message => {
        			    	const self = this.state.client === message.user;
        			     	return ( <Message message={ message } self={ self } key={ Date.now() } />)
        			   	})}
			  		</div>
			  		<form onSubmit={ this.send }>
				  		<div className="field is-grouped message-input">
						  	<div className="control is-expanded">
						    	<textarea 
						    		className="textarea" 
						    		placeholder="..."
						    		name="message">
						    	</textarea>
							</div>
							<div className="control">
							    <button className="button is-primary">Send</button>
							</div>
						</div>
					</form>
				</div>
		  	) : (
			  	<div className="join-page">
			  		<form onSubmit={ this.join }>
				  		<div className="field has-addons">
							<div className="control">
						    	<input 
						    		className="input" 
						    		type="text" 
						    		placeholder="Username" 
						    		name="client"
						    	/>
						  	</div>
						  	<div className="control">
						    	<button className="button is-primary">
						      		Join
						    	</button>
						  	</div>
						</div>
					</form>
			  	</div>
		  	)
	  	}
	 	</div>
	  </div>
    );
  }
}

export default Chat