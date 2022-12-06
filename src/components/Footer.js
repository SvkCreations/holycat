import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-primary lead fw-bold text-decoration-none lh-1">
        HolyCat
      </a>
      <span className="mb-3 mb-md-0 text-muted"> | Created by Soubhik Ghosh</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-primary" href="#"><iconify-icon icon="ic:outline-facebook" style={{fontSize:"30px"}}></iconify-icon></a></li>
      <li className="ms-3"><a className="text-primary" href="#"><iconify-icon icon="mdi:instagram" style={{fontSize:"28px"}}></iconify-icon></a></li>
      <li className="ms-3"><a className="text-primary" href="#"><iconify-icon icon="ic:baseline-whatsapp" style={{fontSize:"28px"}}></iconify-icon></a></li>
    </ul>
  </footer>
    </div>
  )
}

export default Footer
