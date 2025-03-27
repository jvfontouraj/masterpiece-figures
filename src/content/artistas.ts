import { StaticImageData } from 'next/image'
import ArioImage from '@/assets/artistas/Ario-Anindito.png'
import JasonImage from '@/assets/artistas/Jason-Fabok.png'
import JimImage from '@/assets/artistas/Jim-Lee.png'
import JorgeImage from '@/assets/artistas/Jorge-Jimenez.png'
import LeeImage from '@/assets/artistas/Lee-Bermejo.png'
// import OswaldImage from '@/assets/artistas/Oswald-Cobblepot.png'
import TiagoImage from '@/assets/artistas/Tiago-Rios.png'
import YuanImage from '@/assets/artistas/Yuan-Xing-Liang.png'

interface ArtistasProps {
  name: string
  image?: StaticImageData
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
    image: JimImage,
    description: [
      {
        text: 'Amplamente reconhecido por seu estilo artístico icônico, que combina precisão meticulosa com uma expressão vibrante e dinâmica. Nascido na Coreia do Sul e radicado nos Estados Unidos, Lee começou sua carreira como desenhista de quadrinhos, mas rapidamente se destacou no campo da escultura.',
      },
      {
        text: 'Desde jovem, Lee mostrou um talento inato para as artes visuais, o que o levou a cursar Belas Artes na Universidade de Princeton. Após concluir seus estudos, ele se aventurou na indústria dos quadrinhos, onde seu trabalho como artista para a Marvel Comics e DC Comics recebeu aclamação mundial. Lee é especialmente conhecido por suas contribuições para títulos como X-Men, Batman e Superman.',
      },
      {
        text: 'No entanto, seu amor pela escultura sempre esteve presente. Inspirado pela riqueza de detalhes e a tridimensionalidade das figuras de quadrinhos, Lee começou a criar esculturas que refletiam a mesma energia e dinamismo de suas ilustrações. Suas peças, muitas vezes em bronze e resina, capturam personagens em poses dramáticas e cheias de movimento, tornando-se itens cobiçados por colecionadores e fãs de arte ao redor do mundo.',
      },
      {
        text: 'Uma das marcas mais renomadas a exibir seu trabalho é a Prime 1 Studios, conhecida por suas esculturas incrivelmente detalhadas e realistas dos personagens icônicos da cultura pop. Abaixo, algumas das esculturas de Jim Lee pela Prime 1 Studios:',
      },
      {
        text: '- Batman: Uma peça imponente que captura toda a intensidade e a mística do Cavaleiro das Trevas. </br> - Superman: Uma figura que transmite a força e a nobreza do Homem de Aço. </br> - Wonder Woman: Dinâmica e poderosa, esta escultura celebra a força e a graça da guerreira amazona. </br> - Joker: Uma representação assustadora e magistralmente detalhada do Príncipe Palhaço do Crime.',
      },
      {
        text: 'Jim Lee continua a inovar e expandir os limites de sua arte, tanto no papel quanto na escultura, solidificando seu legado como um dos artistas mais influentes de sua geração.',
      },
    ],
  },
  {
    name: 'JORGE JIMENEZ',
    image: JorgeImage,
    description: [
      {
        text: 'Designer e escultor contemporâneo cujo trabalho tem cativado colecionadores de todo o mundo. Conhecido pela sua meticulosa atenção aos detalhes e pela capacidade única de dar vida às suas criações, Jimenez tem colaborado com diversos estúdios renomados, incluindo o aclamado Prime 1 Studio.',
      },
      {
        text: 'Suas obras são caracterizadas por uma combinação de precisão técnica e profundo entendimento artístico, resultando em esculturas que parecem quase vivas. Jimenez não apenas esculpe formas, mas infunde em cada peça uma narrativa e uma emoção palpável. Sua habilidade em capturar a essência de personagens icônicos e traduzi-la em formas tridimensionais é surpreendente.',
      },
      {
        text: 'Um exemplo notável é a escultura de Batman, onde Jimenez conseguiu capturar a intensidade do Cavaleiro das Trevas através de uma combinação de postura dinâmica e detalhes meticulosos no traje e na expressão facial. Outra peça icônica é a do Coringa, onde a exuberância e insanidade do personagem são evidenciadas por meio de um trabalho detalhado e expressivo que destaca cada linha do rosto e do traje.',
      },
      {
        text: 'Além das colaborações com estúdios renomados, Jimenez também desenvolve projetos autorais que exploram temas variados, desde figuras mitológicas até abstrações contemporâneas. Estas obras demonstram a sua versatilidade e a capacidade de trazer à vida qualquer conceito com maestria. Suas peças autorais são muito valorizadas no mercado de arte, sendo consideradas verdadeiras joias pela sua originalidade e execução impecável.',
      },
      {
        text: 'Jorge Jimenez continua a ser uma força inovadora no mundo da arte e do design, sempre empurrando os limites do possível e criando obras que inspiram e encantam. Seu trabalho não só capta a imaginação, mas também eleva o padrão da escultura contemporânea, tornando-se referência de excelência e exclusividade no campo das artes.',
      },
    ],
  },
  {
    name: 'LEE BERMEJO',
    image: LeeImage,
    description: [
      {
        text: 'Renomado escultor contemporâneo, cujas obras têm cativado tanto críticos quanto colecionadores ao redor do mundo. Nascido e criado em Nova Iorque, Bermejo desenvolveu desde cedo uma paixão pela arte, especialmente pela escultura. Sua jornada artística começou na adolescência, quando ele começou a experimentar diferentes materiais e técnicas, sempre buscando novas formas de expressão.',
      },
      {
        text: 'Bermejo estudou nas mais prestigiadas instituições de arte dos Estados Unidos, onde refinou suas habilidades e desenvolveu um estilo único. Ele é conhecido pela sua capacidade de transformar materiais brutos em obras de arte extraordinárias, combinando uma precisão técnica impecável com uma sensibilidade artística profunda. Cada peça criada por Bermejo é o resultado de um processo meticuloso e detalhado, que pode levar meses, ou até anos, para ser concluído.',
      },
      {
        text: 'A exclusividade é uma marca registrada do trabalho de Lee Bermejo. Ele acredita que cada escultura deve ser uma representação única da visão e da emoção do artista. Por isso, suas obras são sempre limitadas em número e nunca repetidas. Esta abordagem não só aumenta o valor das peças, mas também garante que cada obra de Bermejo seja um autêntico tesouro para seus proprietários.',
      },
      {
        text: 'Além de seu talento inato e habilidades técnicas, Lee Bermejo também é conhecido por sua capacidade de contar histórias através de suas esculturas. Cada obra captura um momento, uma emoção ou uma narrativa, convidando o espectador a se envolver e a refletir. Esta habilidade de combinar arte visual com narrativa é um dos aspectos que distingue Bermejo de muitos de seus contemporâneos.',
      },
      {
        text: 'Em suma, Lee Bermejo é um mestre na arte da escultura, cuja atenção ao detalhe e compromisso com a exclusividade tornam suas obras verdadeiramente excepcionais. Cada peça é um testemunho de sua habilidade artística, técnica impecável e paixão pela criação. Para qualquer aficionado da escultura, uma obra de Lee Bermejo é uma adição inestimável a qualquer coleção.',
      },
    ],
  },
  {
    name: 'OSWALD COBBLEPOT',
    description: [
      {
        text: 'Nascido em uma família abastada, conhecida por sua influência na alta sociedade. Desde cedo, ele demonstrou um interesse profundo pelas artes visuais, um fascínio que seria tanto sua salvação quanto sua perdição. Estudou nas melhores escolas de arte e foi treinado por alguns dos mestres mais prestigiados na Europa, onde absorveu técnicas clássicas e contemporâneas que enriqueceriam sua futura obra.',
      },
      {
        text: 'A carreira artística de Cobblepot começou de forma pouco convencional. Sua primeira exposição não foi em uma galeria chique, mas sim nas ruas de Gotham City, onde ele montou uma série de instalações de arte pública que chocaram e encantaram o público. Suas primeiras obras eram uma mistura de escultura e performance, muitas vezes utilizando materiais reciclados e objetos encontrados. Esta abordagem lhe rendeu uma fama imediata e controversa, colocando-o no centro das atenções do mundo artístico.',
      },
      {
        text: 'Com o passar dos anos, Cobblepot solidificou sua reputação como um inovador. Ele foi convidado para participar de várias bienais e suas obras começaram a ser compradas por colecionadores importantes. Sua peça "A Majestade dos Refugos", uma escultura em grande escala feita inteiramente de peças de metal descartadas, foi aclamada pela crítica e considerada um comentário mordaz sobre a sociedade de consumo.',
      },
      {
        text: 'O trabalho de Cobblepot é frequentemente caracterizado por um tema sombrio e uma estética que flerta com o grotesco. Influenciado pela arquitetura gótica e pelo expressionismo alemão, suas esculturas costumam explorar a dualidade da beleza e da feiura, do luxo e do lixo. Ele tem um talento particular para transformar o mundano em mágico, criando obras que são ao mesmo tempo inquietantes e hipnotizantes.',
      },
      {
        text: 'Oswald Cobblepot continua a ser uma figura enigmática e influente no cenário artístico contemporâneo. Seu trabalho, marcado pela inovação e pela provocação, garante que ele será lembrado como um dos grandes artistas de seu tempo. Para qualquer catálogo de arte que se preze, Cobblepot é mais do que um nome; ele é um símbolo do poder transformador da arte.',
      },
      {
        text: 'Uma das colaborações mais recentes de Cobblepot é a peça "Batman HQS+ by Tsume," uma escultura que combina sua visão única com o icônico personagem da DC Comics. Esta obra destaca-se pelo seu nível de detalhe impressionante e pela incorporação de elementos góticos, refletindo a influência do expressionismo alemão e da arquitetura gótica em seu trabalho. A peça não só captura a essência sombria de Gotham City, mas também apresenta uma complexidade visual que é marca registrada de Cobblepot. "Batman HQS+ by Tsume" tornou-se rapidamente uma peça de destaque para os colecionadores de arte e fãs do Cavaleiro das Trevas, solidificando ainda mais a reputação de Cobblepot como um inovador no campo da escultura contemporânea.',
      },
    ],
  },
  {
    name: 'TIAGO RIOS',
    image: TiagoImage,
    description: [
      {
        text: 'Escultor contemporâneo cujo trabalho tem encantado audiências ao redor do mundo. Nascido em Lisboa, Portugal, em 1980, Rios desenvolveu um interesse precoce pela arte e, em particular, pela escultura. Após completar seus estudos na Escola de Belas Artes, ele mergulhou de cabeça no mundo da criação artística, dedicando-se à experimentação de técnicas e materiais.',
      },
      {
        text: 'Tiago Rios cresceu cercado pela riqueza cultural de Lisboa, o que influenciou profundamente seu desenvolvimento artístico. Desde cedo, ele demonstrou uma afinidade especial com a escultura, fascinando-se pela capacidade de transformar materiais brutos em formas expressivas e significativas. Após concluir a sua formação acadêmica, Rios passou a participar de várias residências artísticas na Europa e na América do Norte, onde teve a oportunidade de expandir seus horizontes e aperfeiçoar suas técnicas.',
      },
      {
        text: 'Ao longo dos anos, Tiago Rios conquistou reconhecimento internacional por suas obras inovadoras que combinam materiais tradicionais, como bronze e mármore, com elementos contemporâneos, como resina e vidro reciclado. Sua abordagem única à escultura lhe rendeu convites para exposições em prestigiadas galerias e museus ao redor do mundo, incluindo o Museu de Arte Contemporânea em Nova Iorque e a Galeria Tate em Londres.',
      },
      {
        text: 'As esculturas de Tiago Rios são conhecidas por sua complexidade e detalhamento. Cada peça é uma manifestação tangível de sua visão artística, refletindo temas como a natureza, a condição humana e a interação entre o homem e o meio ambiente. Utilizando uma variedade de materiais, Rios cria obras que são tanto visualmente impressionantes quanto profundamente significativas.',
      },
      {
        text: 'O trabalho de Tiago Rios não só enriqueceu o panorama da escultura contemporânea, mas também inspirou uma nova geração de artistas a explorar a interseção entre tradição e inovação. Sua dedicação à arte e seu compromisso com a excelência garantem que seu legado perdurará por muitos anos, continuando a inspirar e a encantar audiências ao redor do mundo.',
      },
      {
        text: 'Seja através de suas esculturas exclusivas e raras ou de suas grandes instalações, Tiago Rios deixou uma marca indelével no mundo da arte. Sua obra, marcada por um profundo entendimento da forma e do material, continua a ser uma fonte de admiração e inspiração, destacando-o como um dos escultores mais importantes de sua geração.',
      },
    ],
  },
  {
    name: 'YUAN XING LIANG',
    image: YuanImage,
    description: [
      {
        text: 'O renomado escultor chinês Yuanxing Liang está transformando a forma como o mundo percebe a arte da escultura. Combinando retratos femininos requintados com paisagens exuberantes e elementos multifuncionais, suas obras são um testemunho de sua maestria artística e visão criativa.',
      },
      {
        text: 'Embora Yuanxing tenha escolhido escultura como sua especialidade no Instituto de Belas Artes de Sichuan, ele inicialmente trabalhou como designer de arte conceitual na NetEase Games, criando personagens 3D para videogames. Durante seus sete anos na empresa, ele dedicava seu tempo livre à criação de pequenas esculturas temáticas de fantasia, um hobby que mais tarde evoluiu para sua verdadeira vocação.',
      },
      {
        text: 'A virada aconteceu quando Yuanxing venceu competições importantes e a demanda por esculturas colecionáveis cresceu na China. Motivado por seu amor pela arte e modelagem com argila, que começou na infância, ele decidiu buscar inspiração na cultura tradicional chinesa, diferenciando-se de artistas que se concentravam em personagens de culturas japonesa, americana e europeia. Esse foco levou à criação de obras como Tongtian River e Spring Awn: Peach Island.',
      },
      {
        text: 'Para Yuanxing, o processo criativo é tanto sobre planejamento quanto sobre adaptação. "Cerca de 70% das ideias são planejadas previamente, mas os outros 30% surgem durante o processo de criação," explicou em entrevista. No entanto, ele reconhece os desafios de manter a sensibilidade estética ao trabalhar por longos períodos em uma peça. "Se você fixa o olhar em um objeto por muito tempo, perde a percepção do que é belo. Nessas horas, faço uma pausa antes de retomar o projeto."',
      },
      {
        text: 'Apesar de ainda haver poucos escultores profissionais de figuras na China, Yuanxing acredita no poder da colaboração. Eventos como exposições de anime e o Wonder Festival Shanghai oferecem plataformas para artistas se conectarem e compartilharem ideias. Yuanxing Liang continua a redefinir os limites da escultura com obras que capturam tanto a essência da cultura tradicional chinesa quanto o fascínio da fantasia, estabelecendo-se como um verdadeiro mestre da arte contemporânea.',
      },
    ],
  },
]
