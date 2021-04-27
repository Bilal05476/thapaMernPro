import SignIn from "../img/login.jpg";
import { NavLink } from "react-router-dom";
import "./css/Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="container mt-5">
        <div className="login__content">
          <div className="login__form">
            <h2 className="form__title">Sign In</h2>
            <form className="login__form" id="login__form">
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
              <div className="form-group form__button">
                <input
                  type="submit"
                  name="login"
                  id="login"
                  className="form__submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
          <div className="login__image">
            <figure>
              <img src={SignIn} alt="Sign In" />
            </figure>
            <NavLink to="/register" className="imageLink">
              No Account? Create your account!
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
