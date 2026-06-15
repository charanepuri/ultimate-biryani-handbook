import famousIndianBiryanis from "../data/famousIndianBiryanis";

const FamousIndianBiryanis = () => {

return ( <section id="explore-biryanis" className="famous-section"> <h2>Famous Indian Biryanis 🇮🇳</h2>

  <div className="types-grid">
    {famousIndianBiryanis.map((item) => (
      <div key={item.id} className="type-card">
        <h3>{item.name}</h3>
        <h4>{item.state}</h4>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
</section>
);
};

export default FamousIndianBiryanis;
