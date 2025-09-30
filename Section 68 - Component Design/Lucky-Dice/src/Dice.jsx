import Die from "./Die";
import "./Dice.css";

function Dice({ dice, color }) {
  return (
    <section className="Dice">
      {dice.map((value, index) => (
        <Die key={index} num={value} color={color} />
      ))}
    </section>
  );
}

export default Dice;
