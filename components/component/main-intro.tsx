import Image from "next/image";
import { WriterEffect } from "./typewriter-effect";

const MainIntro = () => {
  const message1 = [
    "I am a software developer who loves to solve problems with coding and thinking. Curiosity makes me fall in love with programming and thinking.",
  ];

  const message2 = [
    "I believe that I can contribute my skils in coding and computer engineering could makes impacts on chaing of the worlds.",
  ];

  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8" id="about">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            LI JAR
          </h2>
          <div className="text-gray-500 dark:text-gray-400">
            <WriterEffect str={message1} />
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            <WriterEffect str={message2} />
          </div>

          {/* <Button className="mt-4" variant="outline">
                Download Resume
              </Button> */}
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="LI JAR"
            className="rounded-full"
            height={400}
            src="/lijar.jpg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default MainIntro;
