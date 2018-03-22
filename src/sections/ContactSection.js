import React, {Component} from 'react';
import Section from './Section';
import Card from '../components/Card';

export default class ContactSection extends Component {
	render() {
		return (<Section
			title='Contact'>
			<Card title='Reach me at:' outerStyle={{paddingTop: 150, paddingBottom: 200}}>
				<div className='p-4' style={{fontSize: 30}}>
					<div className='pb-2'>Feel free to contact me for questions, opportunities, or anything you can think of</div>
					<div>
						<i className='fa fa-github'/> <a
						href="https://github.com/FrickenHamster">github.com/FrickenHamster</a>
					</div>
					<div>
						<i className='fa fa-envelope'/> <a href="mailto:alexalexyan@gmail.com">alexalexyan@gmail.com</a>
					</div>
					<div>
						<i className='fa fa-file-text-o'/> <a href="https://goo.gl/FNwgCS">https://goo.gl/FNwgCS</a>
					</div>
				</div>
			</Card>
		</Section>)
	};
}
