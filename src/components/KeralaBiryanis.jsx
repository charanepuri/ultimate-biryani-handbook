import keralaBiryanis from "../data/keralaBiryanis";

const KeralaBiryanis = () => {
  return (
    <section id="kerala-biryanis" className="kerala-section">
      <h2>Kerala Biryanis 🌴🍛</h2>

      <div className="state-grid">
        {keralaBiryanis.map((item) => (
          <div key={item.id} className="state-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeralaBiryanis;