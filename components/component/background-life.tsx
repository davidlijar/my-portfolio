import React from "react";

const Timeline = () => {
  const events = [
    {
      title: "Primary - High School",
      time: "2006-2016",
      description: "No.6 Basic Education High School,KengTung, Myanmar",
    },
    {
      title: "Graduated High School",
      time: "2016 March",
      description:
        "Passed The Matriculation Exam with 6 distinctions. Marks:497/600",
    },
    {
      title: "Participant",
      time: "2016 August",
      description:
        "4th China Asean Youth Cultural Exchange Festival held in Xi'an",
    },
    {
      title: "Started University",
      time: "2017",
      description:
        "Mandalay University of Technology. Major : Electrical Power Engineering",
    },
    {
      title: "Start Up",
      time: "2021",
      description:
        "Started a small food ordering and delivery start up business with three other friends. Role : Web Developer | Manager",
    },
    {
      title: "Started College",
      time: "2023~",
      description: "Vision College of Jeonju. Dept : Department of International Coorperation and Technology. Major : Computer Engineering",
    },
    {
      title: "Teaching & Sharing",
      time: "2023~",
      description: "Teaching programming language mainly C and Html,Css to junior students, sharing knowledge information and leading in doing projects with them",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white">
      <div className="relative">
        <div className="border-r-2 border-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
        {events.map((event, index) => (
          <div key={index} className={`mb-8 flex justify-${index % 2 === 0 ? 'start' : 'end'} items-center w-full`}>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.time}</p>
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
