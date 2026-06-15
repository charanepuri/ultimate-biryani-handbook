import typesBiryani from "../data/typesBiryani";

const TypesBiryani = () => {
  return (
    <section className="types-section">
      <h2>Types of Biryani 🍛</h2>

      <div className="types-grid">
        {typesBiryani.map((item) => (
          <div key={item.id} className="type-card">
            <h3>{item.name}</h3>
            <p>{item.region}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TypesBiryani;