import Image from 'next/image'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'

const MyCertificates = () => {
  return (
    <section
      className="container mx-auto px-4 md:px-6 lg:px-8 mt-5"
      id="projects"
    >
      <div className="grid gap-8">
        <div className="grid gap-4 place-items-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Certificates
          </h2>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="mx-5">
            <Image
              src="/javascript_DSA.png"
              alt="certificate"
              width={350}
              height={300}
              className="mb-3"
            />
            <div className="flex items-start justify-between w-[350px]">
              <CardDescription>
                Legacy Javascript Algorithms and Data Structures
              </CardDescription>
              <Link
                href={
                  'https://www.freecodecamp.org/certification/lijar/javascript-algorithms-and-data-structures'
                }
              >
                <span className="text-sm pl-5 w-full underline">verify</span>
              </Link>
              <a
                href="/javascript_DSA.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm pl-5 w-full underline">view</span>
              </a>
            </div>
          </div>
          <div className="mx-5">
            <Image
              src="/RWD.png"
              alt="certificate"
              width={350}
              height={300}
              className="mb-3"
            />
            <div className="flex items-center justify-between w-[350px]">
              <CardDescription>Responsive Web Design</CardDescription>

              <Link
                href={
                  'https://www.freecodecamp.org/certification/lijar/responsive-web-design'
                }
              >
                <span className="text-sm pl-5 w-full underline">verify</span>
              </Link>
              <a href="/RWD.png" target="_blank" rel="noopener noreferrer">
                <span className="text-sm pl-5 w-full underline">view</span>
              </a>
            </div>
          </div>
          <div className="mx-5">
            <Image
              src="/excel.jpg"
              alt="certificate"
              width={350}
              height={300}
              className="mb-3"
            />
            <div className="flex items-center justify-between w-[350px]">
              <CardDescription>
                Microsoft Excel Expert (Office 2016)
              </CardDescription>

              <a href="/excel.jpg" target="_blank" rel="noopener noreferrer">
                <span className="text-sm pl-5 w-full underline">view</span>
              </a>
            </div>
          </div>

          <div className="mx-5">
            <Image
              src="/topik.png"
              alt="certificate"
              width={350}
              height={300}
              className="mb-3"
            />
            <div className="flex items-center justify-between w-[350px]">
              <CardDescription>TOPIK</CardDescription>

              <a href="/topik.png" target="_blank" rel="noopener noreferrer">
                <span className="text-sm pl-5 w-full underline">view</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyCertificates
