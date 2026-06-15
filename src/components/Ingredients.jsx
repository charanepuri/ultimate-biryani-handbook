const Ingredients = () => {
  const ingredients = [
    "Basmati Rice",
    "Yogurt",
    "Onions",
    "Mint",
    "Coriander",
    "Cardamom",
    "Cloves",
    "Cinnamon",
    "Garam Masala",
    "Saffron",
  ];

  return (
    <section className="ingredients-section">
      <h2>Ingredients & Spices 🌿</h2>

      <div className="ingredient-grid">
        {ingredients.map((item, index) => (
          <div key={index} className="ingredient-card">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ingredients;