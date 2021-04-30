import SignUp from "../img/signup.png";
import { NavLink , useHistory} from "react-router-dom";
import "./css/SignUp.css";
import { useState } from "react";

const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cPassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = (e) => {
    e.preventDefault();
    const {name, email, phone, work, password, cPassword} = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify ({
        name, email, phone, work, password, cPassword
      })
    });
    const data = await res.json();
    if(data.status === 422 || !data){
      window.alert("Invalid Registration")
      console.log("Invalid Registration")
    }
    else{
      window.alert("Registration Success")
      console.log("Registration Success")
      history.push('/login');
    }
  }

  return (
    <div className="signup">
      <div className="container mt-5">
        <div className="signup__content">
          <div className="signup__form">
            <h2 className="form__title">Sign Up</h2>
            <form method="POST" className="register__form" id="register__form">
              <div className="form-group">
                <label htmlFor="name">
                  <i class="zmdi zmdi-account"></i>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={user.name}
                  onChange={handleInputs}
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
                  value={user.email}
                  onChange={handleInputs}
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
                  value={user.phone}
                  onChange={handleInputs}
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
                  value={user.work}
                  onChange={handleInputs}
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
                  value={user.password}
                  onChange={handleInputs}
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
                  value={user.cPassword}
                  onChange={handleInputs}
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
                  onClick={postData}
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
