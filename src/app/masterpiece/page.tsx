import Image from 'next/image'
import Imagem from '@/assets/masterpiece-page.png'
import Logo from '@/assets/logo3.png'

export default function Masterpiece() {
  return (
    <main className="mx-auto mt-10 flex w-full max-w-7xl flex-col-reverse py-10 md:mt-28 md:flex-row">
      <div className="w-full max-w-[80%] md:w-1/2">
        <Image alt="" src={Imagem} />
      </div>
      <div className="flex flex-col-reverse items-center justify-center gap-5 px-8 py-5 text-left md:w-1/2 md:flex-col md:gap-20 md:p-8">
        <Image
          alt=""
          src={Logo}
          className="h-8 w-auto self-end md:h-auto md:self-auto"
        />
        <p className="text-sm font-light text-white md:text-base">
          A Masterpiece Figures, fundada por Luciana Distéfano e Sérgio Lopes,
          tem como propósito elevar sonhos e ambientes através de peças
          exclusivas e impactantes, transformando cada figura em um símbolo de
          inspiração e sofisticação.
          <br />
          <br />
          Nosso foco reside na exclusividade e personalização de Action Figures
          Premium, e acreditamos em uma cultura que valoriza a arte, a
          curadoria, a exclusividade e o atendimento personalizado, refletindo
          nossa dedicação em oferecer uma experiência única, onde a paixão pela
          estética se encontra com a excelência do serviço.
          <br />
          <br />
          Buscamos impactar positivamente, transformando espaços e contando
          histórias, permitindo que cada estatueta e personagem se tornem
          protagonistas em ambientes que exalam personalidade e refinamento,
          sempre comprometidos a levar excelência aos clientes por meio de um
          atendimento personalizado.
        </p>
      </div>
    </main>
  )
}
