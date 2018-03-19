import React, {Component} from 'react';
import Section from './Section';

export default class AboutSection extends Component {
	render() {
		return (<Section
		title='About'>
			<h2>Hello, I'm Alex </h2>
				<p>
					I'm a software engineer and a game developer located in Los Angeles.
				</p>
				<p>
					This means that hamsters are not diurnal (active during the daytime, like humans), or nocturnal
					(active at
					night, like owls), but rather “crepuscular”, which means they are most active during the twilight
					hours.

					Wild hamsters generally leave their burrows shortly before the sun goes down and return once it gets
					dark.
				</p>
		</Section>)
	};
}
