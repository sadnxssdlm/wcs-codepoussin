<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/AZ2iWek.png" alt="Project logo"></a>
</p>
<h3 align="center">CodePoussin</h3>

<div align="center">

[![Hackathon](https://img.shields.io/badge/protojam-may25-orange.svg)](http://hackathon.url.com)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/sadnxssdlm/wcs-codepoussin.svg)](https://github.com/sadnxssdlm/wcs-codepoussin/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/sadnxssdlm/wcs-codepoussin.svg)](https://github.com/sadnxssdlm/wcs-codepoussin/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> CodePoussin is a French educational platform that introduces children aged 6-12 to programming through interactive learning. Built for Protojam, it features a gamified quiz system with age-appropriate programming questions and a visual block-based coding game with drag-and-drop functionality. The platform makes coding concepts accessible and fun, helping young learners develop computational thinking skills without the complexity of traditional programming environments.
    <br> 
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Dependencies / Limitations](#limitations)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement <a name = "problem_statement"></a>

**IDEAL:** Children should have access to intuitive, age-appropriate tools that introduce programming concepts in a fun and engaging way, helping them develop computational thinking skills from an early age. Parents and educators need accessible resources to support children's digital literacy without requiring extensive technical knowledge themselves.

**REALITY:** Most existing programming education tools are either too complex for young children (6-12 years) or lack the engaging elements necessary to maintain their attention. Many educational platforms require significant setup or prior knowledge from parents and teachers, creating barriers to entry for families wanting to explore coding education.

**CONSEQUENCES:** Without proper introduction to programming concepts at a young age, children miss critical opportunities to develop logical thinking and problem-solving skills. The digital divide widens as families without technical backgrounds struggle to provide their children with coding education, potentially limiting future career opportunities in an increasingly digital world.

## 💡 Idea / Solution <a name = "idea"></a>

CodePoussin addresses these challenges by providing a comprehensive, child-friendly platform with two main components:

**Interactive Quiz System:** Age-appropriate programming questions with progressive difficulty levels, instant feedback, and gamified elements that make learning feel like playing.

**Visual Block-Based Programming Game:** A drag-and-drop interface inspired by Scratch that allows children to create programs using visual blocks instead of text-based code, making abstract programming concepts tangible and understandable.

The platform is designed with French children in mind, ensuring cultural relevance and linguistic accessibility while maintaining universal programming education principles.

## ⛓️ Dependencies / Limitations <a name = "limitations"></a>

**Technical Dependencies:**
- Modern web browser with JavaScript enabled
- Stable internet connection for accessing the platform
- Device with mouse/touch interface for drag-and-drop functionality

**Current Limitations:**
- **Language Support:** Currently available only in French, limiting international accessibility
- **Offline Functionality:** Requires internet connection, which may limit access in areas with poor connectivity
- **Device Compatibility:** Optimized for desktop/tablet use; mobile experience may be limited due to drag-and-drop interface requirements
- **Content Scope:** As a hackathon project, the initial content library is limited and would need expansion for comprehensive curriculum coverage

These limitations exist due to the 48-hour hackathon timeframe and resource constraints. Future development phases could address these issues with additional development time and resources.

## 🚀 Future Scope <a name = "future_scope"></a>

**Short-term Goals:**
- Expand quiz question database with more diverse programming concepts
- Add more block types and programming challenges to the visual editor
- Implement user progress tracking and achievement systems
- Develop mobile-responsive design for better accessibility

**Long-term Vision:**
- Multi-language support (English, Spanish, German) for international reach
- Teacher dashboard for classroom integration and student progress monitoring
- Advanced block programming features including loops, conditionals, and functions
- Integration with physical computing devices (Arduino, micro:bit) for hands-on learning
- AI-powered adaptive learning that adjusts difficulty based on individual progress
- Community features allowing children to share and remix each other's creations

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

```
Node.js (version 14 or higher)
npm or yarn package manager
Git
```

### Installing

Follow these steps to set up the development environment:

1. Clone the repository
```bash
git clone https://github.com/sadnxssdlm/wcs-codepoussin.git
cd wcs-codepoussin
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env file with your configuration
```

4. Start the development server
```bash
npm run dev
```

The application should now be running on `http://localhost:3000`

## 🎈 Usage <a name="usage"></a>

**For Children:**
1. Visit the CodePoussin homepage
2. Choose between Quiz mode or Block Programming mode
3. In Quiz mode: Answer questions about programming concepts and receive immediate feedback
4. In Block Programming mode: Drag and drop visual blocks to create programs and see them execute in real-time

**For Educators:**
- Use the platform as a supplement to computer science curriculum
- Guide students through progressive challenges
- Encourage experimentation and creative problem-solving

**For Parents:**
- Sit with children during their first sessions to provide support
- Encourage regular practice sessions (15-30 minutes recommended)
- Celebrate achievements and progress milestones

## ⛏️ Built With <a name = "tech_stack"></a>

- **Frontend:** React.js with TypeScript for component-based UI development
- **Styling:** Tailwind CSS for responsive and modern design
- **Block Editor:** Custom drag-and-drop system built with React DnD
- **State Management:** React Context API for application state
- **Build Tool:** Vite for fast development and optimized builds
- **Deployment:** Vercel for seamless CI/CD and hosting

## ✍️ Authors <a name = "authors"></a>

**CodePoussin Team** - *Student Developers - Protojam Hackathon*

- [@Tristanzubi](https://github.com/Tristanzubi) 
- [@messicaa](https://github.com/messicaa) 
- [@K-Smagghe](https://github.com/K-Smagghe) 
- [@sadnxssdlm](https://github.com/sadnxssdlm) 

*This project was developed as part of our coding bootcamp training program during an inter-class hackathon competition.*

See also the list of [contributors](https://github.com/sadnxssdlm/wcs-codepoussin/contributors) who participated in this project.

## 🎉 Acknowledgments <a name = "acknowledgments"></a>

- **Protojam Hackathon** organizers for creating this inter-class competition opportunity
- **Wild Code School** for providing the training program and hackathon framework
- **Fellow students** from all classes in our promotion for the friendly competition spirit
- **Scratch** project by MIT for pioneering visual programming education
- **Our instructors** for guidance and support throughout our coding journey
- All beta testers who provided valuable feedback during development
- Open source community for the tools and libraries that made this project possible
