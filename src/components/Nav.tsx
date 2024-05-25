import React from "react";

interface NavProps {
  brandName : string,
  imageSrcPath : string;
}


function Nav({brandName, imageSrcPath} : NavProps) {
  return (
    <h1>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={imageSrcPath}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            {brandName}
          </a>
        </div>
      </nav>
    </h1>
  );
}

export default Nav;
