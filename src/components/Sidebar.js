import React, {Component} from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {
	render() {
		return (
			<div style={{backgroundColor: 'lightgray'}}>
				<nav id="sidebar" className={this.props.show ? 'active' : ''}>
					<div className="sidebar-header">
						<h3 className='d-inline mr-4'>Alex Yan</h3>
						<i className='fa fa-chevron-left d-md-none d-span' style={{fontSize: 24}} onClick={this.props.toggleFunc}/>
						<div className='text-center' style={{fontSize: 14, marginRight: 50}}>Software / Game Developer</div>
					</div>

					<ul className="list-unstyled components list-group">
						<li><a href="#Cover" className="nav-link">Home</a></li>
						<li><a href="#About" className="nav-link">About</a></li>
						<li><a href="#Experience" className="nav-link">Experience</a></li>
						<li><a href="#Projects" className="nav-link">Projects</a></li>
						<li><a href="#Skills" className="nav-link">Skills</a></li>
						<li><a href="#Contact" className="nav-link">Contact</a></li>
					</ul>
				</nav>
			</div>
		);
	}
};

