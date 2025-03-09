'use client'

import Image from 'next/image'
import HomeBg from '@/assets/home_bg.png'
import HeroSectionBg from '@/assets/hero_section.png'
import Logo1 from '@/assets/logo1.png'
import Mockup1 from '@/assets/mockup1.jpg'
import PredatorAhab from '@/assets/products/predator_ahab.png'
import Logo2 from '@/assets/logo2.png'
import { useEffect } from 'react'

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
      <div className="fixed left-0 top-0 z-0 flex h-screen w-screen animate-layer1 flex-col items-center justify-center gap-20 bg-black/80 opacity-0 backdrop-blur">
        <Image
          src={Logo2}
          alt=""
          className="h-40 w-auto animate-layer1Objects opacity-0"
        />
        <h2 className="animate-layer1Objects text-center text-4xl font-light text-gold opacity-0">
          Onde a arte e exclusividade se encontram
        </h2>
      </div>
      <div className="fixed left-0 top-0 z-0 flex h-screen w-screen max-w-full animate-layer2 items-center justify-center overflow-hidden bg-black/80 opacity-0 backdrop-blur">
        <Image
          src={HomeBg}
          alt={''}
          className="h-screen w-auto animate-layer2image opacity-0"
          quality={100}
        />
      </div>
      <main className="flex flex-col">
        <section className="relative flex h-[calc(100vh-20px)] w-full flex-col items-center justify-center gap-10 overflow-hidden">
          <Image
            src={HeroSectionBg}
            alt={''}
            className="absolute left-1/2 top-1/2 -z-10 h-auto w-full -translate-x-1/2 -translate-y-1/2"
            quality={100}
          />
          <Image src={Logo1} alt={''} className="aspect-square h-auto w-20" />
          <h1 className="text-center text-4xl font-light text-gold">
            Elevamos seus sonhos e ambientes <br /> com peças exclusivas e
            impactantes.
          </h1>
        </section>
        <section>
          <div className="flex h-[calc(100vh-82px)] w-full overflow-hidden">
            <div className="relative flex h-auto w-[55%] items-center justify-center">
              <Image
                src={Mockup1}
                alt={''}
                className="absolute inset-1/2 h-full w-auto -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="flex h-full w-[45%] flex-col items-center justify-center gap-5 p-20">
              <Image src={PredatorAhab} alt="" className="h-full w-auto" />
              <h3 className="text-center text-3xl font-light uppercase text-gold">
                Predator Ahab
              </h3>
            </div>
          </div>
        </section>
        <section>
          <div className="flex h-[calc(100vh-82px)] w-full overflow-hidden">
            <div className="flex h-full w-[45%] flex-col items-center justify-center gap-5 p-20">
              <Image src={PredatorAhab} alt="" className="h-full w-auto" />
              <h3 className="text-center text-3xl font-light uppercase text-gold">
                Predator Ahab
              </h3>
            </div>
            <div className="relative flex h-full w-[55%] items-center justify-center">
              <Image
                src={Mockup1}
                alt={''}
                className="absolute inset-1/2 h-full w-auto -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex h-[calc(100vh-82px)] w-full overflow-hidden">
            <div className="relative flex h-full w-[55%] items-center justify-center">
              <Image
                src={Mockup1}
                alt={''}
                className="absolute inset-1/2 h-full w-auto -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="flex h-full w-[45%] flex-col items-center justify-center gap-5 p-20">
              <Image src={PredatorAhab} alt="" className="h-full w-auto" />
              <h3 className="text-center text-3xl font-light uppercase text-gold">
                Predator Ahab
              </h3>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center px-20 py-40">
          <h3 className="text-center text-3xl font-light text-gold">
            Peças únicas, numeradas e limitadas,
            <br />
            em uma curadoria cuidadosa que
            <br />
            garante qualidade e autenticidade.
          </h3>
        </section>
        <section className="flex flex-col items-center justify-center gap-20">
          <h2 className="text-center text-4xl text-gold">
            DESTAQUES DA CURADORIA
          </h2>
          <div className="grid grid-cols-3 gap-20 px-20 pb-20">
            <Image src={PredatorAhab} alt="" className="h-auto w-40" />
            <Image src={PredatorAhab} alt="" className="h-auto w-40" />
            <Image src={PredatorAhab} alt="" className="h-auto w-40" />
            <Image src={PredatorAhab} alt="" className="h-auto w-40" />
            <Image src={PredatorAhab} alt="" className="h-auto w-40" />
            <Image src={PredatorAhab} alt="" className="h-auto w-40" />
          </div>
        </section>
      </main>
    </>
  )
}
