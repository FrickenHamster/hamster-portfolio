import React, { Component } from 'react';
import Section from './Section';
import Card from '../components/Card';

export default class ExperienceSection extends Component {
	render() {
		return (
			<Section title='Experience'>
				<div className="container">
					<Card title='Iconic Games Developer / AAY Freelancing (October 2016 - present)' className='mb-3'>
						<i>As a Game Developer, I worked on freelance projects and a large scale Zelda styled game. I later branched out into doing freelancing projects myself</i>
						<ul>
							<li>Delivered custom solutions to client</li>
							<li>Built mobile responsive games and web applications</li>
							<li>Products include "Wire.IO", "Fly or Die" and "Vex" HTML conversion</li>
							<li>Worked on large scale Unity 2d game</li>
						</ul>
					</Card>
					<Card title='Appfolio Software Developer (August 2015 - October 2016)' className='mb-3'>
						<i>As a Software Engineer, I worked on modernizing Appfolio's Ruby on Rails application and building the first iterations of the React Native app</i>
						<ul>
							<li>Converted tenant page to be responsive and modern</li>
							<li>Split portions of Monolith app to microservices</li>
							<li>Built react native app for web service</li>
							<li>Updated old parts of codebase</li>
							<li>Contributed to expansive testing framework</li>
							<li>Mentored interns</li>
						</ul>
					</Card>
					<Card title="Microsoft Software Development Intern (Summer 2014)">
						<i>As an Software Development Intern for the Lync team, I developed features to improve Lync</i>
						<ul>
							<li>Prototyped videomail feature for Lync</li>
							<li>Developed with Windows Media Foundations in C++</li>
							<li>Adapted Existing backend to send videos</li>
						</ul>
					</Card>
				</div>
			</Section>)
	}
}
