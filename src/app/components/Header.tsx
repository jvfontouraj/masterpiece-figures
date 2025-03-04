import Image from 'next/image'
import Logo2 from '@/assets/logo2.png'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-black">
      <div className="mx-auto flex h-28 w-full max-w-7xl items-center justify-between px-10 py-6">
        <Image
          src={Logo2}
          width={150}
          height={200}
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
              <Link target="_blank" href="/masterpiece">
                Masterpiece
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
              <Link target="_blank" href="/curadoria">
                Curadoria
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
