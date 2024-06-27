

const ProjectCard = ({project}:{project:any}) => {
    
    return (
      <div className="max-w-xl mx-auto p-6 bg-white  rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Tools & Technology:</span> {project.tools}
        </p>
        <p className="mb-4">{project.description}</p>
        <div className="mb-4">
          <a href={project.github} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            View Source Code on GitHub
          </a>
        </div>
        {project.youtube && (
          <div className="mb-4">
            <iframe
              width="100%"
              height="315"
              src={project.youtube}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <div className="prose">
        {project.content}
      </div>
      </div>
    );
  };
  
  export default ProjectCard;