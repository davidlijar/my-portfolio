import React from "react";

const Timeline = () => {
  const events = [
    {
      title: "Started University",
      time: "2017",
      description: "Mandalay University of Technology",
    },
    {
      title: "Graduated",
      time: "2020",
      description: "Completed degree in Computer Science.",
    },
    {
      title: "Started College",
      time: "2023",
      description: "Vision College of Jeonju",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="relative">
        <div className="border-r-2 border-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
        {events.map((event, index) => (
          <div
            key={index}
            className={`mb-8 flex justify-${
              index % 2 === 0 ? "start" : "end"
            } items-center w-full`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
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
