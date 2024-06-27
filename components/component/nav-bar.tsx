import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  SheetTrigger,
  SheetClose,
  SheetContent,
  Sheet,
} from '@/components/ui/sheet'
import { JSX, SVGProps } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

//icons
import { XIcon, MenuIcon } from 'lucide-react'

export function Navbar() {
  const menus = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-white px-4 shadow-sm dark:bg-gray-950 md:px-6">
      <Link className="flex items-center gap-2" href="/">
        <Avatar>
          <AvatarImage src="/lijar.jpg" />
          <AvatarFallback>LJ</AvatarFallback>
        </Avatar>
        <span className="font-semibold">LI JAR | Portfolio</span>
      </Link>
      <nav className="hidden items-center gap-4 md:flex">
        {menus.map((menu) => {
          return (
            <Link
              key={menu.name}
              className="text-lg font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href={menu.href}
            >
              {menu.name}
            </Link>
          )
        })}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex h-full flex-col justify-between p-6">
            <nav className="grid gap-4">
              {menus.map((menu) => {
                return (
                  <SheetClose asChild key={menu.name}>
                    <Link
                      className="text-lg font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      href={menu.href}
                    >
                      {menu.name}
                    </Link>
                  </SheetClose>
                )
              })}
            </nav>
            <div className="flex items-center justify-between">
              <Link className="flex items-center gap-2" href="#">
                <Avatar>
                  <AvatarImage src="/lijar.jpg" />
                  <AvatarFallback>LJ</AvatarFallback>
                </Avatar>
                <span className="font-semibold">LI JAR</span>
              </Link>
              <SheetClose asChild>
                <Button size="icon" variant="ghost">
                  <XIcon className="h-6 w-6" />
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
