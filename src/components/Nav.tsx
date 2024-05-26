import React from "react";

interface NavProps {
  brandName : string,
  imageSrcPath : string;
}


function Nav({brandName, imageSrcPath} : NavProps) {
  return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={imageSrcPath}
              alt="Logo"
              width="60"
              height="60"
              className="d-inline-block align-center"
            />
            <span className="fw-bolder fs-4"> 
            {brandName}
            </span>
          </a>
        </div>
      </nav>
  );
}

export default Nav;
