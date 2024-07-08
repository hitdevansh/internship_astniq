import React from "react"
import "./Footer.css"
import { NavLink} from "react-router-dom";
const Footer = ({id}) => {
  return (
    <>
    <div id={id}>
      
    
      <footer>
        <div className='container padding'>
          <div className='box logo2'>
            <h1>COURSERA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>
          {/* <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Contact us</li>
            </ul>
          </div> */}
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
            <li><NavLink to="/student/login" className="nav-link">Student Login</NavLink> </li>
            <li><NavLink to="/educator/login" className="nav-link">Educator Login</NavLink></li>
            <li><NavLink to="/student/register" className="nav-link">Student Register</NavLink></li>
            <li><NavLink to="/educator/register" className="nav-link">Educator Register</NavLink></li>
            </ul>
          </div>
         
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
              <i className='fa fa-map-marker'></i>
                Sun Avenue One, Manek Baug Rd, near Shyamal, Bhudarpura, Ambawadi, Ahmedabad, Gujarat 380006
              </li>
              <li>
              <i className='fa fa-phone'></i>
                +918780683716
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                <a href="mailto:devanshdalwadi2004@gmail.com">devanshdalwadi2004@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | COURSERA
        </p>
      </div>
      </div>
    </>
  )
}

export default Footer
