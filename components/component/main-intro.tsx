import Image from 'next/image'
import { WriterEffect } from './typewriter-effect'

const MainIntro = () => {
  const message1 = [
    'LI JAR',
    'Software Developer',
    'Computer Engineering Student',
  ]

  const message2 = [
    'Welcome to my portfolio! I am LI JAR, a software developer and a dedicated computer engineering student. With extensive experience in web development, I have honed my skills in creating dynamic and responsive web applications. My journey has also led me to explore and contribute to projects in IoT, AI, and E-commerce, showcasing my versatility and adaptability in various technological domains. Beyond coding, I excel in leadership and teamwork, consistently driving projects to success through collaboration and innovation.',
  ]

  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8" id="about">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <WriterEffect str={message1} />
          </h2>
          <div className="text-gray-500 dark:text-gray-400">
            <p>{message2}</p>
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
              aspectRatio: '400/400',
              objectFit: 'cover',
            }}
            width={400}
          />
        </div>
      </div>
    </section>
  )
}

export default MainIntro
