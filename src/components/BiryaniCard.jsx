const BiryaniCard = ({ biryani }) => {
  return (
    <div className="card">
      <img
        src={biryani.image}
        alt={biryani.name}
      />

      <div className="card-content">
        <h3>{biryani.name}</h3>

        <p>{biryani.state}</p>

        <span>{biryani.type}</span>
      </div>
    </div>
  );
};

export default BiryaniCard;