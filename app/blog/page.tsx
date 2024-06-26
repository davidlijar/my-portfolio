//typewriter-effect


import { PythonIcon } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { XIcon, ExpandIcon } from "lucide-react";

//icons
import JavascriptIcon from "@/resource/js.svg";
import JavaIcon from "@/resource/js.svg";
import WriterEffect from "@/components/component/typewriter-effect";

export default function Blog() {
  return (
    <section
      className="container mt-10  mx-auto px-4 md:px-6 lg:px-8"
      id="projects"
    >
      <div>
        I am <WriterEffect />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Article 1</CardTitle>
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
            <Button variant="outline">Read&gt;&gt;</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Article 2</CardTitle>
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
            <Button variant="outline">Read&gt;&gt;</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Article 3</CardTitle>
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
            <Button variant="outline">Read&gt;&gt;</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
