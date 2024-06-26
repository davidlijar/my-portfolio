/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/fR5IIZSNgb9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
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
import { BootStrapIcon, CIcon, GitHubIcon, GitIcon, PythonIcon } from "../icons/icons";

export function Landing() {
  return (
    <>
      <main className="flex flex-col gap-16 py-12 md:py-16 lg:py-24">
        <section className="container mx-auto px-4 md:px-6 lg:px-8" id="about">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                LI JAR
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                I am a software developer who loves to solve problems with
                coding and thinking. Curiosity makes me fall in love with
                programming and thinking.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                I believe that I can contribute my skils in coding and computer
                engineering could makes impacts on chaing of the worlds.
              </p>
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
        <section>
          <SubNav />
        </section>
        <section className="container mx-auto px-4 md:px-6 lg:px-8" id="skills">
          <div className="grid gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                My Skills
              </h2>
              <p>I have developed some skills : </p>
            </div>
            <div>
              <b>Programming Language:</b>
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
                <TypeIcon className="w-10 h-10" />
                <span className="text-sm font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DatabaseIcon className="w-10 h-10" />
                <span className="text-sm font-medium">PostgreSQL\MySQL</span>
              </div>
            </div>

            <div>
              <b>FrameWork | Library | Tool:</b>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-2">
                <BootStrapIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Bootstrap</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <GitIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Git</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <GitHubIcon className="w-10 h-10" />
                <span className="text-sm font-medium">GitHub</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <WindIcon className="w-10 h-10" />
                <span className="text-sm font-medium">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="container mx-auto px-4 md:px-6 lg:px-8"
          id="projects"
        >
          <div className="grid gap-8">
            <div>
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
        <section
          className="container mx-auto px-4 md:px-6 lg:px-8"
          id="contact"
        >
          <div className="grid gap-8">
            <div>
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
            <span className="font-semibold">LI JAR</span>
          </div>
          <p>© 2024 LI JAR. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function JavaIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      width="30"
      height="30"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M277.7 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.8 0 242.8 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.2 12.2 0 0 1 -2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.3 17.3 0 0 0 -8.2 6.3 70.5 70.5 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6 .7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.8 509.4 401 461.3 348 437.4zM124.4 396c-78.7 22 47.9 67.4 148.1 24.5a185.9 185.9 0 0 1 -28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.6 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.4 60.4 0 0 1 -21.1-12.8z" />
    </svg>
  );
}

function JavascriptIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 448 512"
    >
      <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
    </svg>
  );
}

function DatabaseIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function ExpandIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function TypeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}

function WindIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
