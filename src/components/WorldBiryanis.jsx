import worldBiryanis from "../data/worldBiryanis";

const WorldBiryanis = () => {
  return (
    <section id="world-biryanis" className="world-section">
      <h2>World Biryanis 🌍🍛</h2>

      <div className="state-grid">
        {worldBiryanis.map((item) => (
          <div key={item.id} className="state-card">
            <h3>{item.country}</h3>
            <h4>{item.biryani}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorldBiryanis;