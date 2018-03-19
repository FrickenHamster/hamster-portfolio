import React, {Component} from 'react';
import Section from './Section';
import './Projects.css';
//
// import { Transition } from 'react-transition-group'
import Transition from 'react-transition-group/Transition';

export default class ProjectsSection extends Component {
	render() {
		return (
			<Section title={'Projects'}>
				<div className='row'>
					<Project
						title={'Vex 3 HTML'}
						imgurl={'/images/projects/vex.png'}
					>
						<ul>
							<li>HTML conversion for popular flash game Vex 3</li>
							<li>. Built using Typescript and Phaser.js.</li>
							<li>Levels extracted using Flash</li>
							<li>Mobile friendly and responsive</li>
						</ul>
						
					</Project>
					<Project
						title={'Fly or Die'}
						description={'HTML game flying shoot em up'}
						imgurl={'/images/projects/flyordie.png'}
					>
						<p>HTML conversion for popular flash game Vex 3. Built using Typescript and Phaser.js.</p>
						<p>Levels extracted using Flash</p>
					</Project>
					<Project
						title={'Wire IO'}
						description={'Online Multiplayer Wire Game'}
						imgurl={'/images/projects/wire.png'}
					/>
					<Project
						title={'Star Gear'}
						description={'Online Multiplayer 4X'}
						imgurl={'/images/projects/wire.png'}
					/>
					<Project
						title={'Easy Moves'}
						description={'Android App'}
						imgurl={'/images/projects/easymoves.png'}
					/>
				</div>
			</Section>);
	}
}

const defaultStyle = {
	transition: `bottom ${300}ms ease-in-out`,
	position: 'relative'
};

const transitionStyles = {
	entering: {bottom: 0},
	entered: {bottom: 240},
	exiting: {bottom: 240},
	exited: {bottom: 0}
};

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDesc: false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({showDesc: !this.state.showDesc})
	}

	render() {
		return (
			<div className={'col-lg-4 col-md-6 col-sm-12 p-2'} style={{padding: 0}} onClick={_ => {
				this.toggle()
			}}>
				<div className='card'>
					<div className='project-container'>
						<div className='project-img-container'>
							<img src={this.props.imgurl} className='project-img' alt={this.props.title}/>
						</div>
						<Transition
							in={this.state.showDesc}
							timeout={0}
						>
							{(state) => (
								<div className="desc-tab"
									 style={{...defaultStyle, ...transitionStyles[state]}}
								><h3>{this.props.title}</h3>
									{this.props.children}
								</div>
							)}
						</Transition>
					</div>
				</div>
			</div>)
	}
}
