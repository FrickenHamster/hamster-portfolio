import React, {Component} from 'react';

export default class Section extends Component{
	render() {
		return (<div>
			<h3 className="section-title">{this.props.title}</h3>
			<div className={'section-container container'}>
				{this.props.children}
			</div>
		</div>)
	}
}


