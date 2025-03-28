import Image from 'next/image'
import Logo2 from '@/assets/logo2.png'

export function Footer() {
  return (
    <footer className="relative w-full bg-[#9A8D6A] px-7 py-4 md:px-14 md:py-8">
      <div className="absolute left-1/2 top-0 h-5 w-10 -translate-x-1/2 bg-black [clip-path:_polygon(50%_100%,_0%_0%,_100%_0%)]" />
      <Image src={Logo2} alt="logo" className="h-7 w-auto md:h-14" />
    </footer>
  )
}
