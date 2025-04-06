'use client'

import { products } from '@/content/products'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@/styles/splide.css'

export default function Produto() {
  const pathname = usePathname()
  const produto = products.find(
    (product) => '/produtos' + product.productUrl === pathname,
  )
  const pageContent = produto?.paginaProduto ?? null

  const [parallaxWidth, setParallaxWidth] = useState<number>(0)

  useEffect(() => {
    const updateSize = () => {
      const parallaxSection = document.getElementById('parallaxSection')
      if (parallaxSection) {
        setParallaxWidth(parallaxSection.offsetWidth)
      }
    }

    updateSize() // Set initial size
    window.addEventListener('resize', updateSize) // Update on resize
    return () => window.removeEventListener('resize', updateSize) // Cleanup
  }, []) // Only run once on mount
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const splideImages = produto?.paginaProduto.section5.concat(
    produto?.paginaProduto.section4.image,
  )
  return (
    <main className="mx-auto mt-16 md:mt-28">
      {pageContent ? (
        <>
          <section className="min-h-mobileScreen overflow-hidden bg-[#bdaa80] md:px-10">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-2 pt-10 md:px-0">
              <div className="mb-14 flex w-full justify-start pl-5 text-sm md:pl-10 md:text-base">
                <Link href="/produtos"> {'> '}Menu de busca</Link>
              </div>
              <h1 className="mb-8 max-w-[800px] px-5 text-center text-2xl font-normal tracking-widest md:px-0 md:text-6xl">
                {produto?.title}
              </h1>
              <p className="max-w-[600px] text-center text-sm font-light md:mb-16 md:text-base">
                {pageContent.section1.text}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt={produto?.title ?? ''}
                src={pageContent.section1.image ?? ''}
                className="hidden w-full max-w-7xl md:block"
                priority={true}
              />
              <Image
                alt={produto?.title ?? ''}
                src={pageContent.section1.imageMobile ?? ''}
                className="h-full md:hidden"
                priority={true}
              />
            </div>
          </section>
          <section className="mx-auto my-20 flex min-h-screen max-w-7xl flex-col gap-2 text-gold md:h-auto md:gap-5 md:px-20">
            {pageContent.section2.title && (
              <h2 className="mx-auto w-full max-w-4xl px-10 text-lg md:px-0 md:text-2xl">
                {pageContent.section2.title}
              </h2>
            )}
            <p
              className="mx-auto max-w-4xl px-10 text-sm font-light md:px-0 md:text-lg"
              dangerouslySetInnerHTML={{ __html: pageContent.section2.text }}
            ></p>
            {pageContent.section2.image && (
              <div className="flex w-full items-center justify-center">
                <Image
                  alt=""
                  src={pageContent.section2.image}
                  className="hidden h-auto w-full max-w-7xl object-contain md:block"
                />
                <Image
                  alt=""
                  src={pageContent.section2.imageMobile ?? ''}
                  className="block h-auto w-full max-w-7xl object-contain md:hidden"
                />
              </div>
            )}
            {pageContent.section2.video && (
              <div className="mt-5 flex w-full items-center justify-center px-5 md:mt-0 md:px-0">
                <video
                  width="400"
                  height="400"
                  autoPlay
                  loop
                  muted
                  className="h-auto w-full max-w-[500px]"
                >
                  <source src={pageContent.section2.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </section>
          <section>
            <div
              id="parallaxSection"
              className="mx-auto hidden max-h-screen min-h-[calc(100dvh-112px)] w-full max-w-7xl bg-fixed bg-center bg-no-repeat md:block"
              style={{
                backgroundImage: `url(${pageContent.section3.image.src})`,
                backgroundSize: `${parallaxWidth}px auto`,
              }}
            />
            <Image
              alt=""
              src={pageContent.section3.imageMobile ?? ''}
              className="w-full md:hidden"
            />
          </section>
          <section className="bg-[#bdaa80] md:px-10 md:py-20">
            <div className="mx-auto flex max-w-7xl flex-col items-start justify-center gap-10 md:flex-row">
              <div className="flex w-full flex-col gap-10 p-10 md:w-3/5">
                {pageContent.section4.text.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <h3 className="text-base font-medium md:text-xl">
                      {item.title}
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.text }}
                      className="text-sm font-light md:text-base"
                    />
                  </div>
                ))}
              </div>
              <div className="hidden p-10 md:block md:w-2/5">
                <Image
                  alt=""
                  src={pageContent.section4.image}
                  className="w-full"
                />
              </div>
            </div>
          </section>
          <section className="mx-auto my-20 hidden w-full max-w-7xl grid-cols-3 gap-10 px-10 md:grid">
            {pageContent.section5.map((item, index) => (
              <Image alt="" src={item} key={index} className="w-full" />
            ))}
          </section>
          <section className="px-2 py-10 md:hidden">
            {splideImages && (
              <Splide
                options={{
                  perPage: 1,
                  rewind: true,
                  gap: '1rem',
                }}
                aria-labelledby="basic-example-heading"
              >
                {splideImages!.map((item, index) => (
                  <SplideSlide key={index}>
                    <Image
                      alt=""
                      src={item}
                      className="h-full w-full object-cover"
                    />
                  </SplideSlide>
                ))}
              </Splide>
            )}
          </section>
          <section className="mx-auto flex w-full max-w-7xl items-center justify-between p-10 text-sm text-gold md:text-base">
            <Link href="/produtos"> {'> '}Menu de busca</Link>

            <button
              onClick={scrollToTop}
              className="flex items-center justify-center gap-2"
            >
              <h4 className="">Topo da página</h4>
              {/* Icone Desktop */}
              <svg
                width="35"
                height="35"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:block"
              >
                <g clipPath="url(#clip0_25_2)">
                  <path
                    d="M12.85 25.19L26.95 11.09C27.29 10.75 27.75 10.57 28.2 10.57C28.65 10.57 29.1 10.74 29.45 11.09L43.55 25.19C44.24 25.88 44.24 26.99 43.55 27.68C42.86 28.37 41.75 28.37 41.06 27.68L29.97 16.59V44.06C29.97 45.03 29.18 45.82 28.21 45.82C27.24 45.82 26.45 45.03 26.45 44.06V16.59L15.36 27.68C14.67 28.37 13.56 28.37 12.87 27.68C12.18 26.99 12.18 25.88 12.87 25.19H12.85ZM0 28.2C0 43.75 12.65 56.4 28.2 56.4C43.75 56.4 56.4 43.75 56.4 28.2C56.4 12.65 43.75 0 28.2 0C12.65 0 0 12.65 0 28.2ZM3.52 28.2C3.52 14.59 14.59 3.52 28.2 3.52C41.81 3.52 52.87 14.59 52.87 28.19C52.87 41.79 41.8 52.86 28.2 52.86C14.6 52.86 3.52 41.8 3.52 28.2Z"
                    fill="#988D6E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_25_2">
                    <rect width="56.4" height="56.4" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              {/* Icone Mobile */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block md:hidden"
              >
                <g clipPath="url(#clip0_25_2)">
                  <path
                    d="M12.85 25.19L26.95 11.09C27.29 10.75 27.75 10.57 28.2 10.57C28.65 10.57 29.1 10.74 29.45 11.09L43.55 25.19C44.24 25.88 44.24 26.99 43.55 27.68C42.86 28.37 41.75 28.37 41.06 27.68L29.97 16.59V44.06C29.97 45.03 29.18 45.82 28.21 45.82C27.24 45.82 26.45 45.03 26.45 44.06V16.59L15.36 27.68C14.67 28.37 13.56 28.37 12.87 27.68C12.18 26.99 12.18 25.88 12.87 25.19H12.85ZM0 28.2C0 43.75 12.65 56.4 28.2 56.4C43.75 56.4 56.4 43.75 56.4 28.2C56.4 12.65 43.75 0 28.2 0C12.65 0 0 12.65 0 28.2ZM3.52 28.2C3.52 14.59 14.59 3.52 28.2 3.52C41.81 3.52 52.87 14.59 52.87 28.19C52.87 41.79 41.8 52.86 28.2 52.86C14.6 52.86 3.52 41.8 3.52 28.2Z"
                    fill="#988D6E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_25_2">
                    <rect width="56.4" height="56.4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </section>
        </>
      ) : (
        <div className="flex h-[calc(100dvh-232px)] flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl">Produto não encontrado</h1>
          <Link href="/produtos" className="mt-10 text-3xl underline">
            Voltar para página de produtos
          </Link>
        </div>
      )}
    </main>
  )
}
