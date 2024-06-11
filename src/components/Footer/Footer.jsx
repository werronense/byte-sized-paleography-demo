import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <small className="site-footer__text">
          &copy;{" "}
          <a
            className="site-footer__link"
            href="https://www.linkedin.com/in/stephen-werronen"
          >
            Stephen Werronen
          </a>{" "}
          - 2024
        </small>
        <small className="site-footer__text--latin">
          <span>Stephanus Werronensis me fecit</span>
          <span>Anno Domini MMXXiiij</span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
