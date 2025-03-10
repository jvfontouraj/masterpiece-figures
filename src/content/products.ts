import { StaticImageData } from 'next/image'
import Predator from '@/assets/products/predator_ahab.png'
import Batman from '@/assets/products/batman.png'
import predatorMockup from '@/assets/products/predator_mockup.jpg'
import AlienChap from '@/assets/products/ALIEN XENOMORFO BIG CHAP.png'
import Batcaverna from '@/assets/products/BATCAVERNA SÉRIE TV 1966.png'
import BatmanDamned from '@/assets/products/BATMAN DAMNED.png'
import BatmanHush from '@/assets/products/BATMAN HUSH BATCAVE.png'
import BatmanKnightmare from '@/assets/products/BATMAN KNIGHTMARE.png'
import BatmanWhoLaughs from '@/assets/products/BATMAN WHO LAUGHS.png'
import CyberCat from '@/assets/products/CYBER CAT.png'
import GreenScarHulk from '@/assets/products/GREEN SCAR HULK.png'
import JokerBust from '@/assets/products/THE JOKER LIMITED EDITION BUST.png'
import BatmanPenguin from '@/assets/products/BATMAN PENGUIN DAIMY.png'
import JungleHunter from '@/assets/products/JUNGLE HUNTER PREDATOR.png'
import SheRa from '@/assets/products/SHE-RA & SWIFT WIND DELUXE.png'
import Terminator from '@/assets/products/TERMINATOR BATTLE DAMAGED.png'
import JokerStatue from '@/assets/products/THE JOKER STATUE.png'
import WonderWoman from '@/assets/products/WONDER WOMAN REBIRTH  SILVER ARMOR.png'
import SummerDrunkenBeauty from '@/assets/products/SUMMER DRUNKEN BEAUTY FLOWER PAVILION PAINTED VERSION STATUE.png'

// Predator Ahab ////////////////
import PredatorAhab1 from '@/assets/products/predator-ahab/1.png'
import PredatorAhab2 from '@/assets/products/predator-ahab/2.jpg'
import PredatorAhab3 from '@/assets/products/predator-ahab/3.jpg'
import PredatorAhab4 from '@/assets/products/predator-ahab/4.jpg'
import PredatorAhab5 from '@/assets/products/predator-ahab/5.jpg'
import PredatorAhab6 from '@/assets/products/predator-ahab/6.jpg'
// //////////////////////////////

// Alita ////////////////////////
import Alita1 from '@/assets/products/Alita/1.png'
import Alita2 from '@/assets/products/Alita/2.png'
import Alita3 from '@/assets/products/Alita/3.png'
import Alita4 from '@/assets/products/Alita/4.png'
import Alita5 from '@/assets/products/Alita/5.png'
import Alita6 from '@/assets/products/Alita/6.png'
// //////////////////////////////

interface ProductProps {
  title: string
  description1: string
  description2?: string
  tags: string[]
  image: StaticImageData
  productUrl: string
  details: {
    image: StaticImageData
    info1: string
    info2: string
  }
  paginaProduto?: {
    section1: {
      text: string
      image: StaticImageData
    }
    section2?: {
      title: string
      text: string
      video: StaticImageData
    }
    section3: {
      image: StaticImageData
    }
    section4: {
      text: { title?: string; text: string }[]
      image: StaticImageData
    }
    section5: StaticImageData[]
  }
}

export const products: ProductProps[] = [
  {
    title: 'ALIEN XENOMORFO BIG CHAP',
    description1: 'MAFEX',
    description2: 'MEDICOM',
    tags: ['viloes', 'filmes-e-series', 'games'],
    image: AlienChap,
    productUrl: '/alien-chap',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'BATCAVERNA SÉRIE TV 1966',
    description1: '???',
    description2: '???',
    tags: ['herois', 'filmes-e-series'],
    image: Batcaverna,
    productUrl: '/batcave-desktop',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'BATMAN BUST - DETECTIVE COMICS',
    description1: 'PRIME 1 STUDIO',
    description2: 'PREMIUM MASTERLINE DC SUPERHERO SERIES',
    image: Batman,
    tags: ['herois', 'filmes-e-series'],
    productUrl: '/batman-busto',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'BATMAN DAMNED',
    description1: 'PRIME 1 STUDIO',
    description2: 'LEE BERMEJO',
    tags: ['herois', 'filmes-e-series'],
    image: BatmanDamned,
    productUrl: '/batman-damned',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'BATMAN HUSH BATCAVE',
    description1: 'PRIME 1 STUDIO',
    tags: ['herois', 'filmes-e-series'],
    image: BatmanHush,
    productUrl: '/batman-hush',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'BATMAN KNIGHTMARE',
    description1: 'IRON STUDIOS',
    tags: ['herois', 'filmes-e-series'],
    image: BatmanKnightmare,
    productUrl: '/batman-knightmare',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'BATMAN WHO LAUGHS',
    description1: 'QUEEN STUDIOS',
    description2: 'DC COMICS',
    tags: ['herois', 'filmes-e-series', 'viloes', 'games', 'fantasia'],
    image: BatmanWhoLaughs,
    productUrl: '/batman-who-laughs',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'CYBER CAT',
    description1:
      'YI WAN TANG STUDIO, ZENPUNK COLLECTIBLES E YI CI FANG STUDIO',
    tags: ['fantasia'],
    image: CyberCat,
    productUrl: '/cyber-cat',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'GREEN SCAR HULK',
    description1: '???',
    tags: ['herois', 'filmes-e-series'],
    image: GreenScarHulk,
    productUrl: '/green-scar-hulk',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'THE JOKER LIMITED EDITION BUST',
    description1: 'PRIME 1 STUDIO E BLITZWAY',
    description2: 'PREMIUM BUST SERIES',
    tags: ['viloes', 'filmes-e-series', 'games'],
    image: JokerBust,
    productUrl: '/the-joker-bust',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'BATMAN PENGUIN DAIMY',
    description1: 'XM STUDIO',
    description2: 'SÉRIE SAMURAI',
    tags: ['viloes', 'filmes-e-series', 'games'],
    image: BatmanPenguin,
    productUrl: '/batman-penguin-daimy',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'PREDATOR AHAB',
    description1: 'Prime 1 Studio',
    description2: 'Série Premium Masterline',
    image: Predator,
    tags: ['viloes', 'filmes-e-series', 'games'],
    productUrl: '/predator-ahab',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
    paginaProduto: {
      section1: {
        text: 'Inspirada na lendária história de Moby Dick, da fabricante Prime 1 Studios. Uma das estátuas mais impressionantes da série Premium Masterline: o Ahab Predator, direto dos quadrinhos da Dark Horse Comics!',
        image: PredatorAhab1,
      },
      section2: {
        title: 'UM PREDADOR LENDÁRIO',
        text: 'Apelidado de "Ahab" por Galgo, este Predator foi inspirado no Capitão Ahab da obra de Herman Mel-ville, mas, em vez de uma baleia branca, Ahab está obcecado pela caça de sua presa suprema: um En-genheiro. Esta peça captura Ahab em um momento de sua vida após atingir esse objetivo, enquanto ele derrota uma centopeia gigante em sua caçada mais recente, apenas para "manter-se ocupado".',
        video: PredatorAhab1,
      },
      section3: {
        image: PredatorAhab2,
      },
      section4: {
        text: [
          {
            title: 'DETALHES INCRÍVEIS',
            text: 'Com mais de 85 cm de altura, a estátua apresenta:Armadura de batalha marcada pelo tempo, com texturas realistas.Capacete metálico com cicatrizes e troféus esqueléticos.Retrato detalhado de seu rosto, revelando as marcas deixadas por anos de caçadas, incluindo a perda de seu olho direito e parte da mandíbula durante um confronto épico.',
          },
          {
            title: 'RECURSOS E MATERIAL DE ALTA QUALIDADE',
            text: 'A Prime 1 Studio emprega materiais premium para criar uma experiência imersiva e colecionável:Cinto e alças de couro sintético com fivelas de metal.Manto de tecido e rede real.Canhão de Plasma com LED funcional.Base com uma impressionante centopeia gigante, detalhada com sangue verde, pernas espinhosas e dentes afiados.',
          },
          {
            title: 'VERSÃO REGULAR INCLUI',
            text: 'Base temática do Predador com centopeia gigante.Canhão de Plasma com iluminação em LED.Dois retratos intercambiáveis (com capacete ou sem capacete, destacando suas cicatrizes).Um suporte para a cabeça extra.Mãos intercambiáveis:Mão esquerda: fechada ou segurando a lança.Mão direita: aberta ou fechada.Troféu especial: Rifle de Engenheiro, que pode ser exibido nas costas.',
          },
          {
            title: 'ESPECIFICAÇÕES DO PRODUTO',
            text: 'Dimensões: A: 85 cm x L: 57 cm x P: 76 cm.Peso Aproximado: 37 kg.Materiais: Polystone e outros materiais de alta qualidade.',
          },
        ],
        image: PredatorAhab3,
      },
      section5: [PredatorAhab4, PredatorAhab5, PredatorAhab6],
    },
  },
  {
    title: 'JUNGLE HUNTER PREDATOR',
    description1: 'Prime 1 Studio',
    image: JungleHunter,
    tags: ['viloes', 'filmes-e-series', 'games'],
    productUrl: '/jungle-hunter-predator',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'SHE-RA & SWIFT WIND DELUXE',
    description1: 'SIDESHOW E IRON STUDIOS',
    tags: ['herois', 'fantasia'],
    image: SheRa,
    productUrl: '/she-ra-swift-wind-deluxe',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'TERMINATOR 2 - T-800 ENDOSKELETON BATTLE DAMAGED',
    description1: 'PURE ARTS',
    description2: 'COLEÇÃO PREMIUM',
    tags: ['viloes', 'herois', 'filmes-e-series', 'games'],
    image: Terminator,
    productUrl: '/terminator-battle-damaged',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'THE JOKER STATUE',
    description1: 'PRIME 1 STUDIO',
    tags: ['viloes', 'filmes-e-series', 'games'],
    image: JokerStatue,
    productUrl: '/the-joker-statue',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'WONDER WOMAN REBIRTH SILVER ARMOR',
    description1: 'PRIME 1 STUDIO',
    description2: 'SÉRIE MUSEUM MASTERLINE',
    tags: ['herois', 'filmes-e-series', 'fantasia'],
    image: WonderWoman,
    productUrl: 'wonder-woman-rebirth',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'SUMMER DRUNKEN BEAUTY FLOWER PAVILION PAINTED VERSION STATUE',
    description1: 'PRIME 1 STUDIO',
    description2: 'SÉRIE MUSEUM MASTERLINE',
    tags: ['fantasia', 'arte-asiática'],
    image: SummerDrunkenBeauty,
    productUrl: '/summer-drunken-beauty-flower-pavilion',
    details: {
      image: predatorMockup,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'ALITA BERSERKER MOTORBALL TRYOUT',
    description1: '???',
    details: {
      image: Alita2,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
    tags: ['herois', 'filmes-e-series', 'games'],
    image: Alita1,
    productUrl: '/alita-berserker',
    paginaProduto: {
      section1: {
        text: 'Criado pelos visionários cineastas James Cameron e Robert Rodriguez, o filme é baseado no mangá dos anos 90 Gunnm e na animação original Battle Angel. A protagonista, Alita, é uma ciborgue que não possui memórias de seu passado. Adotada pelo cientista Dr. Dyson Ido, ela se torna uma máquina de combate letal, mestre na arte marcial mecânica conhecida como PanzerKurst. Apesar de sua força, Alita precisa descobrir seu passado misterioso e usar suas habilidades únicas para salvar a si mesma, sua família e o mundo.',
        image: Alita1,
      },
      section3: {
        image: Alita2,
      },
      section4: {
        image: Alita3,
        text: [
          {
            text: 'Além de sua impressionante presença visual, a estátua Alita Berserker Motorball Tryout é uma verdadeira obraprima de engenharia e design. Cada detalhe foi meticulosamente esculpido para capturar a essência do personagem e a intensidade da cena. A base temática inspirada no estádio de Motorball, com seu efeito de iluminação LED, não só realça a dramaticidade da peça, mas também cria uma atmosfera envolvente que transporta os fãs diretamente para o universo cyberpunk do filme. <br/>A escolha do material, Polystone, garante durabilidade e um acabamento de alta qualidade, enquanto a escala ¼ proporciona uma presença imponente que se destaca em qualquer coleção34. Com dimensões impressionantes de 64,4 cm de altura, 76,4 cm de largura e 87,2 cm de diâmetro, e um peso total de 47 kg, esta estátua é uma peça central que certamente atrairá a atenção de todos.<br/><br/>Seja para exibição em uma coleção particular ou como destaque em um evento, a estátua Alita Berserker Motorball Tryout é uma adição indispensável para qualquer fã de Alita: Anjo de Combate.',
          },
          {
            title: 'ESPECIFICAÇÕES DO PRODUTO',
            text: 'Escala: 1/4 <br/>Dimensões: Altura: 64,4 cm <br/>Largura: 76,4 cm<br/>Diâmetro: 87,2 cm<br/>Peso total: 47 kg',
          },
        ],
      },
      section5: [Alita4, Alita5, Alita6],
    },
  },
]
