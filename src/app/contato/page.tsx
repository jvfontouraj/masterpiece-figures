import Logo from '@/assets/logo4.png'
import Image from 'next/image'
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
            <svg
              className="h-auto w-8"
              viewBox="0 0 56 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_26_3)">
                <path
                  d="M53.93 0H1.69C1.03 0 0.5 0.53 0.5 1.19V36.21C0.5 36.87 1.03 37.4 1.69 37.4H53.93C54.59 37.4 55.12 36.87 55.12 36.21V1.19C55.12 0.53 54.59 0 53.93 0ZM50.67 2.37L32.39 17.74C29.73 19.97 25.88 19.97 23.22 17.74L4.94 2.37H50.67ZM52.74 33.8L36.84 21.61C36.32 21.21 35.58 21.31 35.18 21.83C34.78 22.35 34.88 23.1 35.4 23.49L50.43 35.01H5.19L20.22 23.49C20.74 23.09 20.84 22.35 20.44 21.83C20.04 21.31 19.3 21.21 18.78 21.61L2.88 33.8V3.74L21.7 19.57C25.2 22.51 30.43 22.51 33.93 19.57L52.74 3.74V33.81V33.8Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_26_3">
                  <rect
                    width="54.61"
                    height="37.4"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>comercial@masterpiecefigures.com</span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              className="h-auto w-8"
              viewBox="0 0 53 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_26_12)">
                <path
                  d="M26.5 0C12.16 0 0.5 11.66 0.5 26C0.5 30.89 1.86 35.64 4.44 39.76C3.41 43.36 1.56 50.16 1.54 50.23C1.44 50.58 1.54 50.96 1.81 51.21C2.08 51.46 2.45 51.55 2.8 51.45L13.11 48.28C17.15 50.71 21.77 52 26.51 52C40.85 52 52.51 40.34 52.51 26C52.51 11.66 40.84 0 26.5 0ZM26.5 50C21.98 50 17.58 48.74 13.77 46.35C13.61 46.25 13.42 46.2 13.24 46.2C13.14 46.2 13.04 46.21 12.95 46.24L3.95 49.01C4.61 46.6 5.8 42.28 6.49 39.88C6.57 39.6 6.52 39.3 6.37 39.06C3.84 35.17 2.51 30.66 2.51 26C2.5 12.77 13.27 2 26.5 2C39.73 2 50.5 12.77 50.5 26C50.5 39.23 39.73 50 26.5 50Z"
                  fill="black"
                />
                <path
                  d="M43.49 32.13C41.64 31.11 40.07 30.08 38.93 29.33C38.05 28.76 37.42 28.34 36.96 28.11C35.66 27.46 34.68 27.92 34.31 28.3C34.26 28.35 34.22 28.4 34.19 28.45C32.84 30.47 31.08 32.4 30.57 32.51C29.98 32.42 27.19 30.83 24.42 28.53C21.59 26.18 19.82 23.92 19.56 22.38C21.37 20.51 22.03 19.34 22.03 18C22.03 16.66 18.82 10.87 18.24 10.29C17.66 9.71004 16.34 9.62004 14.34 10.02C14.15 10.06 13.97 10.15 13.83 10.29C13.59 10.53 7.9 16.33 10.6 23.36C13.57 31.07 21.18 40.03 30.89 41.49C31.99 41.66 33.03 41.74 33.99 41.74C39.7 41.74 43.07 38.87 44.02 33.17C44.09 32.75 43.89 32.34 43.52 32.13H43.49ZM31.15 39.51C20.89 37.97 14.42 27.8 12.43 22.64C10.46 17.52 14.09 12.95 15 11.92C15.74 11.79 16.52 11.74 16.85 11.79C17.53 12.74 19.89 17.19 19.99 17.99C19.99 18.51 19.82 19.25 17.78 21.28C17.59 21.47 17.49 21.72 17.49 21.99C17.49 27.23 28.53 34.49 30.49 34.49C32.19 34.49 34.41 31.63 35.67 29.77C35.74 29.77 35.87 29.8 36.04 29.89C36.4 30.07 37.02 30.48 37.81 30.99C38.85 31.67 40.24 32.58 41.87 33.51C41.13 37.08 39.05 40.69 31.13 39.5L31.15 39.51Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_26_12">
                  <rect
                    width="52"
                    height="52"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>(41) 98791-4002</span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              className="h-auto w-8"
              viewBox="0 0 55 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.66 53.58H13.91C6.51 53.58 0.5 47.57 0.5 40.17V13.41C0.5 6.01 6.51 0 13.91 0H40.66C48.06 0 54.07 6.01 54.07 13.41V40.16C54.07 47.56 48.06 53.57 40.66 53.57V53.58ZM13.91 2.22C7.73 2.22 2.73 7.23 2.72 13.41V40.16C2.72 46.34 7.73 51.34 13.91 51.35H40.66C46.84 51.35 51.84 46.34 51.85 40.16V13.41C51.85 7.23 46.84 2.23 40.66 2.22H13.91Z"
                fill="black"
              />
              <path
                d="M27.29 40.4901C19.72 40.4901 13.59 34.3601 13.59 26.7901C13.59 19.2201 19.72 13.0901 27.29 13.0901C34.86 13.0901 40.99 19.2201 40.99 26.7901C40.99 34.3501 34.85 40.4801 27.29 40.4901ZM27.29 15.3101C20.95 15.3101 15.82 20.4501 15.81 26.7801C15.81 33.1201 20.95 38.2501 27.28 38.2601C33.62 38.2601 38.75 33.1201 38.76 26.7901C38.76 20.4601 33.62 15.3201 27.29 15.3101Z"
                fill="black"
              />
              <path
                d="M41.48 15.27C39.28 15.27 37.49 13.48 37.49 11.28C37.49 9.08004 39.28 7.29004 41.48 7.29004C43.68 7.29004 45.47 9.08004 45.47 11.28C45.47 13.48 43.68 15.27 41.48 15.27ZM41.48 9.52004C40.51 9.52004 39.72 10.31 39.72 11.28C39.72 12.25 40.51 13.04 41.48 13.04C42.45 13.04 43.24 12.25 43.24 11.28C43.24 10.31 42.45 9.52004 41.48 9.52004Z"
                fill="black"
              />
            </svg>
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
