import React, {Component} from 'react';
import CoverPage from './sections/CoverPage';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';

class App extends Component {
	render() {
		return (
			<div>
				<CoverPage/>
				<AboutSection/>
				<ExperienceSection />
				<ProjectsSection />
				<SkillsSection />
				<ContactSection />
			</div>
		);
	}
}

export default App;
