import { Link, useNavigate } from "react-router-dom";

import "./Header.scss";

import Btn from "../Btn/Btn";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="site-header">
      <div className="site-header__container">
        <Link className="site-header__link" to="/">
          <p className="site-header__title">Byte-Sized Medieval Paleography</p>
        </Link>
        <div className="site-header__group">
          <Btn
            btnType="button"
            btnText="Play Game"
            btnModifier="success"
            btnDisabled={false}
            clickHandler={() => navigate("/play")}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
