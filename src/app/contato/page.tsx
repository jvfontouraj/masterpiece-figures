import Logo from '@/assets/logo4.png'
import Image from 'next/image'
import EmailIcon from '@/assets/icones/emailAtivo 1.svg'
import InstagramIcon from '@/assets/icones/instagramAtivo 3.svg'
import WhastappIcon from '@/assets/icones/whatsappAtivo 2.svg'
import Link from 'next/link'

export default function Contato() {
  return (
    <main className="mt-28 bg-[#BCAA80]">
      <div className="mx-auto flex min-h-[calc(100vh-7rem-120px)] max-w-7xl flex-col items-start justify-center gap-10 px-20">
        <Image src={Logo} alt="Logo" className="h-20 w-auto" />

        <h2 className="max-w-2xl text-3xl tracking-wider">
          Agende seu atendimento personalizado com nossos curadores
        </h2>

        <p>
          Atendemos presencialmente em Curitiba e enviamos para todo o Brasil.
          <br />
          Todos os nossos produtos têm disponibilidade de pronta entrega.
        </p>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Image src={EmailIcon} alt="Email" className="h-auto w-8" />
            <span>comercial@masterpiecefigures.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Image src={WhastappIcon} alt="Whastapp" className="h-auto w-8" />
            <span>(41) 98791-4002</span>
          </div>
          <div className="flex items-center gap-3">
            <Image src={InstagramIcon} alt="Instagram" className="h-auto w-8" />
            <span>@masterpiecefigures</span>
          </div>
        </div>
        <Link
          href={
            'https://api.whatsapp.com/send?phone=5541987914002&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Masterpiece%20Figures.'
          }
          target="_blank"
          className="rounded-md bg-gold px-3 py-3 shadow-md transition-shadow duration-300 hover:shadow-xl"
        >
          Clique aqui e nos envie uma mensagem
        </Link>
      </div>
    </main>
  )
}
