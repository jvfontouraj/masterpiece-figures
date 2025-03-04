'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { products } from '@/content/products'
import Image from 'next/image'

const categories = [
  { title: 'Todos', url: 'todos' },
  { title: 'Heróis', url: 'herois' },
  { title: 'Vilões', url: 'viloes' },
  { title: 'Filmes/Séries', url: 'filmes-e-series' },
  { title: 'Games', url: 'games' },
  { title: 'Arte Asiática', url: 'arte-asiática' },
]

export default function Produtos() {
  const [selected, setSelected] = useState(categories[0].title)
  const [selectedUrl, setSelectedUrl] = useState(categories[0].url)
  const [underlineX, setUnderlineX] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const activeTab = menuRef.current?.querySelector('.active')
    if (activeTab) {
      setUnderlineX(
        (activeTab as HTMLElement).offsetLeft +
          (activeTab as HTMLElement).offsetWidth / 2 -
          8, // Centraliza o triângulo
      )
    }
  }, [selected])

  function handleSelected(category: string, url: string) {
    setSelected(category)
    setSelectedUrl(url)
  }

  const filteredProducts = products.filter((product) => {
    if (selected === 'Todos') return true
    return product.tags.includes(selectedUrl)
  })

  return (
    <main className="mt-28">
      <nav className="flex flex-col items-center justify-center gap-20 bg-gold pt-20">
        <div className="flex h-10 w-[500px] items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-5">
          <input
            type="text"
            name=""
            id=""
            placeholder="Digite a obra desejada ou pesquise pelos filtros abaixo"
            className="w-full text-neutral-700 focus-visible:outline-none"
          />
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                fill="#404040"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="relative flex w-full justify-center bg-gold">
          <div ref={menuRef} className="relative flex gap-6 pb-5">
            {categories.map((category, index) => (
              <Link
                key={index}
                onClick={() => handleSelected(category.title, category.url)}
                className={`relative px-4 py-1 text-center text-2xl text-black transition-all ${selected === category.title ? 'active text-neutral-600' : ''}`}
                href={'#' + category.url}
              >
                {category.title}
              </Link>
            ))}
            <motion.div
              className="absolute bottom-0 h-2 bg-black [clip-path:_polygon(50%_0%,_0_100%,_100%_100%)]"
              animate={{ x: underlineX }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ width: 16 }} // Mantém o tamanho fixo
            />
          </div>
        </div>
      </nav>
      <section className="mx-auto grid max-w-7xl grid-cols-3 gap-14 px-10 py-20">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center justify-center gap-5"
          >
            <Image
              src={product.image}
              alt={product.title}
              className="h-auto w-full max-w-80"
            />
            <div className="flex w-full flex-col items-center text-gold">
              <h3 className="text-center text-xl">{product.title}</h3>
              <div>
                <span className="text-xs font-light">
                  {product.description1} {product.description2 && ' | '}
                </span>
                {product.description2 && (
                  <span className="text-xs font-light">
                    {product.description2}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
