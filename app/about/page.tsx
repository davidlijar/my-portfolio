import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timeline from "@/components/component/background-life";
import Profile from "@/components/component/profile";

export default function AboutPage(){



    return (
        <section
        className="container mt-10 mx-auto px-4 md:px-6 lg:px-8"
        id="about-me "
      >
        <div className="grid gap-4 place-items-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            I am always excited to connect with new people and discuss
            potential collaborations. Feel free to reach out to me using the
            form below.
          </p>
          <div>
            <Tabs
              defaultValue="myinfo"
              className="w-[370px] lg:w-[800px]  grid place-items-center"
            >
              <TabsList>
                <TabsTrigger value="myinfo">Profile</TabsTrigger>
                <TabsTrigger value="password">Background</TabsTrigger>
              </TabsList>
              <div className="mt-4 w-[100%]">
                <TabsContent
                  value="myinfo"
                  className="mt-5 flex flex-col items-center gap-3"
                >
                  <Profile/>
                </TabsContent>
                <TabsContent value="password" className="mt-5">
                  <Timeline/>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
    )
}