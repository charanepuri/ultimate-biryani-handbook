import riceVarieties from "../data/riceVarieties";

const RiceVarieties = () => {
return ( <section className="rice-section"> <h2>Rice Varieties 🍚</h2>


  <div className="types-grid">
    {riceVarieties.map((rice) => (
      <div key={rice.id} className="type-card">
        <h3>{rice.name}</h3>
        <p>{rice.description}</p>
      </div>
    ))}
  </div>
</section>

);
};

export default RiceVarieties;
