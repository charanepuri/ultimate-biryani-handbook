import andhraBiryanis from "../data/andhraBiryanis";

const AndhraBiryanis = () => {
  return (
    <section id="andhra-biryanis" className="andhra-section">
      <h2>Andhra Pradesh Biryanis 🌶️🍛</h2>

      <div className="state-grid">
        {andhraBiryanis.map((item) => (
          <div key={item.id} className="state-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AndhraBiryanis;