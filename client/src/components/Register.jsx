import SignUp from "../img/signup.png";
import { NavLink } from "react-router-dom";
import "./css/SignUp.css";

const Register = () => {
  return (
    <div className="signup">
      <div className="container mt-5">
        <div className="signup__content">
          <div className="signup__form">
            <h2 className="form__title">Sign Up</h2>
            <form className="register__form" id="register__form">
              <div className="form-group">
                <label htmlFor="name">
                  <i class="zmdi zmdi-account"></i>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i class="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  <i class="zmdi zmdi-phone"></i>
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="Your Phone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="work">
                  <i class="zmdi zmdi-slideshow"></i>
                </label>
                <input
                  type="text"
                  name="work"
                  id="work"
                  autoComplete="off"
                  placeholder="Your Profession"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <i class="zmdi zmdi-key"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Your Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cPassword">
                  <i class="zmdi zmdi-key"></i>
                </label>
                <input
                  type="password"
                  name="cPassword"
                  id="cPassword"
                  autoComplete="off"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="form-group form__button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form__submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
          <div className="signup__image">
            <figure>
              <img src={SignUp} alt="Sign Up" />
            </figure>
            <NavLink to="/login" className="imageLink">
              I am already Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
