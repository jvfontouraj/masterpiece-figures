import Image from 'next/image'
import Curadoria from '@/assets/curadoria.png'

export default function CuradoriaPage() {
  return (
    <main className="my-20 flex w-full flex-col items-center justify-center md:my-28">
      <div className="text-center tracking-widest text-gold md:my-20 md:tracking-[.5rem]">
        <h1 className="text-2xl md:text-5xl">CURADORIA</h1>
        <h2 className="mt-2 text-base font-light md:mt-4 md:text-3xl">
          A Essência da Masterpiece Figures
        </h2>
      </div>
      <section className="relative mx-auto flex max-w-7xl gap-1">
        <div className="mt-[450px] flex flex-col items-end justify-start gap-12 bg-black/80 px-8 pr-8 pt-5 text-sm font-light text-white md:mt-0 md:w-[40%] md:px-0 xl:text-base">
          <div className="flex flex-col justify-center gap-2 md:-mr-44 md:items-center md:text-center xl:-mr-56">
            <h3 className="text-gold">SELEÇÃO RIGOROSA</h3>
            <p className="md:max-w-[390px] xl:max-w-[445px]">
              Cada peça é cuidadosamente escolhida para garantir que somente
              obras de altíssimo nível artístico e técnico componham nosso
              catálogo. Essa atenção assegura que os nossos produtos não só
              encantem, mas também se tornem itens de valor.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 md:-mr-24 md:items-center md:text-center xl:-mr-32">
            <h3 className="text-gold">EXCLUSIVIDADE PERSONALIZADA</h3>
            <p className="md:max-w-[365px] xl:max-w-[420px]">
              Ao unir critérios estéticos com uma visão de mercado diferenciada,
              nossa curadoria oferece uma coleção que transcende tendências,
              proporcionando aos clientes a sensação de possuir algo
              verdadeiramente único e sofisticado.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 md:items-center md:text-center">
            <h3 className="text-gold">TRANSFORMAÇÃO DE AMBIENTES</h3>
            <p className="md:max-w-[330px] xl:max-w-[380px]">
              Selecionamos action figures que transformam espaços, criando
              cenários que contam histórias e elevam o design dos ambientes.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 md:-mr-16 md:items-center md:text-center xl:-mr-20">
            <h3 className="text-gold">REALIDADE AUMENTADA</h3>
            <p className="md:max-w-[350px] xl:max-w-[400px]">
              Personalização com a expêriencia exclusiva de Realidade Aumentada
              para identificar a melhor peça dentro do seu ambiente.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 md:-mr-28 md:items-center md:text-center xl:-mr-32">
            <h3 className="text-gold">ATENDIMENTO DE ALTO NÍVEL</h3>
            <p className="md:max-w-[330px] xl:max-w-[380px]">
              A experiência Masterpiece Figures é pensada para um público
              exigente, onde o atendimento personalizado e a consultoria
              especializada garantem que cada cliente encontre a peça que melhor
              reflete seu estilo e identidade.
            </p>
          </div>
        </div>
        <div className="fixed -z-10 w-full md:static md:w-[60%]">
          <Image alt="" src={Curadoria} className="max-h-[450px] w-full" />
        </div>
      </section>
    </main>
  )
}
