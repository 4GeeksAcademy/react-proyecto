import React from "react";

const Navbar = () => {
	return (
        <nav className="navbar navbar-expand-lg bg-body-secundary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Nuestro</a>
              <a className="nav-link" href="#">Propio</a>
              <a className="nav-link" href="#">Planeta</a>
              <a className="nav-link disabled" aria-disabled="true">Cuidémoslo</a>
            </div>
          </div>
        </div>
      </nav>
	
	);
};
export default Navbar;
