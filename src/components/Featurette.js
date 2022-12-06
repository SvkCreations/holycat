import React from 'react';
import img from '../ft-img-02.jpg';
import { HashLink } from 'react-router-hash-link';

export default function Featurette() {
  return (
    <div>
      <div className="row featurette d-flex align-items-center justify-content-center mt-5 mt-md-2 px-3 px-md-0 pb-5 border-bottom">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-bold text-primary display-6 lh-1 p-0 m-0">Welcome to HolyCat</h2>
        <h4 className="fw-bold">The house of cats</h4>
        <p className="lead col-lg-10 mt-3">If you are a cat-person, then you have come to the right place and if you are not a cat-person, you'll become one today. Get random Images, GIFs of cute cats in our website. They are free to download too. So get started right away.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <HashLink className="btn btn-primary btn-lg px-4 me-md-2" to="#random">Get started</HashLink>
          <button type="button" className="btn btn-outline-dark btn-lg px-4">Learn more</button>
        </div>
      </div>
      <div className="col-md-5">
        <img src={img} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"/>
      </div>
    </div>
    </div>
  )
}
