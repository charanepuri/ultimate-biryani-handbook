import nonVegBiryanis from "../data/nonVegBiryanis";

const NonVegBiryanis = () => {
return ( <section className="nonveg-section"> <h2>Non-Veg Biryanis 🍗🍛</h2>

  <div id="non-veg-biryanis" className="types-grid">
    {nonVegBiryanis.map((item) => (
      <div key={item.id} className="type-card">
        <h3>{item.name}</h3>
        <h4>{item.protein}</h4>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
</section>

);
};

export default NonVegBiryanis;
