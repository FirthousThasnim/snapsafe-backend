# SnapSafe – Emergency Contact & SOS Alert Management System

## Problem Description
In emergency situations, people struggle to quickly alert their trusted contacts or get help fast. There is no simple system to manage emergency contacts and trigger SOS alerts instantly.

## Proposed Solution
SnapSafe is a backend REST API system that allows users to:
- Manage their emergency contacts
- Trigger SOS alerts instantly
- Track alert status in real-time

## Features
- User Management (CRUD)
- Emergency Contact Management (CRUD)
- SOS Alert Management (CRUD)
- RESTful API Architecture
- MongoDB Database Integration

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (API Testing)
- GitHub (Version Control)

## API Endpoints

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/users | Create User |
| GET | /api/users | Get All Users |
| GET | /api/users/:id | Get User By ID |
| PUT | /api/users/:id | Update User |
| DELETE | /api/users/:id | Delete User |

### Emergency Contacts
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/contacts | Create Contact |
| GET | /api/contacts | Get All Contacts |
| GET | /api/contacts/:id | Get Contact By ID |
| PUT | /api/contacts/:id | Update Contact |
| DELETE | /api/contacts/:id | Delete Contact |

### SOS Alerts
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/alerts | Create Alert |
| GET | /api/alerts | Get All Alerts |
| GET | /api/alerts/:id | Get Alert By ID |
| PUT | /api/alerts/:id | Update Alert |
| DELETE | /api/alerts/:id | Delete Alert |

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed
- Postman installed

### How to Run

1. Clone the repository
\`\`\`
git clone <your-repo-link>
\`\`\`

2. Install dependencies
\`\`\`
npm install
\`\`\`

3. Create .env file
\`\`\`
PORT=5000
MONGO_URI=mongodb://localhost:27017/snapsafedb
\`\`\`

4. Run the server
\`\`\`
npm run dev
\`\`\`

5. Open Postman and test endpoints at:
\`\`\`
http://localhost:5000
\`\`\`