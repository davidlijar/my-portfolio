//icons
import { XIcon, ExpandIcon } from "../icons/icons";

import JavascriptIcon from "@/resource/js.svg";

import JavaIcon from "@/resource/java.svg";
import PythonIcon from "@/resource/python.svg";
import FlaskIcon from "@/resource/flask.svg";
import TkinterIcon from "@/resource/tkinter.svg";
import JSPIcon from "@/resource/jsp.svg";
import ReactJsIcon from "@/resource/reactjs.svg";
import NextJsIcon from "@/resource/nextjs.svg";
import TailwindCssIcon from "@/resource/tailwind.svg";
import { DatabaseIcon } from "../icons/icons";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import ProjectCard from "./view-project";

const MyProjects = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8" id="projects">
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
              <CardTitle>Smart Farm</CardTitle>
              <CardDescription>Smart Fram project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <PythonIcon className="w-6 h-6" />
                <FlaskIcon className="w-6 h-6" />
                <TkinterIcon className="w-6 h-6" />
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/project/1`}>
                <Button variant="outline">View Project</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>NAMA Real Estate</CardTitle>
              <CardDescription>
                Real Estate Website developed with Java, JSP
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <JavaIcon className="w-6 h-6" />
                <JSPIcon className="w-6 h-6" />
                <DatabaseIcon className="w-6 h-6" />
                MySQL
              </div>
            </CardContent>
            <CardFooter>
            <Link href={`/project/2`}>
              <Button variant="outline">View Project</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>MiNaw AI</CardTitle>
              <CardDescription>
                AI ChatBot developed using Gemini API, LangChain and Azure
                speech recognition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <p>GeminiAPI</p>
                <p>LangChain</p>
                <p>Azure</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Project</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Metagrow</CardTitle>
              <CardDescription>VR Shopping Mall</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <p>Unity</p>
                <p>C#</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Project</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>NAMA E-commerce</CardTitle>
              <CardDescription>
                Food ordering and delivery Website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <ReactJsIcon className="w-6 h-6" />
                <DatabaseIcon className="w-6 h-6" />
                Firebase
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Project</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                LI JAR | Portfolio<span className="text-sm">(this)</span>
              </CardTitle>
              <CardDescription>Personal Portfolio website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <NextJsIcon className="w-6 h-6" />
                <ReactJsIcon className="w-6 h-6" />
                <TailwindCssIcon className="w-6 h-6" />
                <DatabaseIcon className="w-6 h-6" />
                PostgreSQL
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Project</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
