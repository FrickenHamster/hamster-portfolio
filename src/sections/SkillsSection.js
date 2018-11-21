import React, {Component} from 'react';
import Section from './Section';
import Card from '../components/Card';
import './Skills.css';

export default class SkillsSection extends Component {
	render() {
		return (<Section title="Skills">
			<div className="card-container">
				<Card title='Frontend' className='pb-4'>
					<div className='row p-2'>
						<Skill
							name='React'
							url='images/skills/react.png'
						/>
						<Skill
							name='Redux'
							url='images/skills/redux.png'
						/>
						<Skill
							name='JQuery'
							url='images/skills/jquery.png'
						/>
						<Skill
							name='Bootstrap'
							url='images/skills/bootstrap.png'
						/>
						<Skill
							name='HTML'
							url='images/skills/html.png'
						/>
						<Skill
							name='CSS'
							url='images/skills/css.png'
						/>
						<Skill
							name='SASS'
							url='images/skills/sass.png'
						/>
					</div>
				</Card>
				<Card title='Backend' className='pb-4'>
					<div className='row p-4'>
						<Skill
							name='Node'
							url='images/skills/node.png'
						/>
						<Skill
							name='Rails'
							url='images/skills/rails.png'
						/>
						{/*<Skill
							name='ASP.NET'
							url='images/skills/dotnet.png'
						/>*/}
						<Skill
							name='Websockets'
							url='images/skills/websockets.png'
						/>
					</div>
				</Card>
				<Card title='Mobile' className='pb-4'>
					<div className='row p-4'>
						<Skill
							name='Android'
							url='images/skills/android.png'
						/>
						<Skill
							name='React Native'
							url='images/skills/react.png'
						/>
					</div>
				</Card>
				<Card title='Data' className='pb-4'>
					<div className='row p-4'>
						<Skill
							name='Postgres'
							url='images/skills/postgres.png'
						/>
						<Skill
							name='MongoDB'
							url='images/skills/mongo.png'
						/>
						<Skill
							name='SQLite'
							url='images/skills/sqlite.png'
						/>
						<Skill
							name='Memcached'
							url='images/skills/memcached.png'
						/>
					</div>
				</Card>
				<Card title='Games' className='pb-4'>
					<div className='row p-4'>
						<Skill
							name='Phaser'
							url='images/skills/phaser.png'
						/>
						<Skill
							name='Pixi'
							url='images/skills/pixi.png'
						/>
						<Skill
							name='Unity'
							url='images/skills/unity.png'
						/>
						<Skill
							name='Flash'
							url='images/skills/flash.png'
						/>
					</div>
				</Card>

				<Card title='Build Tools' className='pb-4'>
					<div className='row p-4'>
						<Skill
							name='Webpack'
							url='images/skills/webpack.png'
						/>
						<Skill
							name='Grunt'
							url='images/skills/grunt.png'
						/>
					</div>
				</Card>
				<Card title='Languages' className='pb-4'>
					<div className='row p-4'>
						<Skill
							name='Typescript'
							url='images/skills/ts.png'
						/>
						<Skill
							name='Javascript'
							url='images/skills/js.png'
						/>
						<Skill
							name='Ruby'
							url='images/skills/ruby.png'
						/>
						<Skill
							name='C#'
							url='images/skills/csharp.png'
						/>
						<Skill
							name='C++'
							url='images/skills/cpp.png'
						/>
						<Skill
							name='Java'
							url='images/skills/java.png'
						/>

					</div>
				</Card>
			</div>
		</Section>)
	}
}

class Skill extends Component {
	render() {
		return (<div className='col-4 col-sm-2 text-center mb-2'>
			<div className='skill-top'>
				<div className="skill-img-container">
					<img src={this.props.url} className={"skill-img"} alt={this.props.name}/>
				</div>
			</div>
			<div className='skill-name text-nowrap'>{this.props.name}</div>
		</div>);
	}
}
