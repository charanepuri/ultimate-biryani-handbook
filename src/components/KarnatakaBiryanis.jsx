import karnatakaBiryanis from "../data/karnatakaBiryanis";

const KarnatakaBiryanis = () => {
  return (
    <section id="karnataka-biryanis" className="karnataka-section">
      <h2>Karnataka Biryanis 🍃🍛</h2>

      <div className="state-grid">
        {karnatakaBiryanis.map((item) => (
          <div key={item.id} className="state-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KarnatakaBiryanis;