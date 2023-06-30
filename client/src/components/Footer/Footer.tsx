import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/cashcut-logo-white.svg" alt="CashCut" />
        </div>
        <div className="footer-text">
          CashCut | All Rights Reserved | © 2023
        </div>
      </div>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/rajuTK9/CashCut"
        className="contribute-btn"
      >
        <img
          src="/images/github-logo.svg"
          alt="Github"
          className="github-logo"
        />
        <div className="contribute-text">Contribute</div>
      </a>
    </footer>
  );
}

export default Footer;
