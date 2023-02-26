//traigo las imagenes de la carpeta
import absentaIMG from '../images/cocteles/absenta.jpg';
import cafeIrlandesIMG from '../images/cocteles/cafe-irlandes.jpg';
import cubalibreIMG from '../images/cocteles/cubalibre.jpg';
import daiquiriIMG from '../images/cocteles/daiquiri.jpg';
import fernetIMG from '../images/cocteles/fernet.jpg';
import ginTonicIMG from '../images/cocteles/gin-tonic.jpg';
import grasshopperIMG from '../images/cocteles/grasshopper.jpg';
import hesperidinaIMG from '../images/cocteles/hesperidina.jpg';
import jagermeisterIMG from '../images/cocteles/jagermeister.jpg';
import limoncelloIMG from '../images/cocteles/limoncello.jpg';
import maiTaiIMG from '../images/cocteles/mai-tai.jpg';
import margaritaIMG from '../images/cocteles/margarita.jpg';
import mintJulepIMG from '../images/cocteles/mint-julep.jpg';
import mojitoIMG from '../images/cocteles/mojito.jpg';
import negroniIMG from '../images/cocteles/negroni.jpg';
import piscoIMG from '../images/cocteles/pisco.jpg';
import spritzIMG from '../images/cocteles/spritz.jpg';
import tequilaIMG from '../images/cocteles/tequila.jpg';


export const coctelesArray = [
  {
    id:1,
    nombre: "Cafe irlandes",
    precio: 300,
    category: "sobremesa",
    imagen: cafeIrlandesIMG,
    origen: "Irlanda",
    descripcion: "El Café irlandés es un cóctel que consiste en la mezcla de whisky irlandés, una cucharada de azúcar, café y finalmente va cubierto por dos centímetros de crema de leche o nata semimontada.",
    cantidad: 1,
  },
    {
    id:2,
    nombre: "Julepe de menta",
    precio: 200,
    category: "sobremesa",
    imagen: mintJulepIMG,
    origen: "Estados Unidos",
    descripcion: "El licor de menta se hace tradicionalmente con cuatro ingredientes: menta, bourbon, azúcar y agua. Tradicionalmente, se emplea menta verde (hierbabuena). En el uso de azúcar y menta se parece al mojito.",
    cantidad: 1,
  },
    {
    id:3,
    nombre: "Grasshopper",
    precio: 350,
    category: "sobremesa",
    imagen: grasshopperIMG,
    origen: "Estados Unidos",
    descripcion:"El Grasshopper es un cóctel de crema de menta, crema de cacao y crema de leche, donde tradicionalmente se sirve tras la cena. Tiene un sabor dulce y mentolado.",
    cantidad: 1,
  },
    {
    id:4,
    nombre: "Spritz",
    precio: 400,
    category: "aperitivo",
    imagen: spritzIMG,
    origen: "Italia",
    descripcion:"En Venecia, Padova y Ferrara, el spritz se prepara añadiendo a la base de vino y el seltz, Campari, Aperol, Select o Cynar y añadiendo una rodaja de limón, de naranja o una aceituna.",
    cantidad: 1,
  },
    {
    id:5,
    nombre: "Negroni",
    precio: 375,
    category: "aperitivo",
    imagen: negroniIMG,
    origen: "Italia",
    descripcion:"El Negroni es un cóctel de origen italiano preparado a base de Gin, Campari y Vermú rojo. El vaso clásico para un Negroni es el llamado Old Fashioned, o vaso corto, un vaso bajo y ancho.",
    cantidad: 1,
  },
    {
    id:6,
    nombre: "Hesperidina",
    precio: 325,
    category: "aperitivo",
    imagen: hesperidinaIMG,
    origen: "Argentina",
    descripcion:"La Hesperidina es una bebida argentina a base de corteza de naranjas amargas o agrias y dulces de frutos inmaduros.  Su sabor es suave y dulce.",
    cantidad: 1,
  },
    {
    id:7,
    nombre: "Mojito",
    precio: 250,
    category: "digestivo",
    imagen: mojitoIMG,
    origen: "Cuba",
    descripcion:"El mojito esta compuesto de ron, limón, azúcar (tradicionalmente jugo de caña de azúcar), menta o eucalipto y agua mineral. La combinación de sabor dulce, cítrico, y menta complementa el sabor del ron",
    cantidad: 1,
  },
    {
    id:8,
    nombre: "Fernet",
    precio: 300,
    category: "digestivo",
    imagen: fernetIMG,
    origen: "Italia",
    descripcion:"Originalmente, era solo una bebida digestiva, pero actualmente suele servirse como aperitivo antes o como digestivo después de una comida.",
    cantidad: 1,
  },
    {
    id:9,
    nombre: "Limoncello",
    precio: 275,
    category: "digestivo",
    imagen: limoncelloIMG,
    origen: "Italia",
    descripcion:"El limoncello (o limoncino) es un licor obtenido por la maceración en alcohol de la cáscara de limón y posiblemente de otros cítricos, mezclado con un jarabe de agua y azúcar. ",
    cantidad: 1,
  },
    {
    id:10,
    nombre: "Margarita",
    precio: 450,
    category: "refrescante",
    imagen: margaritaIMG,
    origen: "Mexico",
    descripcion:"La margarita es un cóctel compuesto por tequila, triple seco y jugo de lima o limón. A menudo se sirve con sal en el borde de la copa. La bebida se sirve sacudiendo el hielo, mezclado con hielo (margarita frozen), o sin hielo.",
    cantidad: 1,
  },
    {
    id:11,
    nombre: "Daiquiri",
    precio: 425,
    category: "refrescante",
    imagen: daiquiriIMG,
    origen: "Cuba",
    descripcion:"El daiquirí o daiquiri es un cóctel escarchado (frozen) hecho con ron blanco, jugo de limón o de lima y azúcar. Tradicionalmente, no incluye decoración, o en todo caso un gajo de limón verde.",
    cantidad: 1,
  },
    {
    id:12,
    nombre: "Mai Tai",
    precio: 600,
    category: "refrescante",
    imagen: maiTaiIMG,
    origen: "Tahiti",
    'descripcion':"El Mai Tai es un cóctel a base de ron, de procedencia californiana y denominación en tahitiano.",
    cantidad: 1,
  },
    {
    id:13,
    nombre: "Absenta",
    precio: 500,
    category: "chupito",
    imagen: absentaIMG,
    origen: "Suiza",
    descripcion:"La composición principal de esta bebida es el aporte de aromas de la planta Artemisia absinthium o ajenjo, el de las flores del hinojo y el anís.",
  },
    {
    id:14,
    nombre: "Jagermeister",
    precio: 325,
    category: "chupito",
    imagen: jagermeisterIMG,
    origen: "Alemania",
    descripcion:"Jägermeister es un licor de hierbas endulzado, pero con un toque amargo, el cual tiene 34,5% de contenido alcohólico.",
    cantidad: 1,
  },
    {
    id:15,
    nombre: "Tequila",
    precio: 200,
    category: "chupito",
    imagen: tequilaIMG,
    origen: "Mexico",
    descripcion:"Se elabora a partir de la fermentación y destilado (al igual que el mezcal) del jugo extraído de una planta del género Agave, llamada agave tequilero",
    cantidad: 1,
  },
    {
    id:16,
    nombre: "Cuba Libre",
    precio: 150,
    category: "popular",
    imagen: cubalibreIMG,
    origen: "Cuba",
    descripcion:"El cubalibre es un cóctel cubano resultante de la mezcla del refresco de cola con ron y jugo de limón. Generalmente producido a base de ron añejo, bebida de cola, limón, sal, agua mineral y azúcar.",
    cantidad: 1,
  },
    {
    id:17,
    nombre: "Gin Tonic",
    precio: 150,
    category: "popular",
    imagen: ginTonicIMG,
    origen: "India",
    descripcion:"La bebida denominada en inglés gin and tonic es un cóctel compuesto de ginebra y agua tónica servida con hielo, en unas proporciones sugeridas de 1:1, 1:2, 1:3 y 2:3.",
    cantidad: 1,
  },
    {
    id:18,
    nombre: "Pisco",
    precio: 350,
    category: "popular",
    imagen: piscoIMG,
    origen: "Chile y Peru",
    descripcion:"Pisco es la denominación de un aguardiente de uvas, elaborado mediante la destilación del producto de la vid, como el brandy y el coñac, pero sin la prolongada crianza en barricas de madera.",
    cantidad: 1,
  },
];


