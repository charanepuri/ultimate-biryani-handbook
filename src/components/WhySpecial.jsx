const features = [
  {
    title: "Layered Cooking",
    description:
      "Rice and meat or vegetables are layered separately and cooked together.",
  },
  {
    title: "Aromatic Rice",
    description:
      "Premium rice varieties provide a distinctive aroma and texture.",
  },
  {
    title: "Rich Spices",
    description:
      "Cardamom, cloves, cinnamon, saffron, and herbs create complex flavors.",
  },
  {
    title: "Dum Cooking",
    description:
      "Slow cooking in a sealed pot infuses every grain with flavor.",
  },
  {
    title: "Regional Diversity",
    description:
      "Every region has its own unique ingredients and cooking styles.",
  },
  {
    title: "Cultural Significance",
    description:
      "A favorite dish for weddings, festivals, and celebrations.",
  },
];

const WhySpecial = () => {
  return (
    <section className="special-section">
      <h2>What Makes Biryani Special? ✨🍛</h2>

      <div className="special-grid">
        {features.map((feature, index) => (
          <div key={index} className="special-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySpecial;