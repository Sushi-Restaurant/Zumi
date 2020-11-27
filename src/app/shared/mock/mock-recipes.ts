import { Recipe } from '../recipe';
import { RECIPE_TYPES } from './mock-recipe-types';

export const RECIPES: Recipe[] = [
  new Recipe(0, '1', 'Involtini vegetariani', RECIPE_TYPES[0],
    'Involtini Fritti ripieni di verza, carote e cipolle',
    2.0, 2, [],
    [2, 3, 15, 0]),
  new Recipe(1, '2', 'Involtini di gamberi', RECIPE_TYPES[0],
    'Involtini Fritti ripieni di gambero, verza, carote e cipolle',
    3.5, 2, [],
    [2, 3, 11, 15, 1]),
  new Recipe(2, '3', 'Involtini Thai di carne', RECIPE_TYPES[0],
    'Involtini Fritti ripieni di carne e verdure miste',
    3.0, 2, [],
    [2, 3, 10, 15]),
  new Recipe(3, '4', 'Nuvolette di gamberi', RECIPE_TYPES[0],
    'Nuvolette di gambero fritte',
    2.5, null, [19],
    [3, 11, 1]),
  new Recipe(4, '5', 'Pane fritto', RECIPE_TYPES[0],
    'Focaccine cinesi fritte',
    2.0, 2, [],
    [3, 6, 9, 15, 1]),
  new Recipe(5, '6', 'Pane al vapore', RECIPE_TYPES[0],
    'Focaccine cinesi al vapore',
    2.0, 2, [],
    [3, 6, 9, 15, 1]),
  new Recipe(6, '7', 'Gyoza yaki', RECIPE_TYPES[0],
    'Ravioli di suino e verdure alla griglia',
    4.5, 4, [],
    [2, 3, 4, 10]),
  new Recipe(7, '8', 'Ravioli di gamberi', RECIPE_TYPES[0],
    'Ravioli di farina di riso con gambero',
    4.5, 4, [],
    [2, 4, 11, 10, 15]),
  new Recipe(8, '9', 'Ravioli xiaomai', RECIPE_TYPES[0],
    'Ravioli di gambero, suino e verdure',
    4.5, 4, [],
    [2, 3, 11, 10, 15]),
  new Recipe(9,  '10', 'Ravioli vegetariani', RECIPE_TYPES[0],
    'Ravioli di verdure miste',
    4.0, 4, [],
    [2, 3, 4, 0]),
  new Recipe(10,  '11', 'Ravioli al vapore', RECIPE_TYPES[0],
    'Ravioli di suino e verdure al vapore',
    4.0, 4, [],
    [2, 3, 4, 10]),
  new Recipe(11,  '12', 'Edamame', RECIPE_TYPES[0],
    'Fagioli di soia al vapore',
    3.5, null, [],
    [4, 15, 0]),
  new Recipe(12,  '13', 'Wakame', RECIPE_TYPES[0],
    'Alghe Giapponesi e sesamo',
    3.5, null, [23],
    [2, 15, 0]),
  new Recipe(13,  '14', 'Alghe fritte', RECIPE_TYPES[0],
    'Alghe cinesi fritte',
    3.5, null, [],
    [2, 0]),
  new Recipe(14,  '15', 'Takoyaki', RECIPE_TYPES[0],
    'Polpette di polpo fritte',
    4.5, 4, [9, 22],
    [2, 3, 13, 4, 6, 1]),
  new Recipe(15,  '16', 'Toast di gamberi', RECIPE_TYPES[0],
    'Pancarrè ripieno di gamberi e sesamo fritto',
    3.5, 4, [],
    [3, 11, 6, 1]),
  new Recipe(16,  '17', 'Sake tataki', RECIPE_TYPES[0],
    'Salmone scottato con crosta di sesamo marinato',
    4.5, 4, [],
    [13, 4, 15, 1]),
  new Recipe(17,  '18', 'Maguro tataki', RECIPE_TYPES[0],
    'Tonno scottato e marinato con arachidi',
    5.0, 4, [],
    [13, 4, 7, 15, 1]),
  new Recipe(18,  '19', 'Ebi su', RECIPE_TYPES[0],
    'Alghe Giapponesi marinate con pollo',
    4.0, null, [],
    [2, 13, 4, 11, 15, 1]),
  new Recipe(19,  '20', 'Tako su', RECIPE_TYPES[0],
    'Alghe Giapponesi marinate con polpo cotto',
    4.0, null, [],
    [2, 13, 4, 15, 1]),
  new Recipe(20,  '21', 'Kaisen salad', RECIPE_TYPES[1],
    'Insalata verde con sashimi',
    6.0, null, [],
    [2, 13, 11, 14, 15, 1]),
  new Recipe(21,  '22', 'Fruit salad', RECIPE_TYPES[1],
    'Insalata verde con frutta di stagione',
    5.0, null, [],
    [2, 0]),
  new Recipe(22,  '23', 'Mango salad', RECIPE_TYPES[1],
    'Insalata verde con mango e arachidi',
    5.0, null, [1],
    [2, 7, 0]),
  new Recipe(23,  '24', 'Vegan salad', RECIPE_TYPES[1],
    'Insalata vegana',
    4.0, null, [],
    [2, 0]),
  new Recipe(24,  '25', 'Zuppa di miso', RECIPE_TYPES[2],
    'Zuppa di soia fermentata con toufu e alghe',
    3.5, null, [],
    [2, 4, 0]),
  new Recipe(25,  '26', 'Zuppa agropiccante', RECIPE_TYPES[2],
    'Zuppa con uova, toufu, pollo, bambù e funghi cinesi',
    3.5, null, [],
    [6, 2, 5, 1]),
  new Recipe(26,  '27', 'Zuppa granchio asparagi', RECIPE_TYPES[2],
    'Zuppa con uova, granchio e asparagi',
    3.5, null, [],
    [6, 2, 11, 15, 1]),
  new Recipe(27,  '28', 'Zuppa Tom Yam', RECIPE_TYPES[2],
    'Zuppa di cocco con frutti di mare',
    5.0, null, [],
    [11, 5, 15, 1]),
  new Recipe(28,  '29', 'Zuppa mais e pollo', RECIPE_TYPES[2],
    'Zuppa mais e pollo',
    3.5, null, [],
    [2, 6, 1]),
  new Recipe(29,  '30', 'Ramen di manzo', RECIPE_TYPES[2],
    'Spaghetti di frumento con brodo di manzo, verdure, alghe, mais e uovo',
    7.5, null, [26, 10],
    [2, 6, 4, 3]),
  new Recipe(30,  '31', 'Kaisen udon', RECIPE_TYPES[2],
    'Spaghetti di grano in brodo con frutti di mare e alghe',
    8.0, null, [],
    [13, 12, 3, 4, 11, 15, 1]),
  new Recipe(31,  '32', 'Riso cantonese', RECIPE_TYPES[3],
    'Riso saltato con uova, piselli e prosciutto',
    5.0, null, [26, 16, 17],
    [2, 6, 10]),
  new Recipe(32,  '33', 'Riso gamberi', RECIPE_TYPES[3],
    'Riso saltato con uova, verdure e gamberi',
    5.5, null, [26],
    [2, 6, 11, 1]),
  new Recipe(33,  '34', 'Riso terra-mare', RECIPE_TYPES[3],
    'Riso saltato con uova, verdure, pollo, gamberi e manzo',
    6.0, null, [26],
    [2, 6, 11, 4]),
  new Recipe(34,  '35', 'Riso vegetariano', RECIPE_TYPES[3],
    'Riso saltato con uova e verdure',
    4.5, null, [26],
    [2, 6, 1]),
  new Recipe(35,  '35VEG', 'Riso vegan', RECIPE_TYPES[3],
    'Riso saltato con verdure',
    4.0, null, [],
    [2, 0]),
  new Recipe(36,  '36', 'Riso pollo con salsa Teriyaki', RECIPE_TYPES[3],
    `"Riso vegetariano" (34) con pollo e salsa Teriyaki`,
    6.0, null, [22],
    [2, 6, 4]),
  new Recipe(37,  '37', 'Riso al curry con manzo', RECIPE_TYPES[3],
    'Riso bianco ricoperto con manzo al curry e verdure',
    6.0, null, [],
    [2]),
  new Recipe(38,  '38', 'Riso al curry con gamberi', RECIPE_TYPES[3],
    'Riso saltato con uova e verdure, con gamberi e curry',
    6.0, null, [],
    [2, 6, 11, 1]),
  new Recipe(39,  '39', 'Riso venere', RECIPE_TYPES[3],
    'Riso venere saltato con uova e verdure, con gamberi e anacardi',
    7.0, null, [0],
    [2, 6, 11, 7, 1]),
  new Recipe(40,  '39VEG', 'Riso venere vegan', RECIPE_TYPES[3],
    'Riso venere saltato, con verdure e anacardi',
    6.5, null, [0],
    [2, 7, 0]),
  new Recipe(41,  '40', 'Sake don', RECIPE_TYPES[3],
    'Letto di riso ricoperto con salmone scottato',
    9.0, null, [22],
    [3, 12, 4, 1]),
  new Recipe(42,  '41', 'Gohan', RECIPE_TYPES[3],
    'Riso in bianco al vapore',
    2.5, null, [],
    [0]),
  new Recipe(43,  '42', 'Yaki udon ai frutti di mare', RECIPE_TYPES[4],
    'Spaghetti di grano saltati con uova, verdure e frutti di mare',
    7.5, null, [26],
    [2, 3, 11, 6, 12, 13, 15, 1]),
  new Recipe(44,  '43', 'Yaki udon con pollo', RECIPE_TYPES[4],
    'Spaghetti di grano saltati con uova, verdure e pollo',
    7.0, null, [26],
    [2, 3, 6]),
  new Recipe(45,  '44', 'Yaki udon vegetariano', RECIPE_TYPES[4],
    'Spaghetti di grano saltati con uova e verdure',
    6.0, null, [26],
    [2, 3, 4, 6, 1]),
  new Recipe(46,  '44VEG', 'Yaki udon vegan', RECIPE_TYPES[4],
    'Spaghetti di grano saltati con verdure',
    5.5, null, [],
    [2, 3, 4, 0]),
  new Recipe(47,  '45', 'Yaki soba ai frutti di mare', RECIPE_TYPES[4],
    'Spaghetti di grano saraceno saltati con uova, verdure e frutti di mare',
    7.0, null, [26],
    [2, 3, 11, 6, 12, 13, 1]),
  new Recipe(48,  '46', 'Yaki soba con pollo', RECIPE_TYPES[4],
    'Spaghetti di grano saraceno saltati con uova, verdure e pollo',
    6.0, null, [26],
    [2, 3, 6]),
  new Recipe(49,  '47', 'Yaki soba vegetariano', RECIPE_TYPES[4],
    'Spaghetti di grano saraceno saltati con uova e verdure',
    5.5, null, [26],
    [2, 3, 6, 1]),
  new Recipe(50,  '47VEG', 'Yaki soba vegan', RECIPE_TYPES[4],
    'Spaghetti di grano saraceno saltati con verdure',
    5.0, null, [],
    [2, 3, 0]),
  new Recipe(51,  '48', 'Pad Thai ai frutti di mare', RECIPE_TYPES[4],
    'Spaghetti di riso saltati con uova, verdure, frutti di mare e arachidi',
    7.0, null, [26, 1],
    [2, 11, 6, 7, 12, 13, 5, 15, 1]),
  new Recipe(52,  '49', 'Pad Thai con pollo', RECIPE_TYPES[4],
    'Spaghetti di riso saltati con uova, verdure, pollo e arachidi',
    6.5, null, [26, 1],
    [2, 6, 7, 5]),
  new Recipe(53,  '50', 'Pad Thai vegetariano', RECIPE_TYPES[4],
    'Spaghetti di riso saltati con uova, verdure e arachidi',
    6.0, null, [26, 1],
    [2, 6, 7, 5, 1]),
  new Recipe(54,  '50VEG', 'Pad Thai vegan', RECIPE_TYPES[4],
    'Spaghetti di riso saltati con verdure e arachidi',
    5.5, null, [1],
    [2, 7, 5, 0]),
  new Recipe(55,  '51', 'Spaghetti di soia ai frutti di mare', RECIPE_TYPES[4],
    'Spaghetti di soia saltati con verdure e frutti di mare',
    5.0, null, [],
    [2, 4, 11, 12, 13, 1]),
  new Recipe(56,  '52', 'Spaghetti di soia con pollo', RECIPE_TYPES[4],
    'Spaghetti di soia saltati con verdure e pollo',
    4.5, null, [],
    [2, 4]),
  new Recipe(57,  '53', 'Spaghetti di soia vegan', RECIPE_TYPES[4],
    'Spaghetti di soia saltati con verdure',
    4.0, null, [],
    [2, 4, 0]),
  new Recipe(58,  '54', 'Fettuccine ai frutti di mare', RECIPE_TYPES[4],
    'Fettucine di frumento saltate con uova, verdure e frutti di mare',
    5.5, null, [26],
    [2, 3, 11, 6, 12, 13, 15, 1]),
  new Recipe(59,  '55', 'Fettuccine con pollo', RECIPE_TYPES[4],
    'Fettucine di frumento saltate con uova, verdure e pollo',
    5.0, null, [26],
    [2, 3, 6]),
  new Recipe(60,  '56', 'Fettuccine vegetariane', RECIPE_TYPES[4],
    'Fettucine di frumento saltate con uova e verdure',
    4.5, null, [26],
    [2, 3, 6, 1]),
  new Recipe(61,  '56VEG', 'Fettuccine vegan', RECIPE_TYPES[4],
    'Fettucine di frumento saltate con verdure',
    4.0, null, [],
    [2, 3, 0]),
  new Recipe(62,  '57', 'Spaghetti di riso ai frutti di mare', RECIPE_TYPES[4],
    'Spaghetti di riso saltati con uova, verdure e frutti di mare',
    5.5, null, [26],
    [2, 11, 6, 12, 13, 1]),
  new Recipe(63,  '58', 'Spaghetti di riso con pollo', RECIPE_TYPES[4],
    'Spaghetti di riso saltati con uova, verdure e pollo',
    5.0, null, [26],
    [2, 6]),
  new Recipe(64,  '59', 'Spaghetti di riso vegetariano', RECIPE_TYPES[4],
    'Spaghetti di riso saltati con uova e verdure',
    4.5, null, [26],
    [2, 6]),
  new Recipe(65,  '59VEG', 'Spaghetti di riso vegan', RECIPE_TYPES[4],
    'Spaghetti di riso saltati con verdure',
    4.5, null, [],
    [2]),
  new Recipe(66,  '60', 'Yaki tori', RECIPE_TYPES[5],
    'Spiedini di pollo',
    4.0, 2, [22],
    [3, 4]),
  new Recipe(67,  '61', 'Ebishino', RECIPE_TYPES[5],
    'Spiedini di gamberi',
    5.0, 2, [22],
    [3, 4, 11, 13, 15, 1]),
  new Recipe(68,  '62', 'Yaki ika', RECIPE_TYPES[5],
    'Spiedini di calamari',
    5.0, 2, [22],
    [3, 4, 13, 15, 1]),
  new Recipe(69,  '63', 'Gyuniku', RECIPE_TYPES[5],
    'Spiedini di manzo',
    7.0, 2, [22],
    [3, 4]),
  new Recipe(70,  '64', 'Yaki zakana', RECIPE_TYPES[5],
    'Spiedini di pesce misto',
    6.0, 2, [22],
    [3, 4, 11, 12, 13, 15, 14, 1]),
  new Recipe(71,  '65', 'Sake teriyaki', RECIPE_TYPES[5],
    'Spiedini di salmone',
    7.0, null, [22],
    [3, 4, 13, 14, 1]),
  new Recipe(72,  '66', 'Maguro teriyaki', RECIPE_TYPES[5],
    'Spiedini di tonno',
    8.0, null, [22],
    [3, 4, 13, 14, 1]),
  new Recipe(73,  '67', 'Ebi teriyaki', RECIPE_TYPES[5],
    'Spiedini di gamberone',
    6.0, 2, [22],
    [3, 4, 11, 15, 1]),
  new Recipe(74,  '67', 'Ebi teriyaki', RECIPE_TYPES[5],
    'Spiedini di gamberone',
    6.0, 2, [22],
    [3, 4, 11, 15, 1]),
  new Recipe(75,  '68', 'Ebi tempura', RECIPE_TYPES[6],
    'Gamberi in tempura',
    6.0, 3, [],
    [3, 11, 6, 13, 15, 1]),
  new Recipe(76,  '69', 'Mandorle ebi tempura', RECIPE_TYPES[6],
    'Gamberi in crosta di mandorle',
    9.0, 3, [],
    [3, 11, 6, 7, 13, 15, 1]),
  new Recipe(77,  '70', 'Yasai tempura', RECIPE_TYPES[6],
    'Verdure stagionali in tempura',
    5.0, 4, [],
    [2, 3, 6, 1]),
  new Recipe(78,  '71', 'Tempura mix', RECIPE_TYPES[6],
    'Gamberi e Verdure stagionali in tempura',
    9.0, null, [],
    [2, 3, 6, 11, 13, 15, 1]),
  new Recipe(79,  '72', 'Ika tempura', RECIPE_TYPES[6],
    'Anello di calamari in panko',
    6.0, null, [],
    [3, 6, 13, 15, 1]),
  new Recipe(80,  '73', 'Tori karage', RECIPE_TYPES[6],
    'Bocconcini di pollo fritto',
    6.0, null, [],
    [3, 6]),
  new Recipe(81,  '74', 'Chicken furai', RECIPE_TYPES[6],
    'Cotoletta di pollo in panko',
    5.0, null, [],
    [3, 6]),
  new Recipe(82,  '75', 'Potato furai', RECIPE_TYPES[6],
    'Patatine fritte',
    3.0, null, [14],
    [2, 15, 0]),
  new Recipe(83,  '76', 'Salmon stick', RECIPE_TYPES[6],
    'Stick di salmone in panko',
    6.0, 3, [14],
    [3, 6, 12, 15, 1]),
  new Recipe(84,  '77', 'Pollo alle mandorle', RECIPE_TYPES[7],
    'Pollo alle mandorle',
    5.5, null, [],
    [2, 3, 4, 7]),
  new Recipe(85,  '78', 'Pollo al limone', RECIPE_TYPES[7],
    'Pollo al limone',
    5.5, null, [],
    [2]),
  new Recipe(86,  '79', 'Pollo all\'arancia', RECIPE_TYPES[7],
    'Pollo all\'arancia',
    5.5, null, [],
    [2]),
  new Recipe(87,  '80', 'Pollo piccante', RECIPE_TYPES[7],
    'Pollo piccante',
    5.5, null, [],
    [2, 5]),
  new Recipe(88,  '81', 'Pollo al curry', RECIPE_TYPES[7],
    'Pollo al curry',
    5.5, null, [],
    [2, 3]),
  new Recipe(89,  '82', 'Pollo agli anacardi', RECIPE_TYPES[7],
    'Pollo agli anacardi',
    5.5, null, [],
    [2, 3, 7]),
  new Recipe(90,  '83', 'Pollo bambù e funghi', RECIPE_TYPES[7],
    'Pollo bambù e funghi',
    5.5, null, [],
    [2, 4]),
  new Recipe(91,  '84', 'Pollo con verdure miste', RECIPE_TYPES[7],
    'Pollo con verdure miste',
    5.5, null, [],
    [2]),
  new Recipe(92,  '85', 'Pollo in agrodolce', RECIPE_TYPES[7],
    'Pollo in salsa agrodolce',
    5.0, null, [],
    [2]),
  new Recipe(93,  '86', 'Manzo bambù e funghi', RECIPE_TYPES[7],
    'Manzo bambù e funghi',
    6.5, null, [],
    [2, 3, 4]),
  new Recipe(94,  '87', 'Manzo al curry', RECIPE_TYPES[7],
    'Manzo al curry',
    7.0, null, [],
    [2, 3, 4]),
  new Recipe(95,  '88', 'Manzo in salsa d\'ostriche', RECIPE_TYPES[7],
    'Manzo in salsa d\'ostriche',
    7.0, null, [],
    [2, 3, 4, 13]),
  new Recipe(96,  '89', 'Manzo patate e verdure', RECIPE_TYPES[7],
    'Manzo con patate e verdure',
    7.0, null, [],
    [2, 3, 4]),
  new Recipe(97,  '90', 'Maiale in agrodolce', RECIPE_TYPES[7],
    'Maiale in salsa agrodolce',
    6.0, null, [],
    [2, 10]),
  /**/
  new Recipe(106,  '91', 'Calamari piccanti', RECIPE_TYPES[8],
    'Calamari piccanti',
    6.0, null, [],
    [2, 13, 5, 15]),
  new Recipe(98,  '92', 'Gamberi sale e pepe', RECIPE_TYPES[8],
    'Gamberi sale e pepe',
    7.5, null, [14],
    [2, 11, 15]),
  new Recipe(99,  '93', 'Gamberi al curry', RECIPE_TYPES[8],
    'Gamberi al curry',
    7.5, null, [],
    [2, 11, 15]),
  new Recipe(100,  '94', 'Gamberi piccanti', RECIPE_TYPES[8],
    'Gamberi piccanti',
    7.5, null, [],
    [2, 11, 5, 15]),
  new Recipe(101,  '95', 'Gamberi al limone', RECIPE_TYPES[8],
    'Gamberi al limone',
    8.0, null, [],
    [2, 11, 15]),
  new Recipe(102,  '96', 'Gamberi all\'arancia', RECIPE_TYPES[8],
    'Gamberi all\'arancia',
    8.0, null, [],
    [2, 11, 15]),
  new Recipe(103,  '97', 'Gamberi in agrodolce', RECIPE_TYPES[8],
    'Gamberi in salsa agrodolce',
    7.5, null, [],
    [2, 11, 15]),
  new Recipe(104,  '98', 'Gamberi fritti', RECIPE_TYPES[8],
    'Gamberi fritti',
    8.0, null, [],
    [3, 6, 11, 15]),
  new Recipe(105,  '99', 'Gamberi bambù e funghi', RECIPE_TYPES[8],
    'Gamberi con bambù e funghi',
    7.5, null, [],
    [2, 3, 11, 15]),
  new Recipe(107,  '100', 'Germogli di soia al wok', RECIPE_TYPES[9],
    'Germogli di soia al wok',
    5.5, null, [],
    [2, 0]),
  new Recipe(108,  '101', 'Verdure di stagione al wok', RECIPE_TYPES[9],
    'Verdure di stagione al wok',
    5.5, null, [],
    [2, 0]),
  new Recipe(109,  '110', 'Poke sake', RECIPE_TYPES[10],
    'Riso con salmone, avocado, edamame, cipolle fritte e sesamo',
    12.0, null, [2, 5, 4, 23],
    [2, 3, 12, 14, 1]),
  new Recipe(110,  '111', 'Poke ebiten', RECIPE_TYPES[10],
    'Riso con tempura di gamberi, avocado, edamame e wakame',
    11.0, null, [2, 5, 27],
    [2, 3, 4, 6, 11, 15, 1]),
  new Recipe(111,  '112', 'Poke special ZUMI', RECIPE_TYPES[10],
    'Riso con salmone, tonno, edamame, mandorle, avocado, surimi e ikura',
    13.0, null, [5, 11, 2, 24, 8],
    [2, 3, 4, 7, 11, 12, 13, 15, 14, 1]),
  new Recipe(112,  '113', 'Poke vegan', RECIPE_TYPES[10],
    'Riso con avocado, mango, wakame, edamame e cetriolo',
    9.0, null, [2, 12, 27, 5, 3],
    [2, 0]),
  new Recipe(113,  '114', 'Tacos sake', RECIPE_TYPES[11],
    'Taco con salmone marinato, guacamole e cipolla fritta',
    6.0, 1, [6, 4],
    [2, 3, 4, 12, 14, 1]),
  new Recipe(114,  '115', 'Tacos ebiten', RECIPE_TYPES[11],
    'Taco con gambero in tempura, philadelphia e insalta',
    6.0, 1, [15, 22],
    [2, 3, 4, 6, 9, 11, 15, 1]),
  new Recipe(115,  '102', 'Hoso sake', RECIPE_TYPES[12],
    'Hosomaki al salmone',
    4.0, 6, [],
    [12, 15, 1]),
  new Recipe(116,  '103', 'Hoso tekka', RECIPE_TYPES[12],
    'Hosomaki al tonno',
    4.0, 6, [],
    [12, 15, 1]),
  new Recipe(117,  '104', 'Hoso ebi', RECIPE_TYPES[12],
    'Hosomaki al gambero cotto',
    3.5, 6, [],
    [11, 15, 1]),
  new Recipe(118,  '105', 'Hoso sake flower', RECIPE_TYPES[12],
    'Hosomaki al salmone cotto e philadelphia',
    4.0, 6, [],
    [3, 4, 9, 12, 15, 1]),
  new Recipe(119,  '106', 'Hoso kani', RECIPE_TYPES[12],
    'Hosomaki al granchio',
    3.5, 6, [],
    [3, 11, 13, 15, 1]),
  new Recipe(120,  '107', 'Hoso mango', RECIPE_TYPES[12],
    'Hosomaki al mango',
    3.5, 6, [],
    [2, 0]),
  new Recipe(121,  '108', 'Hoso avocado', RECIPE_TYPES[12],
    'Hosomaki all\'avocado',
    3.5, 6, [],
    [2, 0]),
  new Recipe(122,  '109', 'Hoso kappa', RECIPE_TYPES[12],
    'Hosomaki al cetriolo',
    3.0, 6, [],
    [2, 0]),
  new Recipe(123,  '116', 'Sake avocado roll', RECIPE_TYPES[13],
    'Hosomaki al salmone con avocado ricoperto di sesamo',
    4.5, 4, [23],
    [2, 12, 14, 1]),
  new Recipe(124,  '117', 'Maguro avocado roll', RECIPE_TYPES[13],
    'Hosomaki al tonno con avocado ricoperto di sesamo',
    4.5, 4, [23],
    [2, 12, 14, 1]),
  new Recipe(125,  '118', 'Spice sake roll', RECIPE_TYPES[13],
    'Hosomaki al salmone piccante',
    4.5, 4, [],
    [3, 6, 5, 12, 14, 1]),
  new Recipe(126,  '119', 'Spice tuna roll', RECIPE_TYPES[13],
    'Hosomaki al tonno piccante',
    4.5, 4, [],
    [3, 6, 5, 12, 14, 1]),
  new Recipe(127,  '120', 'Philadelphia roll', RECIPE_TYPES[13],
    'Hosomaki al salmone con philadelphia e avocado ricoperto di tobiko',
    4.5, 4, [25],
    [2, 9, 12, 13, 14, 15, 1]),
  new Recipe(128,  '121', 'Rainbow roll', RECIPE_TYPES[13],
    'Hosomaki al salmone con avocado ricoperto di pesce misto',
    6.0, 4, [],
    [2, 12, 14, 1]),
  new Recipe(129,  '122', 'Mexican roll', RECIPE_TYPES[13],
    'Hosomaki al salmone con philadelphia, guacamole e nachos',
    6.5, 4, [],
    [2, 3, 9, 12, 14, 1]),
  new Recipe(130,  '123', 'Wasabi roll', RECIPE_TYPES[13],
    'Hosomaki di spigola con avocado e maionese al wasabi',
    6.0, 4, [9],
    [2, 6, 5, 12, 14, 1]),
  new Recipe(131,  '124', 'Tris roll', RECIPE_TYPES[13],
    'Hosomaki con salmone, tonno e spigola ricoperto di cipolla fritta',
    6.5, 4, [4],
    [3, 12, 14, 1]),
  new Recipe(132,  '125', 'Lime roll', RECIPE_TYPES[13],
    'Hosomaki al salmone piccante ricoperto di lime con salsa al tabasco',
    6.0, 4, [21],
    [2, 6, 5, 12, 14, 1]),
  new Recipe(133,  '126', 'Wakame roll', RECIPE_TYPES[13],
    'Hosomaki al salmone con avocado, ricoperto di wakame e salsa al sesamo',
    6.0, 4, [20],
    [2, 12, 14, 15, 1]),
  new Recipe(134,  '127', 'Ginger roll', RECIPE_TYPES[13],
    'Hosomaki al surimi in tempura ricoperto di zenzero marinato',
    5.5, 4, [],
    [2, 3, 6, 11, 13, 15, 1]),
  new Recipe(135,  '128', 'Pistacchio tuna roll', RECIPE_TYPES[13],
    'Hosomaki al tonno con avocado ricoperto di granella di pistacchio e maionese',
    6.5, 4, [9],
    [2, 6, 7, 12, 14, 1]),
  new Recipe(136,  '129', 'Tropical roll', RECIPE_TYPES[13],
    'Hosomaki al salmone con avocado ricoperto di mango e passion fruit',
    6.5, 4, [],
    [2, 12, 14, 1]),
  new Recipe(137,  '129VEG', 'Tropical vegan roll', RECIPE_TYPES[13],
    'Hosomaki con avocado ricoperto di mango e passion fruit',
    6.0, 4, [],
    [2, 0]),
  new Recipe(138,  '130', 'Green tuna roll', RECIPE_TYPES[13],
    'Hosomaki al tonno con philadelphia e mela verde',
    6.5, 4, [],
    [2, 9, 12, 14, 1]),
  new Recipe(139,  '131', 'Fragola roll', RECIPE_TYPES[13],
    'Hosomaki al salmone con philadelphia e fragole',
    6.0, 4, [22],
    [2, 3, 4, 9, 12, 14, 1]),
  new Recipe(140,  '132', 'Mango roll', RECIPE_TYPES[13],
    'Hosomaki al salmone con philadelphia e mango',
    6.0, 4, [22],
    [2, 3, 4, 9, 12, 14, 1]),
  new Recipe(141,  '133', 'Felice roll', RECIPE_TYPES[13],
    'Hosomaki al salmone fritto e philadelphia ricoperto di salmone',
    5.5, 4, [22],
    [3, 4, 9, 6, 12, 14, 1]),
  new Recipe(142,  '134', 'Tartar roll', RECIPE_TYPES[13],
    'Hosomaki alle verdure fritte ricoperto di tartar al salmone',
    5.0, 4, [21, 18],
    [2, 3, 6, 5, 12, 14, 1]),
  new Recipe(143,  '135', 'Shibuya roll', RECIPE_TYPES[13],
    'Hosomaki al gambero fritto con philadelphia ricoperto di salmone e avocado',
    6.0, 4, [21],
    [2, 3, 4, 6, 9, 11, 12, 14, 15, 1]),
  new Recipe(144,  '136', 'Miura roll', RECIPE_TYPES[13],
    'Hosomaki al salmone cotto con philadelphia e avocado ricoperto di kataifi',
    4.5, 4, [22],
    [2, 3, 4, 9, 12, 14, 1]),
  new Recipe(145,  '137', 'California roll', RECIPE_TYPES[13],
    'Hosomaki al surimi con cetriolo e avocado',
    4.5, 4, [],
    [2, 3, 11, 13, 15, 1]),
  new Recipe(146,  '138', 'California special', RECIPE_TYPES[13],
    'Hosomaki al tonno in scatola, maionese, surimi e avocado',
    4.5, 4, [9],
    [2, 3, 6, 11, 12, 13, 15, 1]),
  new Recipe(147,  '139', 'Ebiten roll', RECIPE_TYPES[13],
    'Hosomaki al gambero fritto ricoperto di kataifi',
    5.0, 4, [22],
    [3, 4, 6, 11, 15, 1]),
  new Recipe(148,  '140', 'Tiger roll', RECIPE_TYPES[13],
    'Hosomaki al gambero fritto ricoperto di salmone flambè',
    5.5, 4, [22],
    [3, 4, 6, 11, 15, 1]),
  new Recipe(149,  '141', 'Dragon roll', RECIPE_TYPES[13],
    'Hosomaki al gambero fritto ricoperto di avocado',
    5.5, 4, [22],
    [2, 3, 4, 6, 9, 11, 15, 1]),
  new Recipe(150,  '142', 'Rucola roll', RECIPE_TYPES[13],
    'Hosomaki al gambero fritto ricoperto di salone flambè e rucola',
    5.5, 4, [22],
    [2, 3, 4, 6, 11, 12, 14, 15, 1]),
  new Recipe(151,  '143', 'Unaghi roll', RECIPE_TYPES[13],
    'Hosomaki con anguilla e philadelphia ricoperto di avocado',
    6.0, 4, [22, 15],
    [2, 3, 4, 9, 13, 15, 1]),
  new Recipe(152,  '144', 'Mandorle roll', RECIPE_TYPES[13],
    'Hosomaki con pollo fritto ricoperto di mandorle',
    5.0, 4, [22, 11],
    [3, 4, 6, 7]),
  new Recipe(153,  '145', 'Vegan roll', RECIPE_TYPES[13],
    'Hosomaki con cetriolo, avocado e mango',
    4.0, 4, [22, 11],
    [2, 0]),
  new Recipe(154,  '146', 'Maki fritto', RECIPE_TYPES[13],
    'Hosomaki con salmone, philadelphia e frutta di stagione',
    6.5, 6, [22, 15],
    [2, 3, 4, 6, 9, 12, 1]),
  new Recipe(155,  '147', 'Futomaki fritto', RECIPE_TYPES[13],
    'Hosomaki con salmone, tonno, surimi, cetriolo e avocado',
    7.0, 6, [22],
    [2, 3, 4, 6, 11, 12, 13, 14, 15, 1]),
  new Recipe(156,  'V1', 'Black venere philadelphia', RECIPE_TYPES[13],
    'Hosomaki al salmone con philadelphia e avocado ricoperto di tobiko',
    6.0, 4, [15, 2],
    [2, 9, 12, 13, 14, 15, 1]),
  new Recipe(157,  'V2', 'Black venere miura', RECIPE_TYPES[13],
    'Hosomaki al salmone cotto con philadelphia e avocado ricoperto di kataifi',
    5.5, 4, [15, 2, 22],
    [2, 3, 4, 9, 12, 13, 14, 15, 1]),
  new Recipe(158,  'V3', 'Black venere ebiten', RECIPE_TYPES[13],
    'Hosomaki al gambero fritto e kataifi',
    6.0, 4, [22],
    [3, 4, 6, 11, 15, 1]),
  new Recipe(159,  'V4', 'Black venere sake e avocado', RECIPE_TYPES[13],
    'Hosomaki al salmone con avocado e sesamo',
    5.5, 4, [2, 23],
    [2, 12, 14, 1]),
  new Recipe(160,  'V5', 'Black venere maguro e avocado', RECIPE_TYPES[13],
    'Hosomaki al tonno con avocado e sesamo',
    5.5, 4, [2, 23],
    [2, 12, 14, 1]),
  new Recipe(161,  '148', 'Nigiri sake', RECIPE_TYPES[14],
    'Nigiri al salmone',
    2.5, 2, [],
    [12, 14, 1]),
  new Recipe(162,  '149', 'Nigiri maguro', RECIPE_TYPES[14],
    'Nigiri al tonno',
    2.5, 2, [],
    [12, 14, 1]),
  new Recipe(163,  '150', 'Nigiri amaebi', RECIPE_TYPES[14],
    'Nigiri al gambero crudo',
    3.0, 2, [],
    [11, 13, 15, 1]),
  new Recipe(164,  '151', 'Nigiri ebi', RECIPE_TYPES[14],
    'Nigiri al gambero cotto',
    2.5, 2, [],
    [11, 15, 1]),
  new Recipe(165,  '152', 'Nigiri tako', RECIPE_TYPES[14],
    'Nigiri al polpo cotto',
    2.5, 2, [],
    [13, 15, 1]),
  new Recipe(166,  '153', 'Nigiri unaghi', RECIPE_TYPES[14],
    'Nigiri all\'anguilla',
    2.5, 2, [22],
    [3, 4, 13, 15, 1]),
  new Recipe(167,  '154', 'Nigiri mango', RECIPE_TYPES[14],
    'Nigiri al mango',
    2.5, 2, [],
    [0]),
  new Recipe(168,  '155', 'Nigiri avocado', RECIPE_TYPES[14],
    'Nigiri all\'avocado',
    2.5, 2, [],
    [0]),
  new Recipe(169,  '156', 'Nigiri sake flower', RECIPE_TYPES[14],
    'Nigiri al salmone scottato e philadelphia',
    3.5, 2, [15, 22],
    [3, 4, 9, 12, 14, 1]),
  new Recipe(170,  '157', 'Onigiri sake', RECIPE_TYPES[15],
    'Onigiri al salmone',
    3.0, 1, [],
    [12, 14, 1]),
  new Recipe(171,  '158', 'Onigiri special maguro', RECIPE_TYPES[15],
    'Onigiri al tonno in scatola e maionese',
    3.0, 1, [26, 9],
    [6, 12, 1]),
  new Recipe(172,  '159', 'Onigiri ebi', RECIPE_TYPES[15],
    'Onigiri al gambero cotto',
    3.0, 1, [26, 9],
    [11, 15, 1]),
  new Recipe(173,  '160', 'Sake temaki', RECIPE_TYPES[16],
    'Temaki al salmone con avocado',
    3.5, 1, [2],
    [2, 12, 14, 1]),
  new Recipe(174,  '161', 'Maguro temaki', RECIPE_TYPES[16],
    'Temaki al tonno con avocado',
    3.5, 1, [2],
    [2, 12, 14, 1]),
  new Recipe(175,  '162', 'Ebiten temaki', RECIPE_TYPES[16],
    'Temaki al gambero fritto con avocado',
    3.5, 1, [2, 22],
    [2, 3, 4, 6, 11, 15, 1]),
  new Recipe(176,  '163', 'Ebiten temaki', RECIPE_TYPES[16],
    'Temaki al gambero cotto con avocado',
    3.5, 1, [2],
    [2, 11, 15, 1]),
  new Recipe(177,  '164', 'Spicy sake temaki', RECIPE_TYPES[16],
    'Temaki al salmone piccante con avocado',
    3.5, 1, [2],
    [2, 5, 6, 12, 14, 1]),
  new Recipe(178,  '165', 'Spicy maguro temaki', RECIPE_TYPES[16],
    'Temaki al tonno piccante con avocado',
    3.5, 1, [2],
    [2, 5, 6, 12, 14, 1]),
  new Recipe(179,  '166', 'Philadelphia temaki', RECIPE_TYPES[16],
    'Temaki al salmone e philadelphia con avocado',
    4.0, 1, [2],
    [2, 6, 12, 14, 1]),
  new Recipe(180,  '167', 'Vegan temaki', RECIPE_TYPES[16],
    'Temaki al cetriolo, avocado e mango',
    3.5, 1, [],
    [2, 0]),
  new Recipe(181,  '168', 'Chirashi sake', RECIPE_TYPES[17],
    'Cupola di riso ricoperta di salmone',
    7.0, 1, [],
    [12, 14, 1]),
  new Recipe(182,  '169', 'Chirashi mix', RECIPE_TYPES[17],
    'Cupola di riso ricoperta di salmone e tonno',
    7.5, 1, [],
    [12, 14, 1]),
  new Recipe(183,  '170', 'Sashimi sake', RECIPE_TYPES[18],
    'Sashimi di salmone',
    5.0, 5, [],
    [12, 14, 1]),
  new Recipe(184,  '171', 'Sashimi tai', RECIPE_TYPES[18],
    'Sashimi di spigola',
    5.0, 5, [],
    [12, 14, 1]),
  new Recipe(185,  '172', 'Sashimi maguro', RECIPE_TYPES[18],
    'Sashimi di tonno',
    6.0, 5, [],
    [12, 14, 1]),
  new Recipe(186,  '173', 'Sashimi mix', RECIPE_TYPES[18],
    'Sashimi misto',
    12.0, 13, [],
    [12, 14, 1]),
  new Recipe(187,  '174', 'Tartare sake', RECIPE_TYPES[8],
    'Tartare di salmone marinato con mango e avocado',
    8.0, null, [],
    [2, 3, 4, 12, 14, 1]),
  new Recipe(188,  '175', 'Tartare maguro', RECIPE_TYPES[8],
    'Tartare di tonno marinato con mango e avocado',
    8.5, null, [],
    [2, 3, 4, 12, 14, 1]),
  new Recipe(189,  '176', 'Tartare sake venerde', RECIPE_TYPES[8],
    'Tartare di salmone marinato su letto di riso venere',
    10.0, null, [],
    [2, 12, 14, 1]),
  new Recipe(190,  '177', 'Carpaccio di salmone', RECIPE_TYPES[8],
    'Carpaccio di salmone marinato in salsa di agrumi',
    8.0, 10, [],
    [3, 4, 12, 14, 1]),
  new Recipe(191,  '178', 'Carpaccio mix', RECIPE_TYPES[8],
    'Carpaccio di pesce misto marinato in salsa di agrumi',
    10.0, 12, [],
    [3, 4, 12, 14, 1]),
  new Recipe(192,  '179', 'Carpaccio Zumi', RECIPE_TYPES[8],
    'Carpaccio di salmone e gamberetti marinati in salsa ponzu con cipollina e olio',
    11.0, 10, [],
    [2, 3, 4, 11, 12, 14, 15, 1]),
  new Recipe(193,  '180', 'Philadelphia gunkan', RECIPE_TYPES[19],
    'Gunkan al salmone e philadelphia',
    3.5, 2, [],
    [9, 12, 14, 1]),
  new Recipe(194,  '181', 'Sake gunkan', RECIPE_TYPES[19],
    'Gunkan al salmone con tartare di salmone',
    3.5, 2, [21],
    [6, 5, 12, 14, 1]),
  new Recipe(195,  '182', 'Guacamole gunkan', RECIPE_TYPES[19],
    'Gunkan al salmone con guacamole',
    3.5, 2, [],
    [2, 12, 14, 1]),
  new Recipe(196,  '183', 'Ikura gunkan', RECIPE_TYPES[19],
    'Gunkan con uova di salmone',
    4.0, 2, [],
    [13, 15, 1]),
  new Recipe(197,  '184', 'Tobiko gunkan', RECIPE_TYPES[19],
    'Gunkan con uova di pesce volante',
    3.5, 2, [],
    [13, 15, 1]),
  new Recipe(198,  '185', 'Maguro gunkan', RECIPE_TYPES[19],
    'Gunkan al tonno con tartare di tonno',
    3.5, 2, [],
    [6, 5, 12, 14, 1]),
  new Recipe(199,  '186', 'Wakame gunkan', RECIPE_TYPES[19],
    'Gunkan con wakame',
    3.5, 2, [],
    [2, 15, 1]),
  new Recipe(200,  '187', 'Nigiri misto', RECIPE_TYPES[20],
    'Nigiri assortiti',
    7.0, 6, [],
    []),
  new Recipe(201,  '188', 'Sushi mix small', RECIPE_TYPES[20],
    '4 nigiri, 2 uramaki e 2 hosomaki assortiti',
    8.0, 8, [],
    []),
  new Recipe(202,  '189', 'Sushi mix single', RECIPE_TYPES[20],
    '16 pezzi assortiti fra nigiri, uramaki, hosomaki e sashimi',
    16.0, 16, [],
    []),
  new Recipe(203,  '190', 'Sushi mix double', RECIPE_TYPES[20],
    '32 pezzi misti fra nigiri, uramaki, hosomaki e sashimi, serviti al tavolo in una barca',
    32.0, 32, [],
    []),
  new Recipe(204,  '191', 'Sushi mix family', RECIPE_TYPES[20],
    '54 pezzi misti fra nigiri, uramaki, hosomaki e sashimi, serviti al tavolo in una barca',
    54.0, 54, [],
    []),
  new Recipe(205,  'D1', 'Dorayaki', RECIPE_TYPES[21],
    'Il famoso dolce di Doraemon, pancake Giapponesi ripieno di nutella',
    6.0, null, [13],
    []),
  new Recipe(206,  'D2', 'Mochi', RECIPE_TYPES[21],
    'Dolce di riso ripieno al gelato',
    5.0, null, [],
    []),
  new Recipe(207,  'D3', 'Tiramisù verde', RECIPE_TYPES[21],
    'Variante Giapponese del Tiramisù nostrano',
    6.0, null, [],
    []),
  new Recipe(208,  'D4', 'Tiramisù alla nutella', RECIPE_TYPES[21],
    'Variante della casa del Tiramisù con aggiunta di Nutella',
    6.0, null, [],
    []),
  new Recipe(209,  'D5', 'Daifuku', RECIPE_TYPES[21],
    'Dolce di riso con ripieno ai fagioli rossi',
    5.0, null, [],
    []),
  new Recipe(210,  'D6', 'Soufflé al cioccolato', RECIPE_TYPES[21],
    'Soufflé al cioccolato',
    5.5, null, [13],
    []),
  new Recipe(211,  'D7', 'Nutella maki', RECIPE_TYPES[21],
    'Maki ricreati con crepe ripiena al gelato con nutella, panna e scaglie di cocco',
    6.5, null, [13],
    []),
  new Recipe(212,  'D8', 'Gelato giapponese bigusto', RECIPE_TYPES[21],
    'Tè verde, sesamo, zenzero e riso',
    4.0, null, [],
    []),
  new Recipe(213,  'D9', 'Sorbetto al limone', RECIPE_TYPES[21],
    'Sorbetto al limone',
    3.5, null, [],
    []),
  new Recipe(214,  'D10', 'Creme brulèe', RECIPE_TYPES[21],
    'Creme brulèe',
    5.0, null, [],
    []),
  new Recipe(215,  'D11', 'Cheesecake fredda', RECIPE_TYPES[21],
    'Gusto a scelta',
    6.0, null, [13],
    []),
  new Recipe(216,  null, 'Acqua', RECIPE_TYPES[22],
    '750 ml',
    2.0, null, [],
    [], 'acqua750'),
  new Recipe(217,  null, 'Acqua', RECIPE_TYPES[22],
    '500 ml',
    1.5, null, [],
    [], 'acqua500'),
  new Recipe(218,  null, 'Coca cola', RECIPE_TYPES[22],
    '330 ml',
    2.5, null, [],
    [], 'coca330ml'),
  new Recipe(219,  null, 'Coca cola zero', RECIPE_TYPES[22],
    '330 ml',
    2.5, null, [],
    [], 'cocazero330ml'),
  new Recipe(220,  null, 'Coca cola', RECIPE_TYPES[22],
    '1 l',
    4.0, null, [],
    [], 'coca1l'),
  new Recipe(221,  null, 'Fanta', RECIPE_TYPES[22],
    '330 ml',
    2.5, null, [],
    [], 'fanta330ml'),
  new Recipe(222,  null, 'Sprite', RECIPE_TYPES[22],
    '330 ml',
    2.5, null, [],
    [], 'sprite330ml'),
  new Recipe(223,  null, 'Tè al limone', RECIPE_TYPES[22],
    '330 ml',
    2.5, null, [],
    [], 'tealemon330ml'),
  new Recipe(224,  null, 'Tè alla pesca', RECIPE_TYPES[22],
    '330 ml',
    2.5, null, [],
    [], 'teapeach330ml'),
  new Recipe(225,  null, 'Tè verde caldo', RECIPE_TYPES[22],
    'Preparato da noi',
    3.5, null, [],
    [], 'teagreen'),
  new Recipe(226,  null, 'Tè al gelsomino caldo', RECIPE_TYPES[22],
    'Preparato da noi',
    3.5, null, [],
    [], 'teajasmine'),
  new Recipe(227,  null, 'Birra Asahi', RECIPE_TYPES[22],
    '330 ml',
    4.0, null, [],
    [], 'asahi330ml'),
  new Recipe(228,  null, 'Birra Asahi', RECIPE_TYPES[22],
    '500 ml',
    5.0, null, [],
    [], 'asahi500ml'),
  new Recipe(229,  null, 'Birra Sapporo', RECIPE_TYPES[22],
    '650 ml',
    6.0, null, [],
    [], 'sapporo'),
  new Recipe(230,  null, 'Birra Tsingtao', RECIPE_TYPES[22],
    '640 ml',
    5.5, null, [],
    [], 'tsingtao'),
  new Recipe(231,  null, 'Birra Heineken', RECIPE_TYPES[22],
    '660 ml',
    4.5, null, [],
    [], 'heineken')
].sort((a: Recipe, b: Recipe) => {
  return a.id - b.id;
});
