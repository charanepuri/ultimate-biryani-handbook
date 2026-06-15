import tamilNaduBiryanis from "../data/tamilNaduBiryanis";

const TamilNaduBiryanis = () => {
  return (
    <section id="tamilnadu-biryanis" className="tamilnadu-section">
      <h2>Tamil Nadu Biryanis 🍗🍛</h2>

      <div className="state-grid">
        {tamilNaduBiryanis.map((item) => (
          <div key={item.id} className="state-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TamilNaduBiryanis;