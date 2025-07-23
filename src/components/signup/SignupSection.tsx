import React from 'react';
import SignupForm from "../form/SignupForm";

const SignupSection = () => {
  return (
    <div className="page-area pt-100 pb-85">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="cafeu-page-content">
              <div className="post-entry post-entry--top-margin">
                <div className="login">
                  <div className="login-notices-wrapper"></div>

                  <h2>Signup</h2>

                  <SignupForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSection;
