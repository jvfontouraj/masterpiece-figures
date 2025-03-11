import { products } from '@/content/products'
import Image from 'next/image'
import Link from 'next/link'

export default async function Produto({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const produto = products.find((product) => product.productUrl === '/' + slug)
  const pageContent = produto?.paginaProduto ?? null

  return (
    <main className="mx-auto mt-28">
      {pageContent ? (
        <>
          <section className="bg-[#bdaa80] px-10">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center pt-10">
              <div className="mb-14 flex w-full justify-start pl-10">
                <Link href="/produtos"> {'> '}Menu de busca</Link>
              </div>
              <h1 className="mb-8 max-w-[800px] text-center text-6xl font-normal">
                {produto?.title}
              </h1>
              <p className="mb-16 max-w-[600px] text-center font-light">
                {pageContent.section1.text}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt={produto?.title ?? ''}
                src={pageContent.section1.image ?? ''}
                className="w-full max-w-7xl"
              />
            </div>
          </section>
          {pageContent.section2 && (
            <section className="mx-auto my-20 flex max-w-7xl flex-col gap-5 px-20 text-gold">
              {pageContent.section2.title && (
                <h2 className="mx-auto w-full max-w-4xl text-2xl">
                  {pageContent.section2.title}
                </h2>
              )}
              <p className="mx-auto max-w-4xl text-lg font-light">
                {pageContent.section2.text}
              </p>
              <div className="flex w-full items-center justify-center">
                <Image
                  alt=""
                  src={pageContent.section2.video}
                  className="h-auto w-full max-w-7xl object-contain"
                />
              </div>
            </section>
          )}
          <section className="mx-auto max-w-7xl">
            <Image alt="" src={pageContent.section3.image} className="w-full" />
          </section>
          <section className="bg-[#bdaa80] px-10 py-20">
            <div className="mx-auto flex max-w-7xl items-start justify-center gap-10">
              <div className="flex w-3/5 flex-col p-10">
                {pageContent.section4.text.map((item, index) => (
                  <div key={index} className="mb-10 flex flex-col gap-2">
                    <h3 className="text-xl font-medium">{item.title}</h3>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.text }}
                      className="font-light"
                    />
                  </div>
                ))}
              </div>
              <div className="w-2/5 p-10">
                <Image
                  alt=""
                  src={pageContent.section4.image}
                  className="w-full"
                />
              </div>
            </div>
          </section>
          <section className="mx-auto my-20 flex max-w-7xl gap-10 px-10">
            {pageContent.section5.map((item, index) => (
              <Image alt="" src={item} key={index} className="w-full" />
            ))}
          </section>
        </>
      ) : (
        <div className="flex h-[calc(100vh-232px)] flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl">Produto não encontrado</h1>
          <Link href="/produtos" className="mt-10 text-3xl underline">
            Voltar para página de produtos
          </Link>
        </div>
      )}
    </main>
  )
}
