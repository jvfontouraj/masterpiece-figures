import { StaticImageData } from 'next/image'
import ArioImage from '@/assets/artistas/Ario.jpg'
import JasonImage from '@/assets/artistas/Jason.jpg'

interface ArtistasProps {
  name: string
  image: StaticImageData
  description: {
    title?: string
    text: string
  }[]
  products?: string[]
}

export const artistas: ArtistasProps[] = [
  {
    name: 'ARIO ANINDITO',
    image: ArioImage,
    description: [
      {
        text: 'Renomado artista e ilustrador indonésio, conhecido por seu trabalho em quadrinhos e ilustrações detalhadas. Ele trabalhou com algumas das maiores editoras de quadrinhos do mundo, incluindo Marvel e DC Comics, contribuindo para títulos populares como "Wolverine", "X-Men" e "Batman"',
      },
      {
        text: 'A sua arte é caracterizada por um estilo dinâmico e expressivo, com uma atenção meticulosa aos detalhes e uma habilidade excepcional em capturar emoções e movimento. Além de quadrinhos, Ario também tem explorado outras formas de arte visual, incluindo pintura e escultura, onde continua a demonstrar a sua versatilidade e talento',
      },
      {
        text: 'As suas esculturas são particularmente notáveis por sua complexidade e realismo. Utilizando uma variedade de materiais, desde argila a resina, Ario Anindito cria peças que são tanto visualmente impressionantes quanto emocionalmente ressonantes. Estas esculturas frequentemente exploram temas de identidade, conflito interno e a interação entre humanidade e tecnologia, refletindo as suas influências e interesses pessoais',
      },
      {
        text: 'Uma das obras mais reconhecidas de Ario Anindito é a série de esculturas intitulada "Fragmentos da Alma", que apresenta figuras humanas fragmentadas e reconstruídas de maneiras inovadoras. Esta série procura explorar a fragilidade da condição humana e a resiliência do espírito, servindo como uma poderosa metáfora para a experiência humana',
      },
      {
        text: 'Além disso, Ario colaborou com XM Studios na criação da peça "The Joker Rebirth". Esta escultura impressionante captura perfeitamente a essência do icônico vilão do universo Batman, destacando a habilidade de Ario em infundir vida e intensidade em suas criações tridimensionais. A peça é uma combinação de design meticuloso e execução impecável, refletindo a natureza caótica e imprevisível do Coringa',
      },
      {
        text: 'Ario continua a ser uma figura influente no mundo da arte contemporânea, inspirando novos artistas e entusiastas com a sua abordagem única e visionária da arte visual.',
      },
    ],
    products: [],
  },
  {
    name: 'JASON FABOK',
    image: JasonImage,
    description: [
      {
        title: 'Uma Jornada de Excelência e Exclusividade',
        text: 'Jason Fabok é um nome que ressoa forte-mente no mundo das artes e escultura, espe-cialmente entre os entusiastas de figuras col-ecionáveis de alta qualidade. Com uma car-reira marcada pela dedicação ao detalhismo e à busca incessante pelo realismo, Fabok se destaca como um dos escultores mais talen-tosos e respeitados da atualidade.',
      },
      {
        title: 'Início de Carreira',
        text: 'Jason Fabok começou sua jornada artística com uma paixão inata pelo desenho e pela criação de personagens. Estudou na renom-ada escola de artes, onde aperfeiçoou suas habilidades técnicas e desenvolveu um olhar crítico que lhe permitiu capturar nuances e expressões únicas. Sua formação sólida em artes visuais e sua capacidade de transpor emoções para o papel foram os pilares que sustentaram sua transição para a escultura',
      },
      {
        title: 'Parceria com Prime 1 Studio',
        text: 'A colaboração de Jason Fabok com o Prime 1 Studio marcou um ponto de virada em sua carreira. O Prime 1 Studio é conhecido por produzir esculturas de alta qualidade que capturam com perfeição personagens icôni-cos da cultura pop, especialmente dos uni-versos dos quadrinhos, filmes e videogames. A parceria entre Fabok e o estúdio resultou em uma série de esculturas que são verda-deiras obras de arte.',
      },
      {
        title: 'Exclusividade e Realismo',
        text: 'O que torna as esculturas de Jason Fabok para o Prime 1 Studio tão especiais é a atenção meticulosa aos detalhes e o compro-misso com o realismo. Cada peça é cuidadosamente esculpida e pintada à mão, garantindo uma representação fiel e impres-sionante dos personagens. Fabok utiliza técnicas avançadas de modelagem 3D e es-cultura tradicional para criar figuras que não apenas se parecem com suas contrapartes fictícias, mas que também transmitem a es-sência e a personalidade dos personagens.',
      },
      {
        title: 'Obras Icônicas',
        text: 'Entre as obras mais notáveis de Jason Fabok para o Prime 1 Studio estão as esculturas dos personagens da DC Comics. A figura de Batman, por exemplo, é uma das mais aclamadas pelos colecionadores. Com uma postura imponente, trajes detalhados e uma expressão que captura perfeitamente a de-terminação do Cavaleiro das Trevas, esta es-cultura é um testemunho da habilidade de Fabok em trazer personagens à vida. </br> </br> Outra peça que merece destaque é a escul-tura de Wonder Woman. Esta figura captura a força e a graça da Amazona, com uma atenção especial aos detalhes de sua armad-ura e expressão facial. A habilidade de Fabok em esculpir traços faciais realistas é particu-larmente evidente nesta peça, tornando-a uma das favoritas entre os fãs.Exclusividade LimitadaAs esculturas de Jason Fabok para o Prime 1 Studio são produzidas em edições limitadas, o que aumenta ainda mais seu apelo entre os colecionadores. Cada peça é numerada indi-vidualmente e acompanha um certificado de autenticidade, garantindo que os compra-dores saibam que possuem uma obra de arte exclusiva e rara. Esta exclusividade não apenas valoriza as esculturas, mas também reforça o compromisso de Fabok e do Prime 1 Studio com a qualidade e a singularidade.',
      },
      {
        title: 'Impacto no Mundo da escultura',
        text: 'Jason Fabok estabeleceu-se como uma força dominante no mundo da escultura cole-cionável. Seu trabalho com o Prime 1 Studio não apenas elevou os padrões de qualidade e realismo, mas também inspirou uma nova geração de artistas a seguir seus passos. A dedicação de Fabok à sua arte e seu compro-misso com a excelência são evidentes em cada peça que ele cria, tornando suas escul-turas verdadeiros tesouros para coleciona-dores e entusiastas da arte. </br> </br> A carreira de Jason Fabok é um testemunho de talento, dedicação e inovação. Suas escul-turas para o Prime 1 Studio representam o auge do realismo e da exclusividade no mundo das figuras colecionáveis. Cada peça é uma obra de arte que captura a essência dos personagens de maneira extraordinária, garantindo que o legado de Fabok como es-cultor continue a inspirar e a encantar por muitos anos.',
      },
    ],
    products: [],
  },
  {
    name: 'JIM LEE',
    image: ArioImage,
    description: [
      {
        text: 'Informações sobre o artista',
      },
    ],
  },
  {
    name: 'JORGE JIMENEZ',
    image: ArioImage,
    description: [
      {
        text: 'Informações sobre o artista',
      },
    ],
  },
  {
    name: 'LEE BERMEJO',
    image: ArioImage,
    description: [
      {
        text: 'Informações sobre o artista',
      },
    ],
  },
  {
    name: 'OSWALD COBBLEPOT',
    image: ArioImage,
    description: [
      {
        text: 'Informações sobre o artista',
      },
    ],
  },
  {
    name: 'TIAGO RIOS',
    image: ArioImage,
    description: [
      {
        text: 'Informações sobre o artista',
      },
    ],
  },
  {
    name: 'YUAN XING LIANG',
    image: ArioImage,
    description: [
      {
        text: 'Informações sobre o artista',
      },
    ],
  },
]
