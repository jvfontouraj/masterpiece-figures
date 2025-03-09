import { products } from '@/content/products'
import Link from 'next/link'

export default async function Produto({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const produto = products.find((product) => product.productUrl === '/' + slug)
  console.log(produto)

  return (
    <main className="mx-auto mt-28">
      <section className="bg-[#bdaa80]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center pt-20">
          <div className="mb-20 flex w-full justify-start">
            <Link href="/produtos"> {'> '}Menu de busca</Link>
          </div>
          <h1 className="mb-10 text-center text-6xl font-normal">
            {produto?.title}
          </h1>
          <p className="mb-20 max-w-[600px] text-center font-light"></p>
        </div>
      </section>
    </main>
  )
}
