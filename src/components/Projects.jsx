import { FetchContent } from "../FetchContent";

function Projects() {
  const { projects, isLoading } = FetchContent();

  return (
    <section className="projects">
      <>
        <div className="title">
          <h2>My Projects</h2>
          <div className="title-underline"></div>
        </div>
        <div className="projects-center">
          {projects.map((project) => {
            const { image, url, id, title } = project;

            return (
              <a
                href={url}
                key={id}
                target="blank"
                className="project"
                style={{ cursor: "pointer" }}
              >
                <h5>{title}</h5>
                <img src={image} alt="" className="img" />
              </a>
            );
          })}
        </div>
      </>
    </section>
  );
}

export default Projects;
