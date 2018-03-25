import React, { Component } from 'react';

const UserList = ({ clients }) => {
	return (
	  <div className="column is-3">
		<aside className="menu">
		  	<p className="menu-label">
		    	User list
		  	</p>
		  	<ul className="menu-list">
		        { clients.map(client => {
		            return (
		                <li key={ client.id }>
		                	<a>{ client.name }</a>
		                </li>
		            )
            	})}
		  	</ul>
		</aside>
	  </div>
	)
};

export default UserList