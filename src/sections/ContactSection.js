import React, {Component} from 'react';
import Section from './Section';
import Card from '../components/Card';

export default class ContactSection extends Component {
	render() {
		return (<Section
			title='Contact'>
			<Card title='Reach me at:'>
				<div>
					<i className='fa fa-github'/> <a
					href="https://github.com/FrickenHamster">github.com/FrickenHamster</a>
				</div>
				<div>
					<i className='fa fa-envelope'/> <a href="mailto:alexalexyan@gmail.com">alexalexyan@gmail.com</a>
				</div>
			</Card>
		</Section>)
	};
}
