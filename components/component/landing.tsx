import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { JSX, SVGProps } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { NavigationMenuDemo } from "./navigation-menu";
import SubNav from "./subNav";

//icons
import { DatabaseIcon, XIcon, ExpandIcon } from "../icons/icons";
import NextJsIcon from "@/resource/nextjs.svg";
import ReactJsIcon from "@/resource/reactjs.svg";
import TypeScriptIcon from "@/resource/ts.svg";
import JavascriptIcon from "@/resource/js.svg";
import CIcon from "@/resource/c.svg";
import JavaIcon from "@/resource/java.svg";
import PythonIcon from "@/resource/python.svg";
import GitIcon from "@/resource/git.svg";
import GitHubIcon from "@/resource/github.svg";
import TailWindCss from "@/resource/tailwind.svg";
import BootStrapIcon from "@/resource/bootstrap.svg";
import FlaskIcon from "@/resource/flask.svg";
import JSPIcon from "@/resource/jsp.svg";
import LanguageIcon from "@/resource/lang.svg"
import { WriterEffect } from "./typewriter-effect";


import AboutPage from "@/app/about/page";

export function Landing() {
  const message1 = [
    "I am a software developer who loves to solve problems with coding and thinking. Curiosity makes me fall in love with programming and thinking.",
  ];

  const message2 = [
    "I believe that I can contribute my skils in coding and computer engineering could makes impacts on chaing of the worlds.",
  ];
  return (
    <>
      <main className="flex flex-col gap-16 py-12 md:py-16 lg:py-24">
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
        <section className="z-20">
          <SubNav />
        </section>
        <section className="container mx-auto px-4 md:px-6 lg:px-8" id="skills">
          <div className="grid gap-8">
            <div className="grid gap-4 place-items-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                My Skills
              </h2>
              <p>I have developed some skills : </p>
            </div>
            <div className="grid gap-4 place-items-center text-2xl">
              <b>Language:</b>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-2">
                <CIcon className="w-10 h-10" />
                <span className="text-sm font-medium">C</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <JavaIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Java</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <PythonIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Python</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <JavascriptIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Javascript</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <TypeScriptIcon className="w-10 h-10" />
                <span className="text-sm font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DatabaseIcon className="w-10 h-10" />
                <span className="text-sm font-medium">PostgreSQL\MySQL</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LanguageIcon className="w-10 h-10" />
                <span className="text-sm font-medium">English</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LanguageIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Korean</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LanguageIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Burmese</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LanguageIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Akha</span>
              </div>
            </div>

            <div className="grid gap-4 place-items-center text-2xl">
              <b>FrameWork | Library | Tool:</b>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-2">
                <JSPIcon className="w-10 h-10" />
                <span className="text-sm font-medium">JSP</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FlaskIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Flask</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <NextJsIcon className="w-10 h-10" />
                <span className="text-sm font-medium">NextJs</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ReactJsIcon className="w-10 h-10" />
                <span className="text-sm font-medium">ReactJs</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <BootStrapIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Bootstrap</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TailWindCss className="w-10 h-10" />
                <span className="text-sm font-medium">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <GitIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Git</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Link href={"https://github.com/davidlijar"}>
                  <GitHubIcon className="w-10 h-10" />
                </Link>
                <span className="text-sm font-medium">GitHub</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="container mx-auto px-4 md:px-6 lg:px-8"
          id="projects"
        >
          <div className="grid gap-8">
            <div className="grid gap-4 place-items-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                My Projects
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-4">
                Here are some of the projects I have worked on:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>
                    A web application built with React and Next.js.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <JavascriptIcon className="w-6 h-6" />
                    <JavaIcon className="w-6 h-6" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View Project</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 2</CardTitle>
                  <CardDescription>
                    A RESTful API built with Node.js and Express.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <PythonIcon className="w-6 h-6" />
                    <XIcon className="w-6 h-6" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View Project</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 3</CardTitle>
                  <CardDescription>
                    A mobile app built with React Native and Expo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <JavascriptIcon className="w-6 h-6" />
                    <ExpandIcon className="w-6 h-6" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View Project</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

       <section className="mt-[-50px]">
        <AboutPage/>
       </section>

        <section
          className="container mx-auto px-4 md:px-6 lg:px-8"
          id="contact"
        >
          <div className="grid gap-8">
            <div className="grid gap-4 place-items-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Get in Touch
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-4">
                I am always excited to connect with new people and discuss
                potential collaborations. Feel free to reach out to me using the
                form below.
              </p>
            </div>
            <Card className="w-full max-w-md mx-auto">
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." />
                  </div>
                  <Button className="w-full" type="submit">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/lijar.jpg" />
              <AvatarFallback>LJ</AvatarFallback>
            </Avatar>
            <span className="font-semibold">LI JAR | Portfolio</span>
          </div>
          <p>© 2024 LI JAR. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
