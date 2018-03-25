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
		<div className="dropdown is-hoverable">
		  	<div className="dropdown-trigger">
		    	<button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
		      		<span>User list</span>
		    	</button>
		  	</div>
		  	<div className="dropdown-menu" id="dropdown-menu4" role="menu">
		    	<div className="dropdown-content">
		    	{ clients.map(client => {
		            return (
		               	<div className="dropdown-item" key={ client.id + '-mobile' }>
		        			{ client.name }
		      			</div>
		            )
            	})}
		    	</div>
		  	</div>
		</div>
	  </div>
	)
};

export default UserList