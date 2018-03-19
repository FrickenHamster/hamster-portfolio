import React, {Component} from 'react';

export default class Card extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<div className={'card p-3'} style={this.props.style}>
					{this.props.title &&
					<h3 className="border-bottom border-dark">
						{this.props.title}
					</h3>
					}
					{this.props.children}
				</div>
			</div>
		);
	}
}
