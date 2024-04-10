import React from 'react';
import './BettingWebsite.css'; // Import CSS file for custom styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import bannerImage from './uniconbanner.png'; // Import the banner image

const BettingWebsite = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Unicon365</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Full Screen Banner Section */}
      <section className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="banner-content text-center text-white">
          <a href="https://unicon.igotrackier.com/click?campaign_id=20&pub_id=30&source=Googleads" className="btn btn-primary btn-lg">Join Now</a>
        </div>
      </section>
      <section className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="banner-content text-center text-white">
          <a href="https://unicon.igotrackier.com/click?campaign_id=20&pub_id=30&source=Googleads" className="btn btn-primary btn-lg">Join Now</a>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="footer bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-0">18+ Users | Promotes only fantasy sports</p>
          <p className="mb-0">Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana states are not being targeted as per google ads policy. *This Product in intended for use by those 18 or older for amusement purposes only. The games are intended for an adult audience.</p>
        </div>
      </footer>
    </div>
  );
}

export default BettingWebsite; 
