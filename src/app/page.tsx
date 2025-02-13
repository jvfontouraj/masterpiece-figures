import Image from 'next/image'
import HomeBg from '@/assets/home_bg.png'

export default function Home() {
  return (
    <>
      <div className="absolute left-0 top-0 z-[99] flex h-screen w-screen animate-fade items-center justify-center bg-black/80 backdrop-blur animate-delay-[4000ms] animate-reverse animate-once animate-ease-in">
        <h1 className="text-center text-3xl font-bold text-gold">
          Onde a arte e exclusividade se encontram
        </h1>
      </div>
      <div className="absolute left-0 top-0 z-[98] flex h-screen w-screen animate-fade items-center justify-center bg-black/80 backdrop-blur animate-delay-[8000ms] animate-reverse animate-once animate-ease-in">
        <Image
          src={HomeBg}
          alt={''}
          className="h-screen w-auto"
          quality={100}
        />
      </div>
      <main className=""></main>
    </>
  )
}
