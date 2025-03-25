'use client'

import Image from 'next/image'
import HomeBg from '@/assets/home_bg.png'
import HeroSectionBg from '@/assets/hero_section.png'
import Logo1 from '@/assets/logo1.png'
import PredatorAhab from '@/assets/products/predator_ahab.png'
import Logo2 from '@/assets/logo2.png'
import { useEffect } from 'react'
import HomePredator from '@/assets/home-predator.jpg'
import HomeYuan from '@/assets/home-yuan.jpg'
import HomeBatman from '@/assets/home-batman.jpg'
import BatmanHush from '@/assets/products/BATMAN HUSH BATCAVE.png'
import YuanFlower from '@/assets/products/SUMMER DRUNKEN BEAUTY FLOWER PAVILION PAINTED VERSION STATUE.png'
import Curadoria1 from '@/assets/home-curadoria-1.png'
import Curadoria2 from '@/assets/home-curadoria-2.png'
import Curadoria3 from '@/assets/home-curadoria-3.png'
import Curadoria4 from '@/assets/home-curadoria-4.png'
import Curadoria5 from '@/assets/home-curadoria-5.png'
import Curadoria6 from '@/assets/home-curadoria-6.png'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const timeout = setTimeout(() => {
      document.body.style.overflow = 'auto'
    }, 5000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="fixed left-0 top-0 -z-10 flex h-screen w-screen animate-layer1 flex-col items-center justify-center gap-20 bg-black/80 opacity-0 backdrop-blur">
        <Image
          src={Logo2}
          alt=""
          className="h-40 w-auto animate-layer1Objects opacity-0"
        />
        <h2 className="animate-layer1Objects text-center text-4xl font-light text-gold opacity-0">
          Onde a arte e exclusividade se encontram
        </h2>
      </div>
      <div className="fixed left-0 top-0 -z-10 flex h-screen w-screen max-w-full animate-layer2 items-center justify-center overflow-hidden bg-black/80 opacity-0 backdrop-blur">
        <Image
          src={HomeBg}
          alt={''}
          className="h-screen w-auto animate-layer2image opacity-0"
          quality={100}
        />
      </div>
      <main className="relative flex flex-col">
        <section className="relative flex h-[calc(100vh-20px)] w-full flex-col items-center justify-center gap-10 overflow-hidden">
          <Image
            src={HeroSectionBg}
            alt={''}
            className="absolute left-1/2 top-1/2 -z-10 h-auto w-[2000px] -translate-x-1/2 -translate-y-1/2 object-cover"
            quality={100}
          />
          <Image src={Logo1} alt={''} className="aspect-square h-auto w-20" />
          <h1 className="text-center text-4xl font-light text-gold">
            Elevamos seus sonhos e ambientes <br /> com peças exclusivas e
            impactantes, <br /> disponíveis para pronta entrega.
          </h1>
          <Link href={'/#produtos'}>
            <svg
              className="absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer transition-all duration-500 hover:translate-y-1"
              width="70"
              height="70"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                fill="#dbc79a"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </section>
        <section
          id="produtos"
          className="mx-auto -mt-20 w-full max-w-7xl pt-20"
        >
          <Link
            href="/produtos/predator-ahab"
            className="flex h-[calc(100vh-82px)] w-full overflow-hidden"
          >
            <div className="relative flex h-auto w-[55%] items-center justify-center">
              <Image
                src={HomePredator}
                alt={''}
                className="absolute inset-1/2 w-[1500px] -translate-x-1/2 -translate-y-1/2 object-cover"
              />
            </div>
            <div className="flex h-full w-[45%] flex-col items-center justify-center gap-5 p-20">
              <Image
                src={PredatorAhab}
                alt=""
                className="h-full w-auto object-contain"
              />
              <h3 className="text-center text-2xl font-light uppercase tracking-widest text-gold">
                Predator Ahab
              </h3>
            </div>
          </Link>
        </section>
        <section className="mx-auto w-full max-w-7xl">
          <Link
            href="/produtos/summer-drunken-beauty"
            className="flex h-[calc(100vh-82px)] w-full overflow-hidden"
          >
            <div className="flex h-full w-[45%] flex-col items-center justify-center gap-5 p-20">
              <Image
                src={YuanFlower}
                alt=""
                className="h-full w-auto object-contain"
              />
              <h3 className="-mt-16 mb-16 text-center text-2xl font-light uppercase tracking-widest text-gold">
                YUAN FLOWER
              </h3>
            </div>
            <div className="relative flex h-full w-[55%] items-center justify-center">
              <Image
                src={HomeYuan}
                alt={''}
                className="absolute inset-1/2 h-full w-auto -translate-x-1/2 -translate-y-1/2 object-cover"
              />
            </div>
          </Link>
        </section>
        <section className="mx-auto w-full max-w-7xl">
          <Link
            href="/produtos/batman-hush"
            className="flex h-[calc(100vh-82px)] w-full overflow-hidden"
          >
            <div className="relative flex h-full w-[55%] items-center justify-center">
              <Image
                src={HomeBatman}
                alt={''}
                className="absolute inset-1/2 h-full w-auto -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>
            <div className="flex h-full w-[45%] flex-col items-center justify-center gap-5 p-20">
              <Image
                src={BatmanHush}
                alt=""
                className="h-full w-auto object-contain"
              />
              <h3 className="text-center text-2xl font-light uppercase tracking-widest text-gold">
                Batman Hush
              </h3>
            </div>
          </Link>
        </section>
        <section className="flex flex-col items-center justify-center px-20 py-72">
          <h3 className="text-center text-3xl font-light tracking-widest text-gold">
            Peças únicas, numeradas e limitadas,
            <br />
            em uma curadoria cuidadosa que
            <br />
            garante qualidade e autenticidade.
          </h3>
        </section>
        <section className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-20">
          <h2 className="text-center text-4xl tracking-[.5rem] text-white">
            DESTAQUES DA CURADORIA
          </h2>
          <div className="grid grid-cols-3 gap-3 pb-20">
            <Link href={'/produtos/batman-busto'} className="overflow-hidden">
              <Image
                src={Curadoria1}
                alt=""
                className="h-auto w-full transition-transform duration-500 hover:scale-105"
              />
            </Link>
            <Link
              href={'/produtos/green-scar-hulk'}
              className="overflow-hidden"
            >
              <Image
                src={Curadoria2}
                alt=""
                className="h-auto w-full transition-transform duration-500 hover:scale-105"
              />
            </Link>
            <Link href={'/produtos/cheetah'} className="overflow-hidden">
              <Image
                src={Curadoria3}
                alt=""
                className="h-auto w-full transition-transform duration-500 hover:scale-105"
              />
            </Link>
            <Link href={'/produtos/the-joker-bust'} className="overflow-hidden">
              <Image
                src={Curadoria4}
                alt=""
                className="h-auto w-full transition-transform duration-500 hover:scale-105"
              />
            </Link>
            <Link
              href={'/produtos/dungeons-dragons'}
              className="overflow-hidden"
            >
              <Image
                src={Curadoria5}
                alt=""
                className="h-auto w-full transition-transform duration-500 hover:scale-105"
              />
            </Link>
            <Link
              href={'/produtos/batman-who-laughs'}
              className="overflow-hidden"
            >
              <Image
                src={Curadoria6}
                alt=""
                className="h-auto w-full transition-transform duration-500 hover:scale-105"
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
