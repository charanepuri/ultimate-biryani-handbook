import videos from "../data/videos";

const RecipeVideos = () => {
  return (
    <section id="recipe-videos" className="video-section">
      <h2>Recipe Videos 🎥</h2>

      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <h3>{video.title}</h3>

            <a href={video.url} target="_blank" rel="noreferrer">▶ Watch Recipe</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeVideos;