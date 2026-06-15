import biryaniTips from "../data/biryaniTips";

const BiryaniTips = () => {
return ( <section className="tips-section"> <h2>Common Mistakes & Tips 💡🍛</h2>


  <div className="types-grid">
    {biryaniTips.map((item) => (
      <div key={item.id} className="type-card">
        <h3>{item.mistake}</h3>
        <p>
          <strong>Tip:</strong> {item.tip}
        </p>
      </div>
    ))}
  </div>
</section>


);
};

export default BiryaniTips;
