import hero from "../assets/hero.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>My Project Portfolio</h1>
          <p>
            I'm a passionate web developer with a strong foundation in both
            frontend and backend technologies. From crafting responsive user
            interfaces with HTML, CSS, and React to building robust backend
            services using Node.js and Express. I believe in continuous learning
            and love solving real-world problems through technology. Whether
            it’s building a personal project or collaborating on a team, I
            always aim for quality, performance, and great user experience
          </p>
        </div>
        <div className="img-container">
          <img className="img" src={hero} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
