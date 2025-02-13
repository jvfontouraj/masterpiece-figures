import Image from 'next/image'
import Logo1 from '@/assets/logo1.png'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-neutral-950/75 shadow-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4">
        <Image
          src={Logo1}
          width={50}
          height={50}
          alt={'logo masterpiece figures'}
        />
        <nav>
          <ul className="flex gap-10 text-xl font-light text-gold">
            <li>
              <Link target="_blank" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/quem-somos">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/produtos">
                Produtos
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/artistas">
                Artistas
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/inspiracao">
                Inspiração
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/contato">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
