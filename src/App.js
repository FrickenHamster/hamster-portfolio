import React, {Component} from 'react';
import CoverPage from './sections/CoverPage';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {showSidebar: false}
	}
	
	toggleSidebar() {
		this.setState({showSidebar: !this.state.showSidebar});
	}
	
	render() {
		return (
			<div className='wrapper'>
				<Sidebar show={this.state.showSidebar} toggleFunc={this.toggleSidebar.bind(this)}/>
				<div id='content'>
					<Topbar toggleFunc={this.toggleSidebar.bind(this)}/>
					<CoverPage/>
					<AboutSection/>
					<ExperienceSection/>
					<ProjectsSection/>
					<SkillsSection/>
					<ContactSection/>
				</div>
			</div>
		);
	}
}

export default App;
