import telanganaBiryanis from "../data/telanganaBiryanis";

const TelanganaBiryanis = () => {
  return (
    <section id="telangana-biryanis" className="telangana-section">
      <h2>Telangana Biryanis 👑🍛</h2>

      <div className="state-grid">
        {telanganaBiryanis.map((item) => (
          <div key={item.id} className="state-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TelanganaBiryanis;