import React, { Fragment } from 'react';
import { SiCodechef, SiHackerrank } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 bg-dark slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">KAVIN M</h2>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EDUCATION</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">BE COMPUTER SCIENCE ENGINEERING</h4>
                  <h6 className="blue-label px-2 py-1">2021 - Present</h6>
                  <p className="m-0">Karpagam Institute of Technology</p>
                  <p>CGPA: 7.8 (Till 5th semester)</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                  <h6 className="blue-label px-2 py-1">2020 - 2021</h6>
                  <p className="m-0">Literacy Mission Matriculation Higher Secondary School</p>
                  <p>88%</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Secondary School Leaving Certificate</h4>
                  <h6 className="blue-label px-2 py-1">2018 - 2019</h6>
                  <p className="m-0">Literacy Mission Matriculation Higher Secondary School</p>
                  <p>86%</p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">SKILLS</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">PROGRAMMING</h4>
                  <p>Java, SQL</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">SOFT SKILLS</h4>
                  <p>Critical Thinking, Communication</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">TECHNICAL SKILLS</h4>
                  <p>Git, Jenkins, Apache Maven, Problem Solving</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">CERTIFICATES</h4>
              <ul>
                <li>Google Cloud career readiness</li>
                <li>Associate Cloud Engineer track</li>
                <li>Docker for Developers</li>
                <li>NPTEL Cloud Computing</li>
                <li>NPTEL Programming in Java</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">PROJECTS</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">SELF IDENTIFYING THE MENTAL HEALTH AND GIVE GUIDANCE</h4>
                  <p>Emotion detection technology utilizes facial expression analysis to recognize and interpret human emotions. Through algorithms and machine learning techniques, it classifies emotional states such as happiness, sadness, anger. This technology finds applications in market research, customer feedback analysis, mental health monitoring, and human-computer interaction, aiming to understand and respond to human emotions in real-time using a chatbot.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Resume;
