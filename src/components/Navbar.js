import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mt-4">
  <div className="container-fluid">
    <Link className="navbar-brand text-primary fw-bold" to="/holycat">HolyCat</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/holycat">Home</Link>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link" to="#random">Random Cats</HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link" to="#breed">Cats by Breed</HashLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
