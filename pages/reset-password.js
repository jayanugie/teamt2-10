import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useRouter } from "next/router";
import LandingNav from "../components/navbar/LandingNav";
import style from "../styles/ResetPassword.module.css";

function ResetPassword() {
  return (
    <div className="vh-100">
      <LandingNav />
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className={`card ${style["card-css"]}`}>
              <div className="card-body p-4 p-lg-5 text-black">
                <h1 className={`fw-normal mb-2 pb-2 ${style["forgot-css"]}`}>
                  Forgot your password?
                </h1>
                <p>
                  Enter your e-mail address and we will send you an e-mail with
                  instructions to reset your password.
                </p>
                <Form>
                  <FormGroup>
                    <Label for="email" hidden>
                      E-mail
                    </Label>
                    <Input
                      className="mb-2 pb-2"
                      // onChange={(event) => {
                      //   setEmail(event.target.value);
                      // }}
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter your e-mail address"
                    />
                    <div>
                      <Button
                        type="submit"
                        className="btn btn-dark btn-s btn-block"
                      >
                        Reset Password
                      </Button>
                    </div>
                    {/* <div className="">
                      <a href="/login" className="">
                        Login
                      </a>
                      <a href="/register" className="">
                        Register
                      </a>
                    </div> */}
                  </FormGroup>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
