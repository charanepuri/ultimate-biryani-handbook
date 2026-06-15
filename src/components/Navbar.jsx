import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img
  src="/favicon.png"
  alt="Biryani Logo"
  style={{
    width: "50px",
    height: "50px",
    objectFit: "contain",
    borderRadius: "50%",
  }}
/>
      
      <h2>🍛 Biryani Handbook</h2>
    </nav>
  );
};

export default Navbar;