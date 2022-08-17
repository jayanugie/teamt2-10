import { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/router";
import axios from "axios";
import RegistLoginNav from "../components/navbar/RegistLoginNav";
import style from "../styles/RegistLogin.module.css";

import { useDispatch } from "react-redux";
import { auth } from "../features/authSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const dispatch = useDispatch();

  async function submit(event) {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:4000/login", {
        username: username,
        password: password,
      });
      dispatch(auth({ username }));
      alert(result.data.message);
      router.push("/");
    } catch (err) {
      alert("You don't have an account, create your account");
      window.location.reload();
    }
  }

  const btnClick = () => {
    const btn = document.getElementById('btn');
    btn.innerHTML = "Processing";
    btn.classList.add(style['active']);
  }

  return (
    <div className="vh-100 section-css">
      <RegistLoginNav />
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className={`card ${style["card-css"]}`}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="/img/lorem-ipsum.png" alt="login form" className={`img-fluid ${style["img-f-css"]}`} />
                </div>
                <div className={`col-md-6 col-lg-7 d-flex align-items-center ${style.bg}`}>
                  <div className="card-body p-4 p-lg-5 text-black">
                    <Form inline onSubmit={submit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className={`fas fa-cubes fa-2x me-3 ${style["i-cubes-css"]}`}></i>
                        {/* <span className="h1 fw-bold mb-0"></span> */}
                      </div>
                      <h2 className={`fw-normal mb-3 pb-3 ${style["sign-css"]}`}>Sign into your account</h2>
                      <FormGroup>
                        <Label for="username" hidden>
                          E-mail / Username
                        </Label>
                        <Input
                          value={username}
                          onChange={(event) => {
                            setUsername(event.target.value)
                          }}
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Enter your username"
                        />
                      </FormGroup>{" "}
                      <FormGroup>
                        <Label for="password" hidden>
                          Password
                        </Label>
                        <Input
                          onChange={(event) => {
                            setPassword(event.target.value)
                          }}
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Enter your password"
                        />
                      </FormGroup>{" "}
                      <div className="pt-1 mb-4 d-grid gap-2">
                        <Button className="btn-dark" type="submit" id="btn" onClick={btnClick}>
                          Login
                        </Button>
                      </div>
                      <a className={`small ${style["fgt-pss-css"]}`} href="/reset-password">
                        Forgot password?
                      </a>
                      <p className={`small mb-5 pb-lg-2 ${style["d-acnt-css"]}`}>
                        Don't have an account?{" "}
                        <a href="/register" className={style["reg-css"]}>
                          Register here
                        </a>
                      </p>
                      <hr />
                      <div className="text-center">
                        <p>or login with:</p>
                        <div className={style["social-links"]}>
                          <a href="https://www.facebook.com/" type="button" className={`btn-lg fs-5 ${style.space}`}>
                            <FaFacebookF />{" "}
                          </a>
                          <a href="https://twitter.com/" type="button" className={`btn-lg fs-5 ${style.space}`}>
                            <FaTwitter />{" "}
                          </a>
                          <a href="https://www.google.com/" type="button" className={`btn-lg fs-5 ${style.space}`}>
                            <FaGoogle />
                          </a>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
