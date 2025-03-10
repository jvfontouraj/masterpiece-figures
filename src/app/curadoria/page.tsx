import Image from 'next/image'
import Curadoria from '@/assets/curadoria.png'

export default function CuradoriaPage() {
  return (
    <main className="my-28 flex w-full flex-col items-center justify-center">
      <div className="my-20 text-center text-gold">
        <h1 className="text-5xl">CURADORIA</h1>
        <h2 className="mt-4 text-3xl font-light">
          A Essência da Masterpiece Figures{' '}
        </h2>
      </div>
      <section className="relative mx-auto flex max-w-7xl">
        <div className="flex w-1/2 flex-col items-center justify-center gap-10 text-sm font-light text-white">
          <div className="flex max-w-96 flex-col items-center justify-center gap-2 text-center">
            <h3 className="text-gold">SELEÇÃO RIGOROSA</h3>
            <p>
              Cada peça é cuidadosamente escolhida para garantir que somente
              obras de altíssimo nível artístico e técnico componham nosso
              catálogo. Essa atenção assegura que os nossos produtos não só
              encantem, mas também se tornem itens de valor e legado.
            </p>
          </div>
          <div className="flex max-w-96 flex-col items-center justify-center gap-2 text-center">
            <h3 className="text-gold">EXCLUSIVIDADE PERSONALIZADA</h3>
            <p>
              Ao unir critérios estéticos com uma visão de mercado diferenciada,
              nossa curadoria oferece uma coleção que transcende tendências,
              proporcionando aos clientes a sensação de possuir algo
              verdadeiramente único e sofisticado.
            </p>
          </div>
          <div className="flex max-w-96 flex-col items-center justify-center gap-2 text-center">
            <h3 className="text-gold">TRANSFORMAÇÃO DE AMBIENTES</h3>
            <p>
              Selecionamos action figures que transformam espaços, criando
              cenários que contam histórias e elevam o design dos ambientes.
            </p>
          </div>
          <div className="flex max-w-96 flex-col items-center justify-center gap-2 text-center">
            <h3 className="text-gold">REALIDADE AUMENTADA</h3>
            <p>
              Personalização com a expêriencia exclusiva de Realidade Aumentada
              para identificar a melhor peça dentro do seu ambiente.
            </p>
          </div>
          <div className="flex max-w-96 flex-col items-center justify-center gap-2 text-center">
            <h3 className="text-gold">ATENDIMENTO DE ALTO NÍVEL</h3>
            <p>
              A experiência Masterpiece Figures é pensada para um público
              exigente, onde o atendimento personalizado e a consultoria
              especializada garantem que cada cliente encontre a peça que melhor
              reflete seu estilo e identidade.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <Image alt="" src={Curadoria} className="" />
        </div>
      </section>
    </main>
  )
}
