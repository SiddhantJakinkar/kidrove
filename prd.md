# PRD.md

# Product Requirements Document

## Project

AI & Robotics Summer Workshop Landing Page

## Objective

Build a responsive workshop landing page for Kidrove that increases workshop enrollments and provides a smooth registration experience.

---

## Target Audience

Primary:

* Parents of children aged 8–14

Secondary:

* Students interested in coding
* STEM enthusiasts
* Existing Kidrove users

---

## Business Goal

Increase workshop registrations for:

AI & Robotics Summer Workshop

---

## Workshop Details

Title:
AI & Robotics Summer Workshop

Age Group:
8–14 Years

Duration:
4 Weeks

Mode:
Online

Fee:
₹2,999

Start Date:
15 July 2026

---

## Functional Requirements

### Hero Section

Must Include:

* Workshop title
* Description
* Primary CTA

CTA:
Enroll Now

---

### Workshop Details

Display:

* Age Group
* Duration
* Mode
* Fee
* Start Date

---

### Learning Outcomes

Minimum:
5 Outcomes

Required:

* AI Basics
* Robotics Concepts
* Coding Skills
* Machine Learning Introduction
* Problem Solving

---

### FAQ

Minimum:
3 Questions

Accordion functionality required.

---

### Registration Form

Fields:

* Name
* Email
* Phone Number

Validation:

* Required
* Valid Email
* Valid Phone

Submit Action:
POST /api/enquiry

---

## Backend Requirements

### Endpoint

POST /api/enquiry

### Request Body

{
"name": "John Doe",
"email": "[john@example.com](mailto:john@example.com)",
"phone": "9876543210"
}

### Validation

Required:

* name
* email
* phone

Email:
Regex validation

Phone:
10-digit validation

### Success Response

Status:
200

{
"success": true,
"message": "Enquiry submitted successfully"
}

### Error Response

Status:
400

{
"success": false,
"message": "Validation failed"
}

---

## Technical Requirements

Frontend:

* React.js
* TypeScript
* Tailwind CSS

Optional:

* Framer Motion
* React Hook Form
* Zod

Backend:

* Express.js

Optional:

* MongoDB
* Mongoose

---

## Non Functional Requirements

Performance:

* Lighthouse > 90

Accessibility:

* WCAG AA

Responsive:

* Mobile
* Tablet
* Desktop

SEO:

* Meta title
* Meta description
* Open Graph tags

---

## Deliverables

Frontend:

* Landing Page

Backend:

* Express API

Repository:

* GitHub

Deployment:

* Vercel / Netlify

---

## Future Improvements

* Razorpay Integration
* WhatsApp Notifications
* Email Confirmation
* Admin Dashboard
* Seat Availability Counter
* Testimonials Section
* Workshop Certificates Portal

---

## Success Metrics

Primary KPI:
Workshop Enrollments

Secondary KPIs:

* Form Conversion Rate
* CTA Click Rate
* Time on Page
* Bounce Rate
