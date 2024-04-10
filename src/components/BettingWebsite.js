import React from 'react';
import './BettingWebsite.css'; // Import CSS file for styling
import bannerImage from './uniconbanner.png'; // Import the banner image

const BettingWebsite = () => {
  return (
    <div>
      {/* Full Screen Banner Section */}
      <section className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="banner-content">
          {/* <h1>Welcome to Our Betting Website</h1>
          <p>Experience the excitement of betting on your favorite sports!</p> */}
          <a href="https://unicon.igotrackier.com/click?campaign_id=20&pub_id=30&source=Googleads" className="btn-join-now">Join Now</a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>18+ Users | Promotes only fantasy sports</p>
        <p>Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana states are not being targeted as per google ads policy. *This Product in intended for use by those 18 or older for amusement purposes only. The games are intended for an adult audience.</p>
      </footer>
    </div>
  );
}

export default BettingWebsite;
