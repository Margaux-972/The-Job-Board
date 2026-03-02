import Title from "./Title";
const Header = (props) => {
  return (
    <header>
      <Title label={props.title} />
    </header>
  );
};

export default Header;
