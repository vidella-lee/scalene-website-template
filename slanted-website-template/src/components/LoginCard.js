const LoginCard = () => (
  <div
    className="d-flex card bg-light text-center justify-content-center align-items-center p-2 p-lg-5 rounded-3 border-0 shadow-lg z-index-3"
    id="login-card"
    data-aos="fade-down"
    data-aos-delay={400}
  >
    <div className="card-title m-4 pt-4">
      <h2>Sign In</h2>
    </div>
    <div className="card-body">
      <form>
        <div className="d-flex mb-4">
          <label for="exampleInputEmail1" className="form-label">
            <i className="bi bi-person-fill fs-3 text-secondary"></i>
          </label>
          <input
            type="email"
            className="form-control border-top-0 border-end-0 border-start-0 bg-transparent w-auto"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email address or username"
          />
        </div>
        <div className="d-flex mb-4">
          <label for="exampleInputPassword1" className="form-label">
            <i className="bi bi-lock-fill fs-3 text-secondary"></i>
          </label>
          <input
            type="password"
            className="form-control border-top-0 border-end-0 border-start-0 bg-transparent"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
      </form>
      <p>or sign in with:</p>
      <div className="d-flex w-100 justify-content-center text-secondary">
        <i className="bi bi-google m-3 fs-3"></i>
        <i className="bi bi-facebook m-3 fs-3"></i>
      </div>
      <div class="d-grid gap-2 d-md-block">
        <button type="button" className="btn btn-info btn-md mt-4 mb-4 shadow">
          Sign In
        </button>
      </div>
      <p>
        <small>
          Don't have an account yet? <a href="#">Register here.</a>
        </small>
      </p>
    </div>
  </div>
);

export default LoginCard;
