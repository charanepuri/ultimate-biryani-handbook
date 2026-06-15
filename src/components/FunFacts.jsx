const FunFacts = () => {
  const facts = [
    "Biryani is one of India's most ordered foods.",
    "Hundreds of biryani varieties exist worldwide.",
    "The word Biryani has Persian origins.",
    "Kolkata Biryani is famous for potatoes.",
    "Bamboo Biryani is cooked inside bamboo tubes.",
    "Veg and Non-Veg Versions Are Equally Popular. Both have dedicated fan bases worldwide.",
    "Dum Cooking Is Centuries Old. The dum technique has been used for hundreds of years.",
    "Every Region Has Its Own Version. Different regions use different rice varieties, spices, and cooking methods."
  ];

  return (
    <section className="funfacts-section">
      <h2>Fun Facts 🎉</h2>

      <div className="fact-grid">
        {facts.map((fact, index) => (
          <div key={index} className="fact-card">
            {fact}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;