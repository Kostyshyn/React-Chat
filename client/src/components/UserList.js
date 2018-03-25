import React, { Component } from 'react';

const UserList = ({ users }) => {
	return (
	  <div className="column is-3">
		<aside className="menu">
		  	<p className="menu-label">
		    	User list
		  	</p>
		  	<ul className="menu-list">
		    	<li><a>Dashboard</a></li>
		  	</ul>
		</aside>
	  </div>
	)
};

export default UserList