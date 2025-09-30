import "./Box.css";

function Box({ isActive, toggle }) {
  return <div onMouseOver={toggle} className="Box" style={{ backgroundColor: isActive ? "red" : "black" }}></div>;
}

export default Box;
