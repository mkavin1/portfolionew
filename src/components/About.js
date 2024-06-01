import React, { Fragment } from 'react';

function About() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center about-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="font-big text-red slide-in-top">About me</h1>
                <hr />
                <p className="slide-in-bottom">
                  I am a third-year computer science student with a strong passion for DevOps and cloud computing. My journey in technology has led me to develop a solid understanding of AWS and the principles of DevOps, and I am continuously expanding my knowledge in this dynamic field.
                </p>
                <p className="slide-in-bottom">
                  I have hands-on experience with AWS services, and I am proficient in implementing and managing infrastructure using various DevOps tools and practices. My skill set includes continuous integration/continuous deployment (CI/CD), automation, and monitoring, which I have applied in both academic projects and personal initiatives.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img className="img-fluid" src="../images/nomad-amico.png" alt="About me illustration" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
