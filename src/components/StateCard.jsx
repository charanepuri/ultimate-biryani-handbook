const StateCard = ({ item }) => {
  return (
    <div className="state-card">
      <h3>{item.state}</h3>

      <h4>{item.biryani}</h4>

      <p>{item.description}</p>
    </div>
  );
};

export default StateCard;