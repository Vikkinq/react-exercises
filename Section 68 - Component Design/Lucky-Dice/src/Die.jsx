import "./Die.css";

function Die({ num, color = "rgb(51, 124, 167)" }) {
  return (
    <div className="Die" style={{ backgroundColor: color }}>
      {num}
    </div>
  );
}

export default Die;
