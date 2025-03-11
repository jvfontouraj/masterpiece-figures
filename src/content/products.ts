import { StaticImageData } from 'next/image'
import AlienChap from '@/assets/products/ALIEN XENOMORFO BIG CHAP.png'
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
import SummerDrunkenBeauty from '@/assets/products/SUMMER DRUNKEN BEAUTY FLOWER PAVILION PAINTED VERSION STATUE.png'

// Predator Ahab ////////////////
import Predator from '@/assets/products/predator_ahab.png'
import PreadtorAmbientacao from '@/assets/products/ambientacoes/ambPredator Ahab.png'
import PredatorAhab1 from '@/assets/products/predator-ahab/1.png'
import PredatorAhab2 from '@/assets/products/predator-ahab/2.png'
import PredatorAhab3 from '@/assets/products/predator-ahab/3.png'
import PredatorAhab4 from '@/assets/products/predator-ahab/4.jpg'
import PredatorAhab5 from '@/assets/products/predator-ahab/5.jpg'
import PredatorAhab6 from '@/assets/products/predator-ahab/6.jpg'
import PredatorAhab7 from '@/assets/products/predator-ahab/7.jpg'
// //////////////////////////////

// Alita ////////////////////////
import Alita from '@/assets/products/Alita.png'
import AlitaAmbientacao from '@/assets/products/ambientacoes/ambAlita.png'
import Alita1 from '@/assets/products/Alita/1.png'
import Alita2 from '@/assets/products/Alita/2.png'
import Alita3 from '@/assets/products/Alita/3.png'
import Alita4 from '@/assets/products/Alita/4.png'
import Alita5 from '@/assets/products/Alita/5.png'
import Alita6 from '@/assets/products/Alita/6.png'
import Alita7 from '@/assets/products/Alita/7.png'
// //////////////////////////////

// Wonder Woman /////////////////
import WonderWoman from '@/assets/products/WONDER WOMAN REBIRTH  SILVER ARMOR.png'
import WonderWomanAmbientacao from '@/assets/products/ambientacoes/ambWonder Woman Rebirth.png'
import WonderWoman1 from '@/assets/products/WonderWoman/1.png'
import WonderWoman2 from '@/assets/products/WonderWoman/2.png'
import WonderWoman3 from '@/assets/products/WonderWoman/3.png'
import WonderWoman4 from '@/assets/products/WonderWoman/4.png'
import WonderWoman5 from '@/assets/products/WonderWoman/5.png'
import WonderWoman6 from '@/assets/products/WonderWoman/6.png'
import WonderWoman7 from '@/assets/products/WonderWoman/7.png'
// //////////////////////////////

// Batman Bust //////////////////
import BatmanBust from '@/assets/products/batman.png'
import BatmanBustAmbientacao from '@/assets/products/ambientacoes/ambBatman Bust.png'
import BatmanBust1 from '@/assets/products/BatmanBust/1.png'
import BatmanBust2 from '@/assets/products/BatmanBust/2.png'
import BatmanBust3 from '@/assets/products/BatmanBust/3.png'
import BatmanBust4 from '@/assets/products/BatmanBust/4.png'
import BatmanBust5 from '@/assets/products/BatmanBust/5.png'
import BatmanBust6 from '@/assets/products/BatmanBust/6.png'
import BatmanBust7 from '@/assets/products/BatmanBust/7.png'
/// ////////////////////////////

// Batcaverna //////////////////
import Batcaverna from '@/assets/products/BATCAVERNA SÉRIE TV 1966.png'
import BatcavernaAmbientacao from '@/assets/products/ambientacoes/ambBatcaverna.png'
import Batcaverna1 from '@/assets/products/Batcave desktop/1.png'
import Batcaverna2 from '@/assets/products/Batcave desktop/2.png'
import Batcaverna3 from '@/assets/products/Batcave desktop/3.png'
import Batcaverna4 from '@/assets/products/Batcave desktop/4.png'
import Batcaverna5 from '@/assets/products/Batcave desktop/5.png'
import Batcaverna6 from '@/assets/products/Batcave desktop/6.png'
import Batcaverna7 from '@/assets/products/Batcave desktop/7.png'

/// ////////////////////////////

// Summer Drunken Beauty ///////
import SummerDrunkenAmbientacao from '@/assets/products/ambientacoes/ambSummer Drunken.png'
/// ////////////////////////////

// Batman Hush //////////////////
import BatmanHushAmbientacao from '@/assets/products/ambientacoes/ambBatman Hush.png'
/// /////////////////////////////

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
      title?: string
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
      image: PreadtorAmbientacao,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
  {
    title: 'ALITA BERSERKER MOTORBALL TRYOUT',
    description1: '???',
    details: {
      image: AlitaAmbientacao,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
    tags: ['herois', 'filmes-e-series', 'games'],
    image: Alita,
    productUrl: '/alita-berserker',
    paginaProduto: {
      section1: {
        text: 'Criado pelos visionários cineastas James Cameron e Robert Rodriguez, o filme é baseado no mangá dos anos 90 Gunnm e na animação original Battle Angel. A protagonista, Alita, é uma ciborgue que não possui memórias de seu passado. Adotada pelo cientista Dr. Dyson Ido, ela se torna uma máquina de combate letal, mestre na arte marcial mecânica conhecida como PanzerKurst. Apesar de sua força, Alita precisa descobrir seu passado misterioso e usar suas habilidades únicas para salvar a si mesma, sua família e o mundo.',
        image: Alita1,
      },
      section2: {
        text: 'Além de sua impressionante presença visual, a estátua Alita Berserker Motorball Tryout é uma verdadeira obra-prima de engenharia e design. Cada detalhe foi meticulosamente esculpido para capturar a essência do personagem e a intensidade da cena. A base temática inspirada no estádio de Motorball, com seu efeito de iluminação LED, não só realça a dramaticidade da peça, mas também cria uma atmosfera envolvente que transporta os fãs diretamente para o universo cyberpunk do filme.',
        video: Alita2,
      },
      section3: {
        image: Alita3,
      },
      section4: {
        image: Alita4,
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
      section5: [Alita5, Alita6, Alita7],
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
      image: BatcavernaAmbientacao,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
    paginaProduto: {
      section1: {
        image: Batcaverna1,
        text: '"PARA A BATCAVERNA!" Três palavras que nos levam a um dos cenários mais memoráveis da cultura pop: o santuário secreto do Batman, sua base de operações, o centro de suas atividades – uma caverna subterrânea enigmática, misturando mistério e empolgação.',
      },
      section2: {
        video: Batcaverna2,
        title: 'RELÍQUIA VINTAGE',
        text: 'A Batcaverna teve várias versões ao longo dos anos, tanto nos quadrinhos quanto nas telas, mas uma das mais icônicas é a da clássica série de TV do Batman de 1966. Este modelo replica a essência da Batcaverna da série, incluindo elementos personalizáveis que permitem ajustar a aparência da caverna em torno de peças fixas, como o famoso ‘núcleo atômico’.',
      },
      section3: {
        image: Batcaverna3,
      },
      section4: {
        image: Batcaverna4,
        text: [
          {
            text: 'Cada peça deste modelo contém mais de uma dúzia de luzes de LED em várias cores e animações, que recriam a energia visual única dos anos 60, incluindo: </br> • Luzes ocultas no chão, que emulam os refletores coloridos usados no set.</br> • Efeito de mudança de cor pulsante no núcleo atômico.</br> • Luzes piscantes em monitores e telas.</br> Esta não é uma peça estática – ela conta com diversos componentes móveis, incluindo:</br> • Uma plataforma giratória que pode ser rotacionada manualmente.</br> • Móveis selecionados que podem ser movidos para personalizar o cenário.</br> • Uma porta de rocha falsa na entrada do túnel que pode ser removida para permitir a entrada do Batmóvel (modelo do Batmóvel não incluído).',
          },
          {
            title: 'ESPECIFICAÇÕES DO PRODUTO',
            text: 'Altura: 45 cm </br>Largura: 35 cm </br>Profundidade: 22 cm </br>Peso: 9 kg',
          },
        ],
      },
      section5: [Batcaverna5, Batcaverna6, Batcaverna7],
    },
  },
  {
    title: 'BATMAN BUST - DETECTIVE COMICS',
    description1: 'PRIME 1 STUDIO',
    description2: 'PREMIUM MASTERLINE DC SUPERHERO SERIES',
    image: BatmanBust,
    tags: ['herois', 'filmes-e-series'],
    productUrl: '/batman-busto',
    details: {
      image: BatmanBustAmbientacao,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
    paginaProduto: {
      section1: {
        text: '"Criminals are a superstitious, cowardly lot. So my disguise must be able to strike terror into their hearts. I must be a creature of the night, black, terrible...I shall become...a bat!" – Bruce Wayne, Detective Comics #1',
        image: BatmanBust1,
      },
      section2: {
        text: 'Da Prime 1 Studio, em colaboração com o renomado artista de quadrinhos Jason Fabok, da linha Premium Masterline DC Superhero Series: o busto do Batman inspirado no marco histórico da edição #1,000 de Detective Comics!',
        video: BatmanBust2,
      },
      section3: {
        image: BatmanBust3,
      },
      section4: {
        text: [
          {
            title: 'DETALHES DO DESIGN',
            text: 'Este busto incrível mede aproximadamente 10 polegadas (25,8 cm) de altura e apresenta o clássico logotipo amarelo com oval no peito, além de um retrato do Batman observando o horizonte sombrio de Gotham City. A peça captura perfeitamente a essência do Cavaleiro das Trevas conforme imaginado por Jason Fabok.',
          },
          {
            title: 'ESPECIFICAÇÕES DO PRODUTO',
            text: 'Altura: 25,8 cm</br>Largura: 16,1 cm</br>Profundidade: 12,4 cm</br>Peso Aproximado: 1,96 kg</br>Material: Polystone e outros materiais</br>Dimensões da Embalagem:</br>Peso da Caixa: 2,72 kg</br>Código do Produto: PBDC-07</br>Escala: 1/3</br>Licenciado por DC Comics e Warner Bros. Entertainment Inc.',
          },
        ],
        image: BatmanBust4,
      },
      section5: [BatmanBust5, BatmanBust6, BatmanBust7],
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
      image: PreadtorAmbientacao,
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
      image: BatmanHushAmbientacao,
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
      image: PreadtorAmbientacao,
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
      image: PreadtorAmbientacao,
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
      image: PreadtorAmbientacao,
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
      image: PreadtorAmbientacao,
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
      image: PreadtorAmbientacao,
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
      image: PreadtorAmbientacao,
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
      image: PreadtorAmbientacao,
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
        video: PredatorAhab2,
      },
      section3: {
        image: PredatorAhab3,
      },
      section4: {
        text: [
          {
            title: 'DETALHES INCRÍVEIS',
            text: 'Com mais de 85 cm de altura, a estátua apresenta: </br> Armadura de batalha marcada pelo tempo, com texturas realistas.</br>Capacete metálico com cicatrizes e troféus esqueléticos.</br>Retrato detalhado de seu rosto, revelando as marcas deixadas por anos de caçadas, incluindo a perda de seu olho direito e parte da mandíbula durante um confronto épico.',
          },
          {
            title: 'RECURSOS E MATERIAL DE ALTA QUALIDADE',
            text: 'A Prime 1 Studio emprega materiais premium para criar uma experiência imersiva e colecionável:</br>Cinto e alças de couro sintético com fivelas de metal.</br>Manto de tecido e rede real.Canhão de Plasma com LED funcional.</br>Base com uma impressionante centopeia gigante, detalhada com sangue verde, pernas espinhosas e dentes afiados.',
          },
          {
            title: 'VERSÃO REGULAR INCLUI',
            text: 'Base temática do Predador com centopeia gigante.</br>Canhão de Plasma com iluminação em LED.</br>Dois retratos intercambiáveis (com capacete ou sem capacete, destacando suas cicatrizes).</br>Um suporte para a cabeça extra.</br>Mãos intercambiáveis:</br>Mão esquerda: fechada ou segurando a lança.</br>Mão direita: aberta ou fechada.</br>Troféu especial: Rifle de Engenheiro, que pode ser exibido nas costas.',
          },
          {
            title: 'ESPECIFICAÇÕES DO PRODUTO',
            text: 'Dimensões: A: 85 cm x L: 57 cm x P: 76 cm.</br>Peso Aproximado: 37 kg.</br>Materiais: Polystone e outros materiais de alta qualidade.',
          },
        ],
        image: PredatorAhab4,
      },
      section5: [PredatorAhab5, PredatorAhab6, PredatorAhab7],
    },
  },
  {
    title: 'JUNGLE HUNTER PREDATOR',
    description1: 'Prime 1 Studio',
    image: JungleHunter,
    tags: ['viloes', 'filmes-e-series', 'games'],
    productUrl: '/jungle-hunter-predator',
    details: {
      image: PreadtorAmbientacao,
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
      image: PreadtorAmbientacao,
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
      image: PreadtorAmbientacao,
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
      image: PreadtorAmbientacao,
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
    productUrl: '/wonder-woman-rebirth',
    details: {
      image: WonderWomanAmbientacao,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
    paginaProduto: {
      section1: {
        image: WonderWoman1,
        text: 'Diana, princesa das Amazonas e filha da Rainha Hipólita, é a maior guerreira de Themyscira. Nascida do barro e abençoada pelos Deuses, a Mulher-Maravilha deixou sua terra natal para lutar contra o mal e ensinar ao mundo que a esperança e o amor são os verdadeiros caminhos para a salvação.',
      },
      section2: {
        title: 'EDIÇÃO ESPECIAL',
        text: 'Esta impressionante peça da Prime 1 Studio tem 74 cm de altura e exibe Diana em sua armadura icônica: um peitoral metálico vermelho e uma saia de gladiadora azul em couro. Os detalhes pratea-dos brilhantes realçam sua tiara, braçadeiras, botas e ornamentos do traje, dando um toque especial à sua vestimenta heroica.',
        video: WonderWoman2,
      },
      section3: {
        image: WonderWoman3,
      },
      section4: {
        image: WonderWoman4,
        text: [
          {
            title: 'DETALHES DO DESIGN',
            text: 'A pose de Diana transmite força e beleza, refletindo o espírito da maior guerreira das Amazonas. Ela está preparada para a batalha, empunhando a Espada de Atena, seu escudo amazônico e o lendário Laço da Verdade. A capa heroica da estátua é removível e articulada, com elegantes detalhes prateados. A base, inspirada em fumaça e escombros, completa a cena, dando a sensação de que Diana está à beira da batalha.',
          },
          {
            title: 'DETALHES',
            text: 'Base temática com detalhes de fumaça e escombros.</br>Uma (1) capa removível e posável.</br>Edição limitada com unidades exclusivas!',
          },
          {
            title: 'ESPECIFICAÇÕES DO PRODUTO',
            text: 'Escala 1/3</br>Altura: 74.7cm</br>Largura: 48.5cm</br>Profundidade: 47.1cm</br>Peso do Produto Aproximado: 14.98 kg ',
          },
        ],
      },
      section5: [WonderWoman5, WonderWoman6, WonderWoman7],
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
      image: SummerDrunkenAmbientacao,
      info1: 'Escala 1/4',
      info2: 'A: 85cm x L: 57cm x P: 76cm',
    },
  },
]
