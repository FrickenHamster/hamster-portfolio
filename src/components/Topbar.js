import React, {Component} from 'react';

export default class Topbar extends Component {
	render() {
		return (<nav className="navbar fixed-top navbar-light bg-light d-md-none topbar" style={{zIndex: 5}}>
			<div className="container">
				<i className='fa fa-bars' style={{fontSize: 30}} onClick={this.props.toggleFunc}/>
				<div className='mx-auto text-center'>
					<b>Alex Yan</b>
					<br/>
					Software / Game Developer
				</div>
			</div>
		</nav>)
	}
}
