const About = () => {
  return (
    <>
      <div className="container emp__profile">
        <form>
          <div className="row">
            <div className="col-md-4">
              <img src="" alt="userProfileImg" />
            </div>
            <div className="col-md-6">
              <div className="profile__head">
                <h5>Bilal Ahmed</h5>
                <h6>Web Developer</h6>
                <p className="profile__rating mt-3 mb-5">
                  Rating: <span>9/10</span>
                </p>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      href="#home"
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                      className="nav-link"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#profile"
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                      className="nav-link"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                name="btnAddMore"
                className="profile__edit"
                value="Edit Profile"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="prifle__work">
                <p>Work Link</p>
                <a href="https://youtube.com" target="blank">
                  Youtube
                </a>
                <br />
                <a href="https://youtube.com" target="blank">
                  Youtube
                </a>
                <br />
                <a href="https://youtube.com" target="blank">
                  Youtube
                </a>
                <br />
                <a href="https://youtube.com" target="blank">
                  Youtube
                </a>
                <br />
                <a href="https://youtube.com" target="blank">
                  Youtube
                </a>
                <br />
              </div>
            </div>
            <div className="col-md-8 pl-5 aboutInfo">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>92922020020200</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Bilal Ahmed</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Bilal Ahmed</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Bilal Ahmed</p>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade show"
                  id="profile"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>92922020020200</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>example@gmail.com</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>example@gmail.com</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>example@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
