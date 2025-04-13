Storyteller Website
Welcome to the Storyteller Website! This is a dynamic web application built using Angular, Node.js, Express, and MongoDB. The goal of this project is to create a platform where users can share and read stories, with the ability to update content dynamically through API calls. Data is stored in MongoDB to ensure persistent storage of user-submitted stories.

Features
Dynamic Content Updates: The content of the website (stories) is dynamically updated via API calls, ensuring that users always see the latest content.

Story Submission: Users can submit their stories through a form, and the submitted data is stored in MongoDB for later retrieval.

Responsive Design: The website is built to be responsive, providing a smooth user experience across all devices.

Easy to Use: Simple interface for users to submit their stories and view them in a list format.

Tech Stack
Frontend: Angular (for dynamic, single-page application)

Backend: Node.js with Express (for RESTful API)

Database: MongoDB (for storing stories and form data)

Others:

Mongoose (for MongoDB interaction)

Cors (for handling cross-origin requests)
Backend
bash
Copy
Edit
backend/
├── controllers/          # Contains API request logic
├── models/               # MongoDB models (Story Schema)
├── routes/               # API route definitions
├── .env                  # Environment variables (DB connection URI, PORT, etc.)
├── server.js             # Main server file to start the Express server
└── package.json          # Backend dependencies



Frontend
bash
Copy
Edit
frontend/
├── src/
│   ├── app/              # Angular components, services, and modules
│   ├── assets/           # Static files like images and styles
│   └── index.html        # Main HTML template for Angular application
├── angular.json          # Angular project configuration
├── package.json          # Frontend dependencies
└── tsconfig.json         # TypeScript configuration



Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)

MongoDB (or a MongoDB Atlas account for cloud DB)

Angular CLI (v12 or higher)

Setup Instructions
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Raj85446696/StoryWeb.git
cd StoryWeb
Backend Setup (Node.js & Express)

Navigate to the backend directory and install dependencies:

bash
Copy
Edit
cd backend
npm install
Create a .env file in the backend directory with the following content:

bash
Copy
Edit
MONGODB_URI=your_mongo_connection_uri
PORT=3000
Frontend Setup (Angular)

Navigate to the frontend directory and install dependencies:

bash
Copy
Edit
cd frontend
npm install
Start the Servers

First, run the backend server:

bash
Copy
Edit
cd backend
npm start
Then, in another terminal window, start the Angular development server:

bash
Copy
Edit
cd frontend
ng serve
Your application should now be available at http://localhost:4200.

API Endpoints
1. POST /api/stories
Description: Submit a new story.

Request Body:

json
Copy
Edit
{
  "title": "Story Title",
  "content": "Story content",
  "author": "Author's name"
}
Response:

json
Copy
Edit
{
  "message": "Story successfully submitted!"
}
2. GET /api/stories
Description: Retrieve all submitted stories.

Response:

json
Copy
Edit
[
  {
    "title": "Story Title",
    "content": "Story content",
    "author": "Author's name"
  },
  ...
]
3. GET /api/stories/:id
Description: Retrieve a specific story by its ID.

Response:

json
Copy
Edit
{
  "title": "Story Title",
  "content": "Story content",
  "author": "Author's name"
}
Contributing
We welcome contributions to this project! To contribute, follow these steps:

Fork the repository.

Create your feature branch (git checkout -b feature-name).

Commit your changes (git commit -am 'Add new feature').

Push to the branch (git push origin feature-name).

Open a pull request to the main repository.

License
This project is licensed under the MIT License - see the LICENSE file for details
