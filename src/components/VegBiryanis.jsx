import vegBiryanis from "../data/vegBiryanis";

const VegBiryanis = () => {
return ( <section id="veg-biryanis"  className="veg-section"> <h2>Veg Biryanis 🌱🍛</h2>


  <div className="types-grid">
    {vegBiryanis.map((item) => (
      <div key={item.id} className="type-card">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
</section>


);
};

export default VegBiryanis;
