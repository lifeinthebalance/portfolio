import { BsMoonStarsFill } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between">
      <p className="py-5 pl-10">LITB</p>
      <span className="py-5 pr-10">
        <BsMoonStarsFill className="" />
      </span>
    </header>
  );
};

export default Header;
