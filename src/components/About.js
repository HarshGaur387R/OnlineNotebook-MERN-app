import React from 'react'

export default function About() {

  return (
    <>
      <div className='About d-flex flex-column justify-content-center align-items-center vh-100'>

        <div className="about-sub-container row justify-content-center align-items-center gap-3">
          <div className='about-heading text-start p-0'>
            <h1 className='text-start'>About</h1>
          </div>

          <div className="about-desc text-start p-0">
            By understanding, imagining and expressing change, we create simpler, lighter, more desirable ideas for the future. We design for life. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div className="row justify-content-center align-items-center about-card-container pt-2">

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

    </>
  )
}
