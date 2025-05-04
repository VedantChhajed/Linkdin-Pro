# LinkedIn Pro

This project is a hackathon submission that reimagines LinkedIn with enhanced features for professional networking, skill validation, and career development. The application recreates the core LinkedIn experience while adding innovative features that improve skill verification and professional collaboration.

## Features

**Profile Management**
- Profile Display: Shows comprehensive professional information including experience, education, skills, and recommendations
- Dynamic Header: User profile with name, headline, location, and connection statistics
- Availability Toggle: Indicates open status for new opportunities or collaborations

**Skill Validation System**
- Timeline Visualization: Interactive timeline showing skill development history (vis-timeline integration)
- Skill Quizzes: Timed assessment system to validate claimed skills with automated scoring
- Enhanced Endorsements: Traditional endorsement system with validation mechanics

**Visual Endorsements**
- Video Testimonials: Upload and display video-based skill endorsements
- Endorsement Requests: System to request video endorsements from colleagues
- Media Playback: Integrated React Player for smooth video testimonial viewing

**Networking Features**
- Collaboration Portal: Direct messaging system for project collaboration requests
- Recommendation Engine: Display and management of professional recommendations
- Connection Analytics: Connection tracking and display with interaction metrics

**User Interface**
- Responsive Design: Mobile-first interface that adapts to all screen sizes
- Modern Styling: Clean interface built with Tailwind CSS
- Interactive Elements: Modal-based interfaces for specialized actions

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data Visualization**: 
  - vis-timeline and vis-data for skill timeline visualization
  - React Calendar for date selection
- **Media**: React Player for video playback
- **State Management**: React Hooks (useState, useEffect)

## 🏗️ Project Structure

```
src/
├── components/             # React components
│   ├── AboutSection.tsx     # About section component
│   ├── CollaborationSection.tsx  # Collaboration request section
│   ├── EducationSection.tsx  # Education display section
│   ├── ExperienceSection.tsx  # Work experience section
│   ├── Header.tsx           # Application header
│   ├── ProfileHeader.tsx    # Profile information display
│   ├── QuizModal.tsx        # Skill validation quiz modal
│   ├── RecommendationsSection.tsx  # Recommendations display
│   ├── SkillsSection.tsx     # Skills display and management
│   ├── SkillTimelineModal.tsx  # Skill timeline visualization
│   └── VideoEndorsementModal.tsx  # Video endorsement functionality
├── data/                   # Data management
│   ├── profileData.ts       # Sample profile data
│   └── quizQuestions.ts     # Skill validation questions
├── hooks/                  # Custom React hooks
│   └── useProfile.ts        # Profile management hook
├── App.tsx                 # Main application component
├── index.css               # Global styles
├── main.tsx                # Application entry point
└── types.ts                # TypeScript type definitions
```

## Requirements

- Node.js (v16+)
- npm or yarn

## Setup and Running

Clone the repository:
```bash
git clone <your-repository-url>
cd linkedin-pro
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

The application will be available at http://localhost:5173

## Build

Build the project for production:
```bash
npm run build
```

The compiled files will be available in the `dist` directory.

## Feature Implementation Details

**Skill Timeline**
The timeline visualization is implemented using vis-timeline and vis-data libraries to create an interactive representation of skill development history. This component maps when skills were first learned and last used professionally.

**Video Endorsement System**
The video endorsement feature uses React Player for media handling and offers two key functions:
- Request endorsements: Sends email requests to colleagues for video testimonials
- Self-upload: Allows users to add their own demonstration videos for specific skills

**Quiz Validation System**
The skill validation quiz system includes:
- Timed assessments for specific skill categories
- Automatically scored questions with pass/fail thresholds
- Question pooling from a database of skill-specific tests

**Collaboration Portal**
The collaboration system enables direct professional connections by:
- Allowing users to indicate project availability 
- Providing a message composition interface for collaboration requests
- Tracking and displaying collaboration history

## Future Development

- Real-time messaging capability
- Integration with learning resource platforms
- Project portfolio showcase
- Analytics dashboard for profile engagement metrics

---

This project was created for a hackathon as a reimagined version of LinkedIn with enhanced professional networking features.
