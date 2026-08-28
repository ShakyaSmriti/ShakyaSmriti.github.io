export const projects = [
  {
    name: 'Spell Wizards',
    type: 'AI-powered educational application (Web + Mobile)',
    summary:
      'A gamified, voice-interactive learning app for children, with a parent portal for onboarding and account management.',
    areas: [
      'Onboarding & child profile creation',
      'AI chat & voice-recognition quizzes',
      'Gamified learning flows (levels, hearts, progress)',
      'Navigation & back-button behavior',
      'Session & progress persistence',
      'Account settings & deletion',
      'Cross-platform behavior (iOS + Web)',
    ],
    tools: ['Postman', 'Swagger', 'TestFlight', 'Browser DevTools'],
    findings:
      'Found broken back-button navigation, lost quiz progress, voice answers not being recognized, and account deletion errors.',
    learned:
      'Voice and gamified flows need extra testing — things like repeated back-button taps or backgrounding the app reveal bugs a normal walkthrough misses.',
    link: null,
  },
  {
    name: 'Comic Smith',
    type: 'AI-powered comic creation application',
    summary:
      'An AI tool for generating comics, tested across authentication, account lifecycle, and core UI flows on web.',
    areas: [
      'Authentication (email, Google, Apple login)',
      'Password & validation rules',
      'Search & filtering',
      'Account deletion & session handling',
      'Responsive UI across devices',
      'Navigation & routing',
    ],
    tools: ['Postman', 'Swagger', 'Browser DevTools'],
    findings:
      'Found weak password validation, a non-working search bar, and a session bug where deleting the account on iOS didn\u2019t log the user out on web.',
    learned:
      'Account and login bugs matter most, since they directly affect user trust — always test deletion and sessions across platforms.',
    link: null,
  },
  {
    name: 'OCR',
    type: 'AI-powered OCR & document processing platform',
    summary:
      'A SaaS platform for OCR-based document extraction and custom AI agent creation. Tested signup, password rules, and the agent-creation flow.',
    areas: [
      'Signup (individual & business accounts)',
      'Password policy & validation messaging',
      'Forgot password / OTP flow',
      'Dashboard & user identity display',
      'Custom AI agent creation & payment flow',
    ],
    tools: ['Postman', 'Swagger', 'Browser DevTools'],
    findings:
      'Found mismatched password rules between frontend and backend, a broken OTP check, and the dashboard showing the wrong user\u2019s name.',
    learned:
      'Frontend and backend validation need to be tested together — they don\u2019t always agree.',
    link: null,
  },
  {
    name: 'API Testing & Validation',
    type: 'Dedicated API testing practice',
    summary:
      'Hands-on validation of REST APIs using Postman and Swagger, covering the core HTTP verbs and their expected contract behavior.',
    areas: [
      'GET → validating response structure and data accuracy',
      'POST → validating request body and required fields',
      'PUT → validating partial and full updates',
      'DELETE → validating removal and follow-up GET checks',
    ],
    tools: ['Postman', 'Swagger', 'JSON'],
    findings:
      'Caught mismatched status codes on invalid payloads and missing validation on optional fields.',
    learned:
      'A clear request → status code → response body → validation habit catches far more issues than testing the happy path alone.',
    link: null,
  },
]