import React, { Fragment } from 'react';
import { FaJava, FaDatabase, FaAws } from 'react-icons/fa';

function Skills() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="font-big text-red slide-in-top">Skills</h1>
                <hr />

                <div className="row my-2">
                  <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span><FaJava className="fs-4" /> Java</span>
                  </div>
                  <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span><FaDatabase className="fs-4" /> SQL</span>
                  </div>
                  <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span><FaAws className="fs-4" /> AWS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img className="img-fluid" src="../images/Development-pana.png" alt="Development illustration" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Skills;
