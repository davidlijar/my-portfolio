//icons
import { XIcon, ExpandIcon } from "../icons/icons";

import JavascriptIcon from "@/resource/js.svg";

import JavaIcon from "@/resource/java.svg";
import PythonIcon from "@/resource/python.svg";
import FlaskIcon from "@/resource/flask.svg";
import TkinterIcon from "@/resource/tkinter.svg";
import JSPIcon from "@/resource/jsp.svg";

import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
  } from "@/components/ui/card";
import { Button } from "../ui/button";


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
              <CardDescription>
                Smart Fram project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <PythonIcon className="w-6 h-6" />
                <FlaskIcon className="w-6 h-6" />
                <TkinterIcon className="w-6 h-6" />
                
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Project</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>NAMA Real Estate Website</CardTitle>
              <CardDescription>
                Real Estate Website with Java, JSP
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <JavaIcon className="w-6 h-6" />
                <JSPIcon className="w-6 h-6" />
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
  );
};


export default MyProjects;