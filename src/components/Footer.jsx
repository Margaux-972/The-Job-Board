const Footer = (props) => {
  return (
    <footer>
      <p>
        Made with <span>{props.tech}</span> at{" "}
        <a href="https://www.lereacteur.io/" target="_blank">
          {props.school}
        </a>{" "}
        By <span>{props.signOut}</span>
      </p>
    </footer>
  );
};

export default Footer;
