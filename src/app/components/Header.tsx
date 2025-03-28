/* eslint-disable prettier/prettier */
'use client'

import Image from 'next/image'
import Logo2 from '@/assets/logo2.png'
import Link from 'next/link'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  const menus = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Masterpiece',
      url: '/masterpiece',
    },
    {
      title: 'Produtos',
      url: '/produtos',
    },
    {
      title: 'Artistas',
      url: '/artistas',
    },
    {
      title: 'Curadoria',
      url: '/curadoria',
    },
    {
      title: 'Contato',
      url: '/contato',
    },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-black">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 md:h-28 md:px-10 md:py-6">
        <Link href={'/'}>
          <Image
            src={Logo2}
            width={150}
            height={200}
            quality={100}
            alt={'logo masterpiece figures'}
            className="h-10 w-auto md:h-16"
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-10 text-xl font-light text-gold">
            {menus.map((menu) => (
              <li key={menu.title}>
                <Link href={menu.url}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <Dialog.Trigger asChild>
            <button
              className="absolute right-5 md:hidden"
              onClick={handleToggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                    fill="#ffffff"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                    fill="#ffffff"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed bottom-0 left-0 z-30 h-[calc(100vh-56px)] w-screen bg-black/60 data-[state=open]:animate-overlayShow" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-0 top-16 z-50 h-[calc(100vh-48px)] w-screen bg-black p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <ul className="flex h-full w-full flex-col justify-center gap-9 text-center text-xl font-light text-gold">
                {menus.map((menu) => (
                  <li key={menu.title}>
                    <Link href={menu.url} onClick={handleToggleMenu}>
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  )
}
