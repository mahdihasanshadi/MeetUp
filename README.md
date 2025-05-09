# MeetUp

MeetUp is a video conferencing app designed to help users connect, communicate, and collaborate in real-time. It provides seamless online and offline experiences with user authentication powered by Clerk.

## Features

- User authentication (Sign In/Sign Up) using Clerk.
- Middleware for route protection.
- Responsive design with modern UI.
- Redirection to the home page after login.
- Built with Next.js 13+ and the `app` directory.

## Tech Stack

- **Frontend**: React, Next.js 13+, Tailwind CSS
- **Authentication**: Clerk
- **Middleware**: Clerk Middleware for route protection
- **Styling**: Tailwind CSS with custom themes

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/MeetUp.git
   cd MeetUp

2. install dependencies:
   
   npm install
   
3. Set up environment variables: Create a .env.local file in the root directory and add the following:
   
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
  CLERK_SECRET_KEY=your-clerk-secret-key
  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/login
  NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/register
4. Start the development server:
  npm run dev

5. Open the app in your browser:
   http://localhost:3000
   
Folder Structure:

meetup/
├── app/
│   ├── auth/
│   │   ├── login/
│   │   │   └── [[...sign-in]]/page.tsx
│   │   ├── register/
│   │       └── [[...register]]/page.tsx
│   ├── home/
│   │   └── page.tsx
│   └── layout.tsx
├── [middleware.ts](http://_vscodecontentref_/1)
├── .env.local
├── [package.json](http://_vscodecontentref_/2)
└── [README.md](http://_vscodecontentref_/3)



Author
Developed by Mahdi Hasan Shadi.




