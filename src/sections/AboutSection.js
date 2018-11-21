import React, { Component } from 'react';
import Section from './Section';
import Card from '../components/Card';


export default class AboutSection extends Component {
	render() {
		return (<Section
			title='About'>
			<Card title="Hello, I'm Alex">
				<p>
					I'm a software engineer and a game developer located in the Southern California area.
				</p>
				<p>
					Though I graduated from University of California, Santa Barbara with a BS majoring in Computer Science in 2015, I have been developing games and software since I was in middle school. Some of my fondest memories as a child were hacking together games in GameMaker, and building programs in my graphing calculator. I have always wanted to create beautiful applications used by millions of people worldwide.
				</p>
				<p>
					Throughout my professional career, I have by chance mostly worked on frontend facing products. However I have always considered myself a full stack developer. I firmly believe a solid understanding of both the frontend and backend of an application leads to better results on both sides of development. It also allows for easier transitions between job roles.
				</p>
				<p>
					My passion has always been for creating the best products for the user. Often times my project start as an idea to improve an existing application. As such, I am always on the lookout for new ideas for projects, or new features to implement in existing projects.
				</p>
			</Card>
		</Section>)
	};
}
