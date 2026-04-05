// Mock data for AI Receptionist Landing Page

export const testimonials = [
  {
    id: 1,
    name: "Advocate Rajesh Kumar",
    firm: "Kumar & Associates",
    image: "https://images.unsplash.com/photo-1638262052640-82e94d64664a",
    quote: "We were losing 15-20 calls every week. Since implementing this AI receptionist, our consultation bookings increased by 240%. Every call is now a potential client.",
    metrics: "240% increase in bookings"
  },
  {
    id: 2,
    name: "Priya Sharma",
    firm: "Sharma Legal Services",
    image: "https://images.pexels.com/photos/8441870/pexels-photo-8441870.jpeg",
    quote: "The after-hours coverage alone paid for itself in the first month. We signed 3 high-value cases from calls that came in at 9 PM.",
    metrics: "₹8L+ in recovered revenue"
  },
  {
    id: 3,
    name: "Aditya Verma",
    firm: "Verma Law Chambers",
    image: "https://images.pexels.com/photos/8815826/pexels-photo-8815826.jpeg",
    quote: "It's like having a trained paralegal working 24/7. The qualification process is thorough, and I only get serious leads now.",
    metrics: "87% reduction in missed calls"
  }
];

export const features = [
  {
    id: 1,
    title: "Answers Every Call Instantly",
    description: "24/7 availability means zero missed opportunities. Your AI receptionist never sleeps, takes breaks, or goes on vacation.",
    icon: "Phone"
  },
  {
    id: 2,
    title: "Speaks Like a Legal Professional",
    description: "Trained on real legal conversations with proper terminology. Sounds natural, professional, and trustworthy.",
    icon: "MessageSquare"
  },
  {
    id: 3,
    title: "Qualifies Every Lead",
    description: "Asks the right questions: case type, urgency, budget. You only see qualified prospects ready to hire.",
    icon: "CheckCircle"
  },
  {
    id: 4,
    title: "Books Consultations Automatically",
    description: "Syncs with your calendar in real-time. Sends confirmations via SMS and email. Zero double bookings.",
    icon: "Calendar"
  },
  {
    id: 5,
    title: "Smart Follow-ups",
    description: "Automatically sends WhatsApp and SMS follow-ups. Nurtures leads who aren't ready to book immediately.",
    icon: "Send"
  },
  {
    id: 6,
    title: "CRM Integration",
    description: "Every conversation logged automatically. Full transcripts, call recordings, and lead scoring in your dashboard.",
    icon: "Database"
  }
];

export const painPoints = [
  {
    id: 1,
    problem: "Calls after office hours",
    result: "Gone forever",
    icon: "Clock"
  },
  {
    id: 2,
    problem: "Receptionist busy",
    result: "Missed opportunity",
    icon: "PhoneOff"
  },
  {
    id: 3,
    problem: "No structured intake",
    result: "Bad leads waste time",
    icon: "AlertCircle"
  },
  {
    id: 4,
    problem: "No follow-up system",
    result: "Dead pipeline",
    icon: "TrendingDown"
  }
];

export const faqs = [
  {
    id: 1,
    question: "Will this sound robotic?",
    answer: "No. It's trained on real legal conversations and uses natural language patterns. Most callers can't tell it's AI. The voice is warm, professional, and conversational."
  },
  {
    id: 2,
    question: "What about complex cases?",
    answer: "The AI qualifies and gathers initial information, then escalates to you. It knows when to transfer urgent matters immediately and when to schedule consultations."
  },
  {
    id: 3,
    question: "Will clients trust it?",
    answer: "Clients care about fast response and feeling heard. The AI provides both. In testing, 94% of callers rated their experience as 'professional' or 'very professional'."
  },
  {
    id: 4,
    question: "How quickly can we get started?",
    answer: "Setup takes 15 minutes. We configure it with your practice areas, availability, and pricing. You can be live the same day."
  },
  {
    id: 5,
    question: "What if I already have a receptionist?",
    answer: "Perfect! This handles overflow, after-hours, and weekends. Your receptionist focuses on in-person clients while AI handles phone intake."
  }
];

export const stats = [
  {
    id: 1,
    value: "5,000+",
    label: "Client calls handled"
  },
  {
    id: 2,
    value: "87%",
    label: "Reduction in missed calls"
  },
  {
    id: 3,
    value: "2.3x",
    label: "More booked consultations"
  },
  {
    id: 4,
    value: "24/7",
    label: "Always available"
  }
];

// Mock audio transcript for demo section
export const demoTranscript = {
  callDuration: "2:34",
  date: "Today, 9:47 PM",
  transcript: [
    { speaker: "AI", text: "Good evening! Thank you for calling Kumar & Associates. I'm here to help. May I have your name, please?" },
    { speaker: "Caller", text: "Hi, yes, my name is Vikram. I need a lawyer for a property dispute." },
    { speaker: "AI", text: "I understand, Vikram. Property disputes can be stressful. Can you briefly tell me what happened?" },
    { speaker: "Caller", text: "My neighbor is claiming part of my land. I have all the documents, but he's threatening legal action." },
    { speaker: "AI", text: "I see. This sounds like a boundary dispute case. Do you have the property deed and survey documents?" },
    { speaker: "Caller", text: "Yes, I have everything." },
    { speaker: "AI", text: "Excellent. Our firm handles property disputes regularly. I'd like to schedule a consultation with Advocate Kumar. Are you available this Thursday at 11 AM or Friday at 3 PM?" },
    { speaker: "Caller", text: "Thursday at 11 works for me." },
    { speaker: "AI", text: "Perfect! I've booked you for Thursday, January 4th at 11:00 AM. You'll receive a confirmation via SMS with our office address and what documents to bring. Is this the best number to reach you?" },
    { speaker: "Caller", text: "Yes, this is my number. Thank you!" },
    { speaker: "AI", text: "You're welcome, Vikram. We look forward to meeting you on Thursday. Have a good evening!" }
  ]
};
