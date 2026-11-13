const categorias=['panetones', 'biscoitos','bolos','doces' ,'presentes'];



const produtos = [
    // --- PANETONES (1 a 10) ---
    {
        id: 1,
        nome: "Panetone Tradicional de Frutas",
        categoria: "panetones",
        preco: 34.90,
        descricao: "Massa de fermentação natural com frutas cristalizadas e uvas-passas.",
        imagem: "img/food-photographer-jennifer-pallian-AQ_og51xGlE-unsplash (1).jpg",
        destaque: true
    },
    {
        id: 2,
        nome: "Chocotone Trufado Belga",
        categoria: "panetones",
        preco: 49.90,
        descricao: "Recheado com generosa camada de ganache de chocolate belga 54%.",
        imagem: "img/virginia-marcuzzo-9rkxuiVlnIQ-unsplash.jpg",
        destaque: true
    },
    {
        id: 3,
        nome: "Panetone de Pistache Gourmet",
        categoria: "panetones",
        preco: 59.90,
        descricao: "Recheio cremoso de pistache italiano com cobertura de chocoset.",
        imagem: "img/thandy-yung-Kbr39lA6PBo-unsplash.jpg.jpeg",
        destaque: false
    },
    {
        id: 4,
        nome: "Panetone Doce de Leite com Nozes",
        categoria: "panetones",
        preco: 45.90,
        descricao: "Doce de leite artesanal com pedaços crocantes de nozes nobre.",
        imagem: "img/kate-laine-lG_Va-8yaFY-unsplash.jpg",
        destaque: false
    },
    {
        id: 5,
        nome: "Mini Panetone Gotas de Chocolate",
        categoria: "panetones",
        preco: 18.90,
        descricao: "Porção individual perfeita para presente com gotas de chocolate ao leite.",
        imagem: "img/blackieshoot-DiT-Aw7qwyo-unsplash (1).jpg",
        destaque: false
    },
    {
        id: 6,
        nome: "Chocotone de Brigadeiro Gourmet",
        categoria: "panetones",
        preco: 52.90,
        descricao: "Recheado com brigadeiro artesanal 100% cacau e granulado belga.",
        imagem: "img/karolina-kolodziejczak-KT4oqyfgHq0-unsplash.jpg",
        destaque: true
    },
    {
        id: 7,
        nome: "Panetone Ninho com Nutella",
        categoria: "panetones",
        preco: 54.90,
        descricao: "Combinação irresistível de creme de Leite Ninho com creme de avelã.",
        imagem: "img/kawe-rodrigues-V-YyXJLyx7U-unsplash.jpg",
        destaque: false
    },
    {
        id: 8,
        nome: "Chocotone Branco com Frutas Vermelhas",
        categoria: "panetones",
        preco: 48.90,
        descricao: "Chocolate branco nobre combinado com geleia artesanal de frutas vermelhas.",
        imagem: "img/dmitry-stepanov-h_UozO1kYLM-unsplash (1).jpg",
        destaque: false
    },
    {
        id: 9,
        nome: "Panetone Recheado Red Velvet",
        categoria: "panetones",
        preco: 56.90,
        descricao: "Massa vermelha aveludada recheada com cream cheese doce e baunilha.",
        imagem: "img/lee-milo-bLuZPpCqVdg-unsplash.jpg",
        destaque: false
    },
    {
        id: 10,
        nome: "Panetone Limão Siciliano e Baunilha",
        categoria: "panetones",
        preco: 42.90,
        descricao: "Massa leve aromatizada com raspas de limão siciliano e fava de baunilha.",
        imagem: "img/massimo-adami-SEC3TAkF9UM-unsplash.jpg",
        destaque: false
    },

    // --- BISCOITOS (11 a 20) ---
    {
        id: 11,
        nome: "Biscoito Gingerbread Tradicional",
        categoria: "biscoitos",
        preco: 22.90,
        descricao: "Biscoitos de gengibre com especiarias e glacê real decorado à mão.",
        imagem: "img/casey-chae-3DrCZblTGoQ-unsplash (1).jpg",
        destaque: true
    },
    {
        id: 12,
        nome: "Biscoitos Amanteigados Decorados",
        categoria: "biscoitos",
        preco: 26.90,
        descricao: "Massa amanteigada tradicional em formatos festivos de Natal.",
        imagem: "img/adam-bartoszewicz-IKAv1jMk8EA-unsplash.jpg",
        destaque: false
    },
    {
        id: 13,
        nome: "Biscoito de Chocolate com Canela",
        categoria: "biscoitos",
        preco: 19.90,
        descricao: "Crocantes por fora e macios por dentro, com um toque suave de canela.",
        imagem: "img/food-photographer-jennifer-pallian-OfdDiqx8Cz8-unsplash.jpg",
        destaque: false
    },
    {
        id: 14,
        nome: "Caixa Biscoitos Estrela de Natal",
        categoria: "biscoitos",
        preco: 28.90,
        descricao: "Caixa presenteável com biscoitos em formato de estrela com recheio de geleia.",
        imagem: "img/kalindu-waranga-AvVdxfeH0fI-unsplash.jpg",
        destaque: false
    },
    {
        id: 15,
        nome: "Biscoitos Árvore de Natal Glacados",
        categoria: "biscoitos",
        preco: 24.90,
        descricao: "Biscoitos em formato de pinheiro cobertos com glacê verde e miçangas.",
        imagem: "img/isabela-kronemberger-fXrpmxzyi2g-unsplash (1).jpg",
        destaque: false
    },
    {
        id: 16,
        nome: "Speculaas Biscoito de Especiarias",
        categoria: "biscoitos",
        preco: 21.90,
        descricao: "Receita belga clássica com cravo, canela, noz-moscada e cardamomo.",
        imagem: "img/roma-durkin-9e5dfq_v6Sw-unsplash.jpg",
        destaque: false
    },
    {
        id: 17,
        nome: "Biscoito Baunilha com Geleia de Morango",
        categoria: "biscoitos",
        preco: 23.90,
        descricao: "Biscoitos recheados no estilo Linzer com geleia natural de morango.",
        imagem: "img/yasaman-abedini-57p6NFxL_7c-unsplash.jpg.jpeg",
        destaque: false
    },
    {
        id: 18,
        nome: "Biscoito de Amêndoas e Mel",
        categoria: "biscoitos",
        preco: 27.90,
        descricao: "Laminados finos de amêndoas torradas envoltos em mel silvestre.",
        imagem: "img/quin-engle-QRpNjzEX1eU-unsplash.jpg",
        destaque: false
    },
    {
        id: 19,
        nome: "Lata Festiva de Biscoitos Sortidos",
        categoria: "biscoitos",
        preco: 39.90,
        descricao: "Lata metálica natalícia recheada com selecção de 4 tipos de biscoitos.",
        imagem: "img/derrick-mckinnon-Z6iliEQ9uYI-unsplash.jpg",
        destaque: true
    },
    {
        id: 20,
        nome: "Biscoitos Gingerbread Homem de Neve",
        categoria: "biscoitos",
        preco: 25.90,
        descricao: "Divertidos biscoitos decorados em formato de boneco de neve.",
        imagem: "img/michele-purin-19F94SkMgU4-unsplash.jpg",
        destaque: false
    },

    // --- BOLOS (21 a 30) ---
    {
        id: 21,
        nome: "Bolo Red Velvet Natalino",
        categoria: "bolos",
        preco: 89.90,
        descricao: "Massa aveludada vermelha com recheio e cobertura de cream cheese frosting.",
        imagem: "img/amirali-mirhashemian-EfkMkUXs0fU-unsplash.jpg",
        destaque: true
    },
    {
        id: 22,
        nome: "Bolo de Nozes com Baba de Moça",
        categoria: "bolos",
        preco: 95.90,
        descricao: "Bolo tradicional de nozes com recheio cremoso de baba de moça.",
        imagem: "img/brett-jordan-3sof0Vz5nkw-unsplash.jpg",
        destaque: false
    },
    {
        id: 23,
        nome: "Bolo Floresta Negra Festivo",
        categoria: "bolos",
        preco: 85.90,
        descricao: "Pão de ló de chocolate, chantilly leve, cerejas em calda e raspas de chocolate.",
        imagem: "img/braggsdiner-F8RKds2YdqA-unsplash.jpg",
        destaque: false
    },
    {
        id: 24,
        nome: "Bolo Vulcão Ninho com Nutella",
        categoria: "bolos",
        preco: 79.90,
        descricao: "Bolo fofinho com centro abundante de calda de Ninho e Nutella.",
        imagem: "img/tharun-thejas-KbNNCWVjVyA-unsplash.jpg.jpeg",
        destaque: false
    },
    {
        id: 25,
        nome: "Bolo de Frutas Tradicional Inglês",
        categoria: "bolos",
        preco: 69.90,
        descricao: "Massa densa rica em frutas secas, nozes e especiarias natalícias.",
        imagem: "img/jacob-thomas-6jHpcBPw7i8-unsplash.jpg",
        destaque: false
    },
    {
        id: 26,
        nome: "Bolo de Brigadeiro com Morangos",
        categoria: "bolos",
        preco: 82.90,
        descricao: "Massa de chocolate molhadinha recheada com brigadeiro gourmet e morangos frescos.",
        imagem: "img/ulysse-pointcheval-1WmlAiYgnoI-unsplash.jpg.jpeg",
        destaque: false
    },
    {
        id: 27,
        nome: "Bolo Especiarias com Maçã e Canela",
        categoria: "bolos",
        preco: 64.90,
        descricao: "Aroma irresistível de maçãs frescas assadas com canela e noz-moscada.",
        imagem: "img/lindsay-cotter-9J7sHieVFi0-unsplash.jpg",
        destaque: false
    },
    {
        id: 28,
        nome: "Bolo Mármore com Cobertura de Chocolate",
        categoria: "bolos",
        preco: 59.90,
        descricao: "Mesclado perfeito de baunilha e chocolate com ganache por cima.",
        imagem: "img/thiago-japyassu-Lk77s3MW8OA-unsplash.jpg.jpeg",
        destaque: false
    },
    {
        id: 29,
        nome: "Mini Bolo Decorado Guirlanda",
        categoria: "bolos",
        preco: 35.90,
        descricao: "Mini bolo de baunilha decorado em formato de guirlanda de Natal.",
        imagem: "img/sadie-coulter--jChYh8otGk-unsplash.jpg.jpeg",
        destaque: false
    },
    {
        id: 30,
        nome: "Tronco de Natal (Yule Log)",
        categoria: "bolos",
        preco: 98.90,
        descricao: "Rocambole francês de chocolate recheado com creme de avelã em formato de tronco.",
        imagem: "img/kisoulou-meIw33_r6Wo-unsplash (2).jpg",
        destaque: true
    },

    // --- DOCES (31 a 40) ---
    {
        id: 31,
        nome: "Caixa Brigadeiros Gourmet (12 un)",
        categoria: "doces",
        preco: 36.90,
        descricao: "Seleção de brigadeiros ao leite, amargo, Ninho e pistache em caixa presenteável.",
        imagem: "img/ricardo-henri-W7Fc-k3IpmU-unsplash.jpg",
        destaque: true
    },
    {
        id: 32,
        nome: "Trufas Artesanais de Chocolate Belga",
        categoria: "doces",
        preco: 32.90,
        descricao: "Caixa com 8 trufas cremosas cobertas com cacau em pó holandês.",
        imagem: "img/merve-aydin-jD2dIC2IZME-unsplash.jpg",
        destaque: false
    },
    {
        id: 33,
        nome: "Bombons Recheados de Avelã",
        categoria: "doces",
        preco: 34.90,
        descricao: "Bombons crocantes com recheio aveludado de avelã e chocolate ao leite.",
        imagem: "img/jessica-loaiza-DHYfjAe_eeo-unsplash.jpg",
        destaque: false
    },
    {
        id: 34,
        nome: "Beijinhos de Coco com Cravo Especial",
        categoria: "doces",
        preco: 28.90,
        descricao: "Docinhos de coco queimado e leite condensado finalizados com cravo da índia.",
        imagem: "img/bermix-studio-6rYYlDlusOo-unsplash.jpg",
        destaque: false
    },
    {
        id: 35,
        nome: "Doce de Pistache Real",
        categoria: "doces",
        preco: 42.90,
        descricao: "Docinhos finos banhados em chocolate branco e cobertos com pistache triturado.",
        imagem: "img/jason-richard-PnIHvHZsH4Q-unsplash.jpg",
        destaque: false
    },
    {
        id: 36,
        nome: "Trufas de Frutas Vermelhas",
        categoria: "doces",
        preco: 35.90,
        descricao: "Chocolate meio amargo com recheio levemente azedo de frutas vermelhas.",
        imagem: "img/nick-fewings-u1go7NVKo_0-unsplash.jpg",
        destaque: false
    },
    {
        id: 37,
        nome: "Brigadeiros de Leite Ninho com Nutella",
        categoria: "doces",
        preco: 30.90,
        descricao: "Massa suave de Leite Ninho recheada no centro com pura Nutella.",
        imagem: "img/pradeep-javedar-1cDgvQ-LvMk-unsplash.jpg",
        destaque: false
    },
    {
        id: 38,
        nome: "Macarons Natalinos (Caixa 8 un)",
        categoria: "doces",
        preco: 44.90,
        descricao: "Macarons franceses nas cores de Natal com recheios sortidos de ganache.",
        imagem: "img/chelsea-audibert-hV1gChgMa-k-unsplash.jpg",
        destaque: true
    },
    {
        id: 39,
        nome: "Palha Italiana Tradicional",
        categoria: "doces",
        preco: 25.90,
        descricao: "Cortes de brigadeiro cremoso mesclado com pedaços crocantes de biscoito.",
        imagem: "img/pushpak-dsilva-r-hQw_obFd0-unsplash.jpg",
        destaque: false
    },
    {
        id: 40,
        nome: "Camafeu de Nozes (Caixa 10 un)",
        categoria: "doces",
        preco: 48.90,
        descricao: "Doce fino de nozes banhado em fondant branco e decorado com meia noz.",
        imagem: "img/gaurav-kumar-RvQ4cSpm6xQ-unsplash.jpg",
        destaque: false
    },

    // --- PRESENTES (41 a 50) ---
    {
        id: 41,
        nome: "Cesta de Natal Premium Aura",
        categoria: "presentes",
        preco: 189.90,
        descricao: "Contém 1 Chocotone, 1 caixa de biscoitos, 1 caixa de trufas e 1 geleia artesanal.",
        imagem: "img/loo-chun-kang-SrnCpsp9sGY-unsplash.jpg",
        destaque: true
    },
    {
        id: 42,
        nome: "Kit Panetone + Biscoitos + Vinho",
        categoria: "presentes",
        preco: 149.90,
        descricao: "Kit harmonizado com Panetone artesanal, biscoitos decorados e vinho tinto.",
        imagem: "img/nataliya-melnychuk-NgUXrsDVv6Q-unsplash.jpg",
        destaque: false
    },
    {
        id: 43,
        nome: "Caixa Presente de Doces Sortidos",
        categoria: "presentes",
        preco: 89.90,
        descricao: "Mix de brigadeiros, trufas, macarons e biscoitos decorados numa linda caixa.",
        imagem: "img/denny-muller-mGP8gyGb8zY-unsplash.jpg",
        destaque: false
    },
    {
        id: 44,
        nome: "Kit Mini Biscoitos e Caneca Festiva",
        categoria: "presentes",
        preco: 65.90,
        descricao: "Caneca de cerâmica temática com biscoitinhos amanteigados de gengibre.",
        imagem: "img/mae-mu-kID9sxbJ3BQ-unsplash.jpg",
        destaque: false
    },
    {
        id: 45,
        nome: "Cesta Ouro Feliz Natal",
        categoria: "presentes",
        preco: 229.90,
        descricao: "Cesta luxuosa com espumante, chocotone trufado, nozes, doces e geleia.",
        imagem: "img/tuyen-vo-yfMzLGLw_NM-unsplash.jpg.jpeg",
        destaque: true
    },
    {
        id: 46,
        nome: "Kit Chocolates Artesanais de Natal",
        categoria: "presentes",
        preco: 75.90,
        descricao: "Barras de chocolate temperadas com frutas secas e oleaginosas.",
        imagem: "img/tetiana-bykovets-TzN2odwnesg-unsplash.jpg.jpeg",
        destaque: false
    },
    {
        id: 47,
        nome: "Caixa Luxo Trufas e Bombons",
        categoria: "presentes",
        preco: 99.90,
        descricao: "Caixa rígida aveludada com 24 bombons finos e trufas sortidas.",
        imagem: "img/scarlett-alt-DjXW0dj1VPM-unsplash.jpg.jpeg",
        destaque: false
    },
    {
        id: 48,
        nome: "Kit Café & Biscoitos Natalinos",
        categoria: "presentes",
        preco: 85.90,
        descricao: "Café especial moído na hora acompanhado de lata de biscoitos de especiarias.",
        imagem: "img/joshua-davis-auuDZ0hglhM-unsplash.jpg",
        destaque: false
    },
    {
        id: 49,
        nome: "Baú de Natal com Vinhos e Doces",
        categoria: "presentes",
        preco: 299.90,
        descricao: "Baú de madeira estilo rústico repleto de iguarias natalícias e vinho aperitivo.",
        imagem: "img/fernando-dantas-Cf5pRVIC47U-unsplash.jpg",
        destaque: false
    },
    {
        id: 50,
        nome: "Sacola Presenteável Doce Natal",
        categoria: "presentes",
        preco: 49.90,
        descricao: "Sacola festiva composta por 1 mini panetone e 1 caixinha de brigadeiros.",
        imagem: "img/kirill-RKd8rJ-znAo-unsplash.jpg",
        destaque: false
    }
];