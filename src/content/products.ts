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
        image: predatorMockup,
      },
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
]
