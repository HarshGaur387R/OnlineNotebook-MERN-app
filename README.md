# OnlineNotebook MERN Web App

## Introduction

Welcome to the OnlineNotebook MERN (MongoDB, Express.js, React, Node.js) web application! This web app allows users to create an account, log in, and log out. Additionally, it provides a dynamic platform for users to manage and view their notes in real-time.

## Features

- **User Authentication:** Users can create an account, log in, and log out securely.
- **Real-time Updates:** The application provides live updates on the user's notes, ensuring a seamless experience.
- **Note Management:** Users can easily create, edit, and delete notes.

## Technologies Used

- **MongoDB:** NoSQL database for storing user information and notes.
- **Express.js:** Web application framework for building robust APIs.
- **React:** Front-end library for building dynamic user interfaces.
- **Node.js:** JavaScript runtime for server-side development.
- **Socket.io:** Real-time communication library for live updates.

## Getting Started

To run this application locally, follow these steps:

1. **Clone the Repository:**
   ```
   bash
   git clone https://github.com/your-username/OnlineNotebook.git
   cd OnlineNotebook
   ```
2. **Install Dependencies:**
  ```
    cd app
    npm install
    cd app/backend
    npm install
  ```
3. **Set Up Environment Variables:**
  - **Create a .env file in the backend directory.**
  - **Add the following variables and set their values:**
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. **Run the Application:**
  - **In the app directory:**
    ```
    npm start
    ```
  - **In the app/backend directory:**
    ```
    nodemon index.mjs
    ```
5. **Access the Application:**
  - **Open your browser and go to http://localhost:3000 to use the OnlineNotebook web app.**

## Folder Structure
- **App:** FrontEnd react application.
- **Server:**
  - **config:** Configuration files (e.g., MongoDB connection).
  - **controllers:** Logic for handling different routes.
  - **middleware:** Middleware functions for route handling.
  - **models:** MongoDB schema models.
  - **routes:** Express.js route definitions.

## Contributing
If you'd like to contribute to this project, please follow the standard GitHub fork and pull request workflow. Feel free to report issues and suggest enhancements!

## License
This project is licensed under the [MIT License](LICENSE).
