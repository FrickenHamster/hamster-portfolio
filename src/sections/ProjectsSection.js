import React, { Component } from 'react';
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
						link='https://goo.gl/tYqbFc'
					>
						<ul>
							<li>HTML conversion for popular flash game Vex 3</li>
							<li>Built using Typescript and Phaser.js.</li>
							<li>Levels extracted using Flash</li>
							<li>Mobile friendly and responsive</li>
						</ul>

					</Project>
					<Project
						title={'Fly or Die'}
						description={'HTML game flying shoot em up'}
						imgurl={'/images/projects/flyordie.png'}
					>
						<ul>
							<li>Browser physics based run and gun game</li>
							<li>Built using Typescript, Phaser.js, and Box2d.</li>
							<li>Mobile friendly and responsive</li>
						</ul>
					</Project>
					<Project
						title={'Cat IO'}
						description={'Online Multiplayer Cat Game'}
						imgurl={'/images/projects/cat.png'}
					>
						<ul>
							<li>Browser multiplayer IO game based on Agar.io</li>
							<li>Built using Typescript, Phaser.js, Node.js, Websockets and Bootstrap.</li>
							<li>Mobile friendly and responsive</li>
						</ul>
					</Project>
					<Project
						title={'Wire IO'}
						description={'Online Multiplayer Wire Game'}
						imgurl={'/images/projects/wire.png'}
					>
						<ul>
							<li>Browser multiplayer IO game</li>
							<li>Built using Typescript, Phaser.js, Node.js, Websockets and Bootstrap.</li>
							<li>Mobile friendly and responsive</li>
						</ul>
					</Project>
					<Project
						title={'Star Gear'}
						description={'Online Multiplayer 4X'}
						imgurl={'/images/projects/stargear.png'}
					>
						<ul>
							<li>Browser multiplayer space 4X game</li>
							<li>Built using Javascript, Phaser.js, Node.js, Websockets and Bootstrap.</li>
							<li>Mobile friendly and responsive</li>
						</ul>
					</Project>
					<Project
						title={'Age Calculator Simple'}
						description={'Android App'}
						imgurl={'/images/projects/ageicon.png'}
						link={'https://play.google.com/store/apps/details?id=com.hamsterhole.www.agecalculator&hl=en'}
					>
						<ul>
							<li>Native Android App</li>
							<li>Quickly calculates a persons age based on his birth date</li>
							<li>Built for law enforcement officer</li>
						</ul>
					</Project>
					<Project
						title={'Easy Moves'}
						description={'Android App'}
						imgurl={'/images/projects/easymoves.png'}
						link={'https://play.google.com/store/apps/details?id=com.hamsterhole.www.easymoves&hl=en'}
					>
						<ul>
							<li>Native Android App</li>
							<li>Helps users catalog and organize during hectic moves</li>
						</ul>
					</Project>
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
						<div className='project-img-container' style={{backgroundImage: `url(${this.props.imgurl})`, backgroundSize: 'cover'}}>
							{/*<img src={this.props.imgurl} className='project-img' alt={this.props.title}/>*/}
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
									<div className='project-bottom'>
										{this.props.link &&
										<a href={this.props.link}> <i className='fa fa-external-link-square'
																	  style={{fontSize: 24}}/></a>}
									</div>
								</div>
							)}
						</Transition>
					</div>
				</div>
			</div>)
	}
}
