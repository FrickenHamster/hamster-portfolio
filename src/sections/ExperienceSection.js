import React, { Component } from 'react';
import Section from './Section';
import Card from '../components/Card';

export default class ExperienceSection extends Component {
	render() {
		return (
			<Section title='Experience'>
				<div className="container">
					<Card title='Appfolio Software Developer' className='mb-3'>
						I worked on Appfolio's Saas property management web application
						<ul>
							<li>Converted tenant page to be responsive and modern</li>
							<li>Built react native app for web service</li>
							<li>Updated old parts of codebase</li>
							<li>Mentored interns</li>
						</ul>
					</Card>
					<Card title="Microsoft Software Development Intern">
						<ul>
							<li>Prototyped videomail feature for Lync</li>
							<li>Adapted </li>
						</ul>
					</Card>
				</div>
			</Section>)
	}
}
