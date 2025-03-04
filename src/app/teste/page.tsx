'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const categories = [
  'Todos',
  'Heróis',
  'Vilões',
  'Filmes/Séries',
  'Games',
  'Arte Asiática',
]

export default function TabMenu() {
  const [selected, setSelected] = useState(categories[0])
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

  return (
    <div className="relative mt-80 flex w-full justify-center bg-[#D9C49D] py-2">
      <div ref={menuRef} className="relative flex gap-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`relative px-4 py-1 text-center text-black transition-all ${
              selected === category ? 'active text-gray-600' : ''
            }`}
          >
            {category}
          </button>
        ))}
        <motion.div
          className="absolute bottom-0 h-2 bg-black [clip-path:_polygon(50%_0%,_0_100%,_100%_100%)]"
          animate={{ x: underlineX }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ width: 16 }} // Mantém o tamanho fixo
        />
      </div>
    </div>
  )
}
