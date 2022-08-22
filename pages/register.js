import axios from "axios";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/router";
import RegistLoginNav from "../components/navbar/RegistLoginNav";
import style from "../styles/RegistLogin.module.css";
import Image from "next/image";
import Link from "next/link";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const router = useRouter();

  async function submit(event) {
    event.preventDefault();

    try {
      const result = await axios.post("https://teamt2-backend.herokuapp.com/register", {
        email: email,
        username: username,
        password: password,
        city: city,
      });
      alert(result.data.message);
      router.push("/login");
    } catch (err) {
      alert("Your email or username is already in use.");
      window.location.reload();
    }
  }

  const btnClick = () => {
    const btn = document.getElementById("btn");
    btn.innerHTML = "Processing";
    btn.classList.add(style["active"]);
  };

  return (
    <div className="vh-100 section-css">
      <RegistLoginNav />
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className={`card ${style["card-css"]}`}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <Image
                    src="/img/lorem-ipsum.png"
                    alt="register form"
                    className={`img-fluid ${style["img-f-css"]}`}
                    height={800}
                    width={500}
                  />
                </div>
                <div
                  className={`col-md-6 col-lg-7 d-flex align-items-center ${style.bg}`}
                >
                  <div className="card-body p-4 p-lg-5 text-black">
                    <Form inline onSubmit={submit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className={`fas fa-cubes fa-2x me-3 ${style["i-cubes-css"]}`}
                        ></i>
                        {/* <span className="h1 fw-bold mb-0"></span> */}
                      </div>
                      <h2
                        className={`fw-normal mb-3 pb-3 ${style["sign-css"]}`}
                      >
                        Register your account
                      </h2>
                      <FormGroup>
                        <Label for="username" hidden>
                          Username
                        </Label>
                        <Input
                          onChange={(event) => {
                            setUsername(event.target.value);
                          }}
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Enter a username"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="email" hidden>
                          E-mail address
                        </Label>
                        <Input
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Enter your e-mail address"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="password" hidden>
                          Password
                        </Label>
                        <Input
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Enter your password"
                          for="password"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="City" hidden>
                          City
                        </Label>
                        <Input
                          onChange={(event) => {
                            setCity(event.target.value);
                          }}
                          type="city"
                          id="city"
                          name="city"
                          placeholder="Enter your city"
                          for="city"
                        />
                      </FormGroup>
                      <div className="pt-1 mb-4 d-grid gap-2">
                        <Button
                          id="btn"
                          type="submit"
                          className="btn-dark"
                          onClick={btnClick}
                        >
                          Create Account
                        </Button>
                      </div>
                      <p
                        className={`small mb-5 pb-lg-2 ${style["d-acnt-css"]}`}
                      >
                        Already have an account?{" "}
                        <Link href="/login">
                          <a className={style["reg-css"]}>Login here</a>
                        </Link>
                      </p>
                      <hr />
                      <div className="text-center">
                        <p>or sign up with:</p>
                        <div className={style["social-links"]}>
                          <Link href="https://www.facebook.com/">
                            <a
                              type="button"
                              className={`btn-lg fs-5 ${style.space}`}
                            >
                              <FaFacebookF />{" "}
                            </a>
                          </Link>
                          <Link href="https://twitter.com/">
                            <a
                              type="button"
                              className={`btn-lg fs-5 ${style.space}`}
                            >
                              <FaTwitter />{" "}
                            </a>
                          </Link>
                          <Link href="https://www.google.com/">
                            <a
                              type="button"
                              className={`btn-lg fs-5 ${style.space}`}
                            >
                              <FaGoogle />
                            </a>
                          </Link>
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

export default Register;
