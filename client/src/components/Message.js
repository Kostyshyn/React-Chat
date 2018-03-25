import React, { Component } from 'react';
import moment from 'moment';

const Message = ({ message, self}) => {
	return (
	  <div className={"message-wrap " + ( self ? 'my' : '')}>
	    <div className="message-user">{ message.user }</div>
	      <div className={ "notification " + ( self ? 'is-primary' : '') } key={ message.message }>
	      { message.message }
	      </div>
	    <div className="date"><em>{ moment(message.date).format('HH:mm:ss') } </em></div>
	  </div>
	)
};

export default Message