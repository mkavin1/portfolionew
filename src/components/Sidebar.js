import React, { Fragment } from 'react';
import { VscHome } from 'react-icons/vsc';
import { FiUser } from 'react-icons/fi';
import { BsCode } from 'react-icons/bs';
import { MdOutlineDashboard, MdOutlineContactPage, MdEmail } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub, AiOutlineUnorderedList } from 'react-icons/ai';
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <Fragment>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark slide-in-left">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          {/* Rest of your JSX code */}
        </div>
      </div>
    </Fragment>
  );
}

export default Sidebar;
