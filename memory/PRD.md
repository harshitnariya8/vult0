# AI Receptionist Landing Page - Product Requirements Document

## Original Problem Statement
Build a high-converting AI Receptionist landing page for lawyers, hotel owners, and frontdesk professionals. The landing page should follow aggressive, conversion-focused copywriting that emphasizes the pain of missed calls and lost revenue.

## User Personas
- **Primary**: Law firm owners and partners who are losing clients due to missed calls
- **Secondary**: Hotel owners and frontdesk managers who need 24/7 coverage
- **Pain Points**: After-hours calls, overwhelmed receptionists, no structured intake, dead pipeline

## Core Requirements (Static)

### Design System
- **Color Palette**: #F2F2F2 (cream), #EAE4D5 (warm cream), #B6B09F (warm gray), #000000 (black)
- **Design Guidelines**: Warm-AI design system with glass-morphism effects
- **Typography**: SF Mono for buttons, system fonts for body text
- **Components**: Pill-shaped buttons, rounded cards with hover animations

### Key Sections
1. **Hero Section**: Powerful headline about losing cases + trust indicators
2. **Reality Check**: Data-driven ROI visualization
3. **Pain Points**: What's actually happening section
4. **Product Features**: 6 feature cards with accent colors
5. **Demo Player**: Mock audio player with transcript
6. **ROI Calculator**: Interactive real-time calculator
7. **Testimonials**: Social proof from 3 law firms
8. **FAQ Section**: Objection handling accordion
9. **Final CTA**: Lead capture form with demo booking

### User Choices
- Interactive ROI calculator (frontend only) ✓
- OpenAI Realtime API for future voice integration
- Store leads in database with email notifications (backend phase)
- Modern stock images (no 3D avatars for now)
- Landing page first, backend features later

## What's Been Implemented (Dec 2024)

### Phase 1: Frontend with Mock Data ✓
**Date**: December 2024

**Components Created**:
- `/app/frontend/src/components/LandingPage.jsx` - Main landing page
- `/app/frontend/src/components/ROICalculator.jsx` - Interactive calculator
- `/app/frontend/src/components/DemoPlayer.jsx` - Audio demo player
- `/app/frontend/src/mockData.js` - Mock testimonials, features, FAQs
- `/app/frontend/src/styles/landing.css` - Complete warm-ai design system

**Features**:
- ✓ Hero section with gradient background and trust bar
- ✓ Reality check section with loss calculator visualization
- ✓ Pain points section with 4 problem cards
- ✓ Product features with 6 colored voice-interface cards
- ✓ Demo player with mock transcript and audio controls
- ✓ Interactive ROI calculator with real-time calculations
- ✓ Testimonials grid with 3 law firm testimonials
- ✓ Stats section with key metrics
- ✓ FAQ accordion with 5 common questions
- ✓ Final CTA with lead capture form (frontend only)
- ✓ Responsive design for mobile, tablet, desktop
- ✓ Smooth animations and hover effects
- ✓ Fixed header navigation with mobile menu

**Images Selected**:
- Professional office reception images (hero section)
- AI voice technology waveforms (demo section)
- Business success and handshake images (testimonials)
- Stressed receptionist images (pain points)

**Interactive Elements**:
- ROI calculator with 3 sliders: calls per week, conversion rate, case value
- Real-time calculation showing missed calls, lost revenue, annual loss
- Smooth scroll navigation
- FAQ accordion open/close
- Mobile hamburger menu
- Audio player play/pause simulation

## Prioritized Backlog

### P0 (Next Phase - Backend Development)
1. **Lead Capture API** 
   - Create MongoDB schema for leads
   - POST endpoint for demo booking form submissions
   - Email notification integration
   - Lead dashboard for admin

2. **OpenAI Realtime API Integration**
   - Replace mock demo audio with actual AI voice conversation
   - Record and store sample legal consultations
   - Transcription display in real-time

3. **Authentication System**
   - Admin login for viewing leads
   - Protected dashboard route
   - JWT-based auth

### P1 (Future Enhancements)
- Analytics integration (page views, conversions)
- A/B testing for different hero headlines
- Video demo instead of audio
- Live chat widget
- Multi-language support (Hindi, English)

### P2 (Nice to Have)
- 3D avatar animations
- Interactive voice demo (users can ask questions)
- Integration with popular legal CRMs
- Booking calendar integration
- SMS follow-up automation

## API Contracts (For Backend Phase)

### Lead Capture
```
POST /api/leads
Body: {
  name: string,
  email: string,
  phone: string,
  firm: string (optional),
  timestamp: datetime
}
Response: {
  success: boolean,
  message: string,
  leadId: string
}
```

### Demo Audio (Future)
```
GET /api/demo/audio
Response: {
  audioUrl: string,
  transcript: array,
  metadata: object
}
```

## Next Tasks
1. ✅ Complete frontend with mock data
2. ✅ Add interactive ROI calculator
3. ✅ Implement responsive design
4. 🔜 Backend API for lead capture
5. 🔜 Email notification system
6. 🔜 OpenAI Realtime API integration for demo audio
7. 🔜 Admin dashboard for viewing leads

## Notes
- Using mock data in mockData.js for all dynamic content
- ROI calculator performs calculations client-side
- Form submission shows alert (will connect to backend)
- Demo audio player simulates playback (no actual audio file yet)
- All images sourced from Unsplash/Pexels via vision_expert_agent
