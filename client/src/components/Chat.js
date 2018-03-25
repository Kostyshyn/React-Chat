import React, { Component } from 'react';

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	user: false
    }

    this.toggle = this.toggle.bind(this);

  }

  toggle(){
  	this.setState({ user: !this.state.user });
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
				  		<div className="message-wrap">  
				  			<div className="message-user is-link">User</div>			
				  			<div className="notification">
				  				lorem
				  			</div>
				  			<div className="date"><small>14:34</small></div>
				  		</div>	
			  		</div>
			  		<div className="field is-grouped message-input">
					  	<div className="control is-expanded">
					    	<textarea className="textarea" placeholder="..."></textarea>
						</div>
						<div className="control">
						    <button className="button is-primary">Send</button>
						</div>
					</div>
				</div>
		  	) : (
			  	<div className="join-page">
			  		<div className="field has-addons">
						<div className="control">
					    	<input className="input" type="text" placeholder="Username" />
					  	</div>
					  	<div className="control">
					    	<a className="button is-primary" onClick={ this.toggle }>
					      		Join
					    	</a>
					  	</div>
					</div>
			  	</div>
		  	)
	  	}
	 	</div>
	  </div>
    );
  }
}

export default Chat