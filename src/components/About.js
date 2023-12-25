import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {

  return (
    <>
      <div className='About d-flex flex-column justify-content-center align-items-center vh-100'>

        <div className="about-sub-container row justify-content-center align-items-center">
          <div className='about-heading text-start row'>
            <h1 className='text-start'>About</h1>
          </div>

          <div className="about-desc text-start row p-4">
            Welcome to the OnlineNotebook MERN (MongoDB, Express.js, React, Node.js) web application! This web app allows users to create an account, log in, and log out. Additionally, it provides a dynamic platform for users to manage and view their notes in real-time.
          </div>

          <div className="row justify-content-center align-items-center about-card-container">

            <div className="col">
              <div className="about-card d-flex flex-column justify-content-start align-items-start text-start">
                <div className='about-card-heading'>
                  <h3>What is OnlineNotebook?</h3>
                </div>
                <div className='about-card-text '>
                  OnlineNotebook is a web-based application designed to make note-taking easy and accessible. Whether you're jotting down ideas for a novel, taking notes for a class, or just keeping track of your daily thoughts, OnlineNotebook is here to help.
                </div>
              </div>

              <div className="about-card d-flex flex-column justify-content-start align-items-start text-start">
                <div className='about-card-heading'>
                  <h3>Our Mission</h3>
                </div>
                <div className='about-card-text'>
                  Our mission at OnlineNotebook is to provide a user-friendly platform for note-taking that is accessible from anywhere, at any time. We believe in the power of ideas, and we strive to ensure that every idea is preserved and easily retrievable.
                </div>
              </div>
            </div>

            <div className="col">

              <div className="about-card d-flex flex-column justify-content-start align-items-start text-start">
                <div className='about-card-heading'>
                  <h3>Features</h3>
                </div>
                <div className='about-card-text'>
                  - <strong>Easy to Use</strong>: Our intuitive interface makes note-taking a breeze. <br />
                  - <strong>Accessible Anywhere</strong>: As a web-based application, your notes are available on any device with internet access.<br />
                  - <strong>Secure</strong>: We prioritize your privacy and security. Your notes are encrypted and stored securely.<br />
                </div>
              </div>

              <div className="about-card d-flex flex-column justify-content-start align-items-start text-start">
                <div className='about-card-heading'>
                  <h3>Our Team</h3>
                </div>
                <div className='about-card-text'>
                  OnlineNotebook is brought to you by a dedicated team of developers passionate about productivity and digital tools. We're always working to improve and expand our features based on user feedback.
                </div>
              </div>
            </div>

          </div>
        </div>
        <br />
        <Link to={'https://github.com/HarshGaur387R'}>Created By.</Link>
      </div>

    </>
  )
}
