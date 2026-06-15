import accompaniments from "../data/accompaniments";

const Accompaniments = () => {
return ( <section className="accompaniments-section"> <h2>Accompaniments & Pairings 🍽️</h2>


  <div className="types-grid">
    {accompaniments.map((item) => (
      <div key={item.id} className="type-card">
        <h3>{item.name}</h3>
        <h4>{item.category}</h4>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
</section>


);
};

export default Accompaniments;
