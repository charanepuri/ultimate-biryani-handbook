import preparationMethods from "../data/preparationMethods";

const PreparationMethods = () => {
return ( <section className="prep-section"> <h2>Preparation Methods 👨‍🍳🍛</h2>


  <div className="types-grid">
    {preparationMethods.map((step) => (
      <div key={step.id} className="type-card">
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    ))}
  </div>
</section>


);
};

export default PreparationMethods;
