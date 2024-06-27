import ProjectCard from "@/components/component/view-project";

export default function Page({ params }: { params: { id: string } }) {
  const id:number = Number(params.id);
  const index:number = id-1;

  const projects = [
    {
      name: "My Awesome Project",
      tools: "React, Tailwind CSS, Node.js",
      description:
        "This is a brief description of my awesome project. It does many wonderful things using cutting-edge technology.",
      github: "https://github.com/username/repository",
      youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: (
        <>
          <p>
            React components are the building blocks of any React application.
            They allow you to split the UI into independent, reusable pieces,
            and think about each piece in isolation.
          </p>
          <p>
            This page provides an introduction to the idea of components. You
            can find a detailed component API reference here.
          </p>
          <p>
            Conceptually, components are like JavaScript functions. They accept
            arbitrary inputs (called “props”) and return React elements
            describing what should appear on the screen.
          </p>
          <p className="font-bold">
            Mandalay University of Technology (2017-2020)
            <br />
            Vision College of Jeonju (2023~)
          </p>
        </>
      ),
    },
    {
      name: "Project 2",
      tools: "React, Tailwind CSS, Node.js",
      description:
        "This is a brief description of my awesome project. It does many wonderful things using cutting-edge technology.",
      github: "https://github.com/username/repository",
      youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: (
        <>
          <p>
            React components are the building blocks of any React application.
            They allow you to split the UI into independent, reusable pieces,
            and think about each piece in isolation.
          </p>
          <p>
            This page provides an introduction to the idea of components. You
            can find a detailed component API reference here.
          </p>
          <p>
            Conceptually, components are like JavaScript functions. They accept
            arbitrary inputs (called “props”) and return React elements
            describing what should appear on the screen.
          </p>
          <p className="font-bold">
            Mandalay University of Technology (2017-2020)
            <br />
            Vision College of Jeonju (2023~)
          </p>
        </>
      ),
    },
  ];

  return (
    <section>
      <ProjectCard project={projects[`${index}`]} />
    </section>
  );
}
