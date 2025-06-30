import React from "react";

const NoStyling = () => {
  return (
    <>
      <body>
        <div id="root">
          <nav>
            <div>
              <a href="/"> React Ecommerce</a>
              <button
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
              </button>
              <div>
                <ul>
                  <li><a href="/">Home </a></li>
                  <li><a href="/product">Products</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
                <div>
                  <a aria-current="page" href="/login"><i></i> Login</a>
                  <a href="/register"><i></i> Register</a>
                  <a href="/cart"><i></i> Cart (0) </a>
                </div>
              </div>
            </div>
          </nav>
          <div>
            <h1>Login</h1>
            <hr />
            <div>
              <div>
                <form>
                  <div>
                    <label htmlFor="display-4">Email address</label>
                    <input type="email" id="floatingInput" placeholder="name@example.com" />
                    <div data-lastpass-icon-root="" style={{}}></div>
                  </div>
                  <div>
                    <label htmlFor="floatingPassword display-4">Password</label>
                    <input type="password" id="floatingPassword" placeholder="Password" />
                    <div data-lastpass-icon-root="" style={{}}></div>
                  </div>
                  <div>
                    <p>
                      New Here? <a href="/register">Register</a>
                    </p>
                  </div>
                  <div>
                    <button type="submit" disabled>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <footer>
            <div>
              <div>
                <p>
                  Made with ❤️ by
                  <a href="https://sahibsingh.dev" target="_blank" rel="noreferrer">
                    Sahib Singh
                  </a>
                </p>
                <a href="https://github.com/ssahibsingh" target="_blank" rel="noreferrer">
                  <i></i>
                </a>
              </div>
            </div>
          </footer>
          <div></div>
        </div>

        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
        ></script>

        <div
          data-lastpass-root=""
          style={{
            position: "absolute !important",
            top: 0,
            left: 0,
            height: 0,
            width: 0,
          }}
        ></div>
      </body>
    </>
  );
};

export default NoStyling;
