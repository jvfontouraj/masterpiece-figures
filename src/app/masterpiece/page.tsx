import Image from 'next/image'
import Imagem from '@/assets/masterpiece-page.png'
import Logo from '@/assets/logo3.png'

export default function Masterpiece() {
  return (
    <main className="mx-auto mt-28 flex w-full max-w-7xl py-10">
      <div className="w-1/2">
        <Image alt="" src={Imagem} />
      </div>
      <div className="flex w-1/2 flex-col items-center justify-center gap-20 p-8 text-left">
        <Image alt="" src={Logo} />
        <p className="font-light text-white">
          A Masterpiece Figures, empresa fundada pelos sócios Luciana Cordeiro
          Distéfano de Oliveira e Sérgio Segantin Lopes, apaixonados por
          colecionismo, tem como propósito elevar sonhos e ambientes através de
          peças exclusivas e impactantes, transformando cada figura em um
          símbolo de inspiração e sofisticação.
          <br />
          <br />
          Nosso foco reside na exclusividade e personalização de Action Figures
          Premium, e acreditamos em uma cultura que valoriza a arte, a
          curadoria, a exclusividade e o atendimento personalizado, re-fletindo
          nossa dedicação em oferecer uma experiência única, onde a paixão pela
          estética se encontra com a excelência do serviço.
          <br />
          <br />
          Buscamos impactar positivamente, transformando espaços e contando
          histórias, permitindo que cada estatueta e personagem se tornem
          protagonistas em ambientes que exalam personalidade e refinamento,
          sempre comprometidos a levar excelência aos clien-tes por meio de um
          atendimento personalizado.
        </p>
      </div>
    </main>
  )
}
