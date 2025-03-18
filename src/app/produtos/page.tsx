'use client'

import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { products } from '@/content/products'
import Image from 'next/image'
import Arrow from '@/assets/right_arrow.png'

const categories = [
  { title: 'Todos', url: 'todos' },
  { title: 'Heróis', url: 'herois' },
  { title: 'Vilões', url: 'viloes' },
  { title: 'Filmes/Séries', url: 'filmes-e-series' },
  { title: 'Games', url: 'games' },
  { title: 'Arte Asiática', url: 'arte-asiática' },
  { title: 'Fantasia', url: 'fantasia' },
]

export default function Produtos() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [underlineX, setUnderlineX] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const menuRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Atualiza a posição do sublinhado da categoria ativa
  useEffect(() => {
    const activeTab = menuRef.current?.querySelector('.active')
    if (activeTab) {
      setUnderlineX(
        (activeTab as HTMLElement).offsetLeft +
          (activeTab as HTMLElement).offsetWidth / 2 -
          8,
      )
    }
  }, [selectedCategory])

  // Filtra produtos pela categoria
  const filteredProducts = products.filter((product) => {
    // Category filter
    const categoryMatch =
      selectedCategory.title === 'Todos' ||
      product.tags.includes(selectedCategory.url)
    // Search query filter
    const searchMatch = product.title
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase())
    // Combine both filters
    return categoryMatch && searchMatch
  })

  // Alterna a exibição dos detalhes do produto
  const toggleDetails = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index)
  }

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSelectedIndex(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Renderiza a fileira de detalhes acima da linha onde o produto está
  const renderDetailsRow = (rowIndex: number) => {
    if (selectedIndex === null || Math.floor(selectedIndex / 3) !== rowIndex)
      return null

    return (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="relative mb-4 grid grid-cols-3 gap-6 overflow-hidden bg-[#BDAA80]"
      >
        <Link
          href={'/produtos' + filteredProducts[selectedIndex].productUrl}
          className="col-span-3 flex items-center gap-10 text-black"
          target="_blank"
        >
          <Image
            src={filteredProducts[selectedIndex].details?.image}
            alt=""
            className="h-[512px] w-1/2 object-cover"
          />
          <div className="flex w-1/2 flex-col items-center justify-center gap-1 text-center text-sm font-light text-black">
            <h3 className="mb-10 text-2xl font-normal">
              {filteredProducts[selectedIndex].title}
            </h3>
            <p className="uppercase">
              {filteredProducts[selectedIndex].description1}
            </p>
            <Image src={Arrow} alt="" className="mt-10 h-auto w-9" />
          </div>
        </Link>
        <button
          className="absolute right-5 top-5 cursor-default"
          onClick={() => setSelectedIndex(null)}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z"
              fill="#262626"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </motion.div>
    )
  }

  // Renderiza cada linha do grid
  const renderRow = (rowIndex: number) => {
    const startIdx = rowIndex * 3
    const rowItems = filteredProducts.slice(startIdx, startIdx + 3)

    return (
      <div key={rowIndex}>
        <AnimatePresence>{renderDetailsRow(rowIndex)}</AnimatePresence>
        <div className="mb-14 grid grid-cols-3 gap-14">
          {rowItems.map((product, colIndex) => (
            <div
              key={colIndex}
              onClick={() => toggleDetails(startIdx + colIndex)}
              className="flex w-full cursor-pointer flex-col items-center justify-center gap-5"
            >
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="h-auto max-h-96 w-full max-w-80 object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex w-full flex-col items-center text-gold">
                <h3 className="text-center text-xl">{product.title}</h3>
                <div>
                  <span className="text-xs font-light uppercase">
                    {product.description1}
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
        </div>
      </div>
    )
  }

  return (
    <main className="mt-28">
      {/* Navbar de Categorias */}
      <nav className="flex flex-col items-center justify-center gap-20 bg-[#BDAA80] pt-20">
        <div className="flex h-10 w-[500px] items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-5">
          <input
            type="text"
            placeholder="Digite a obra desejada ou pesquise pelos filtros abaixo"
            className="w-full text-neutral-700 focus-visible:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
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
            />
          </svg>
        </div>
        <div className="relative flex w-full justify-center">
          <div ref={menuRef} className="relative flex gap-6 pb-5">
            {categories.map((category, index) => (
              <Link
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-1 text-center text-2xl text-black transition-all ${
                  selectedCategory.title === category.title
                    ? 'active text-neutral-600'
                    : ''
                }`}
                href={'#' + category.url}
              >
                {category.title}
              </Link>
            ))}
            <motion.div
              className="absolute bottom-0 h-2 bg-black [clip-path:_polygon(50%_0%,_0_100%,_100%_100%)]"
              animate={{ x: underlineX }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ width: 16 }}
            />
          </div>
        </div>
      </nav>

      {/* Grid de Produtos */}
      <section className="mx-auto max-w-7xl px-10 py-20" ref={containerRef}>
        {filteredProducts.length > 0 ? (
          Array.from(
            { length: Math.ceil(filteredProducts.length / 3) },
            (_, rowIndex) => renderRow(rowIndex),
          )
        ) : (
          <div className="flex w-full items-center justify-center text-center text-2xl text-gold">
            Nenhuma obra encontrada...
          </div>
        )}
      </section>
    </main>
  )
}
