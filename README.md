# SafeTrain360 - Warehouse Safety Training System

## Overview
SafeTrain360 is an interactive 360-degree warehouse safety training web application prototype developed for the University of Sunderland CET257 Enterprise Project assessment. It demonstrates hazard perception and manual handling training modules for warehouse operatives.

## Project Goals
- Provide interactive safety training for warehouse workers with low technical skills
- Demonstrate core functionality, user flow, and training logic
- Create a demo-ready prototype suitable for client presentation

## Current State
The application is fully functional with all 5 pages implemented:
- Home/Landing page
- Module Selection page
- Hazard Perception training module
- Manual Handling training module
- Results/Feedback page

## Project Architecture

### Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Backend**: Node.js with Express (static file serving only)
- **State Management**: sessionStorage for client-side score tracking
- **No database** - pure frontend prototype

### File Structure
```
/
├── server.js           # Express server for static files
├── package.json        # Node.js dependencies
├── public/
│   ├── index.html      # Home/Landing page
│   ├── modules.html    # Module selection page
│   ├── hazard.html     # Hazard Perception module
│   ├── handling.html   # Manual Handling module
│   ├── result.html     # Results & feedback page
│   ├── style.css       # All styling (accessible, responsive)
│   └── script.js       # Training logic and score tracking
└── attached_assets/    # Original specification documents
```

### Key Features
1. **Hazard Perception Module**: Interactive warehouse scene with 5 clickable hazard hotspots (spillage, loose boxes, blocked exit, trailing cable, broken pallet)
2. **Manual Handling Module**: 4 scenarios teaching correct lifting techniques with posture selection
3. **Score Tracking**: JavaScript-based scoring across modules using sessionStorage
4. **Accessibility**: Large buttons, high contrast, minimal text, clear visual cues
5. **Responsive Design**: Works on desktop and mobile devices

## User Preferences
- Target users: Warehouse operatives with low technical skills
- Very simple navigation required
- Large buttons and clear instructions
- Minimal text with strong visual cues
- Fast interaction and immediate feedback

## Recent Changes
- 2024-12-17: Initial implementation of all 5 pages
- 2024-12-17: Created hazard perception module with 5 interactive hotspots
- 2024-12-17: Created manual handling module with 4 training scenarios
- 2024-12-17: Implemented score tracking and results display
- 2024-12-17: Added responsive CSS with accessibility features

## Running the Application
The application runs on port 5000 via the Express server:
```bash
node server.js
```

## Assessment Alignment
This prototype aligns with CET257 marking criteria:
- Demonstrates user flow from home → modules → training → results
- Shows interaction logic with immediate feedback
- Illustrates training effectiveness with scoring system
- Clean, commented code suitable for academic review
