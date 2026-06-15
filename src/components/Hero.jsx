import heroImage from "../assets/hero/hero-biryani.jpg";

const Hero = () => {
const handleExplore = () => {
document
.getElementById("explore-biryanis")
?.scrollIntoView({
behavior: "smooth",
});
};

const handleRecipes = () => {
document
.getElementById("recipe-videos")
?.scrollIntoView({
behavior: "smooth",
});
};

return (
<section
className="hero"
style={{
backgroundImage: `           linear-gradient(
            rgba(0,0,0,0.6),
            rgba(0,0,0,0.6)
          ),
          url(${heroImage})
        `,
}}
> <div className="hero-content"> <h1>The Ultimate Biryani Handbook 🍛</h1>


    <p>
      Discover the history, varieties, recipes,
      ingredients, and cultural heritage of
      biryani from India and around the world.
    </p>

    <div className="hero-buttons">
      <button onClick={handleExplore}>
        Explore Biryanis
      </button>

      <button onClick={handleRecipes}>
        Watch Recipes
      </button>
    </div>
  </div>
</section>


);
};

export default Hero;
