# MindSpace

MindSpace is a student-focused community platform where students can anonymously or pseudonymously share academic and personal problems and receive helpful ideas from other students.

## Problem

Many students struggle with academic and personal challenges but may not know who to talk to or what steps to take.

MindSpace provides a simple community space where students can share their concerns and receive ideas from other students.

## Target Users

MindSpace is designed for students who need a safe and supportive space to discuss academic and personal challenges.

## Core Features

- Anonymous or pseudonymous posting
- Academic and personal problem sharing
- Problem categories
- Community feed
- Replies and ideas from other students
- Report inappropriate or harmful content
- Community guidelines
- Safety disclaimer
- Persistent data storage using Supabase

## Categories

Students can organize their posts into categories such as:

- Academic
- Relationships
- Family
- Finance
- Campus Life
- Personal

## How MindSpace Works

1. A student opens MindSpace.
2. The student can read the community feed.
3. The student can share an academic or personal problem.
4. The student can choose to appear anonymously or as a pseudonymous student.
5. Other students can read the problem and share helpful ideas.
6. Users can report content that violates the community guidelines.

## Technology

- React
- Vite
- React Router
- Supabase
- CSS
- Vercel for deployment

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   └── PostCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Feed.jsx
│   ├── CreatePost.jsx
│   ├── PostDetails.jsx
│   └── GuideLines.jsx
│
├── data/
│   └── posts.js
│
├── App.jsx
├── App.css
├── index.css
├── main.jsx
└── supabaseClient.js
```