import React from "react";

const LoadingPage = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row" style={{width: "100%"}}>
              <div className="col-md-8 col-md-offset-2 intro-text">
        
              <h2>Welcome to COMMON GROUND</h2>
              <p>Your gateway to a world of online learning and knowledge. Whether you're looking to advance your career, explore new interests, or enhance your skills, our online courses and resources offer a flexible and convenient way to achieve your educational goals.</p>
              
              <p>Why Choose COMMON GROUND?
                <br></br>
              <ul>
                  <li><strong>Diverse Course Selection:</strong> Explore courses.</li>
                  <li><strong>Expert Instructors:</strong> Learn from leaders and experienced professionals.</li>
                  <li><strong>Flexible Learning:</strong> Have 24/7 access to course materials.</li>
                  <li><strong>Interactive and Engaging:</strong> Enjoy content, quizzes, and discussion forums.</li>
                  <li><strong>Certification and Credentials:</strong> Earn certificates to boost your career.</li>
                  <li><strong>Community and Support:</strong> Join a supportive community of learners and get help when you need it.</li>
              </ul>
              </p>
              <p>Start your learning journey with COMMON GROUND today!</p>

                <a
                  href="http://localhost:3000/student/view-courses"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  View Courses
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoadingPage
