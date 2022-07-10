import React, { Component } from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark px-3 py-2 d-flex justify-content-between">
        <a className="navbar-brand" href="">
          Movie Search Engine
        </a>
        <form className="d-flex" action="">
          <input
            className="form-control px-2"
            placeholder="Search"
            aria-label="Search"
            type="text"
          />
          <button className="btn btn-outline-success px-2" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
