import stateBiryanis from "../data/stateBiryanis";
import StateCard from "./StateCard";

const StateWiseBiryanis = () => {
  return (
    <section id="state-wise-biryanis"  className="state-section">
      <h2>State Wise Biryanis 🗺️🍛</h2>

      <div className="state-grid">
        {stateBiryanis.map((item) => (
          <StateCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default StateWiseBiryanis;