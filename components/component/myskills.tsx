import NextJsIcon from "@/resource/nextjs.svg";
import ReactJsIcon from "@/resource/reactjs.svg";
import TypeScriptIcon from "@/resource/ts.svg";
import CIcon from "@/resource/c.svg";
import { DatabaseIcon } from "../icons/icons";
import GitIcon from "@/resource/git.svg";
import GitHubIcon from "@/resource/github.svg";
import TailWindCss from "@/resource/tailwind.svg";
import BootStrapIcon from "@/resource/bootstrap.svg";
import FlaskIcon from "@/resource/flask.svg";
import JSPIcon from "@/resource/jsp.svg";
import LanguageIcon from "@/resource/lang.svg";
import JavascriptIcon from "@/resource/js.svg";

import JavaIcon from "@/resource/java.svg";
import PythonIcon from "@/resource/python.svg";
import TkinterIcon from "@/resource/tkinter.svg"
import Link from "next/link";

const MySkills = () => {
  return (
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
            <span className="text-sm font-medium">
              PostgreSQL\MySQL
              <br />
              Firebase\Supabase
            </span>
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
            <TkinterIcon className="w-10 h-10" />
            <span className="text-sm font-medium">Tkinter</span>
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
  );
};

export default MySkills;
