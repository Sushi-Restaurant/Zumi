import { Ingredient } from '../ingredient';

export const INGREDIENTS: Ingredient[] = [
  new Ingredient('Alghe'),
  new Ingredient('Alghe cinesi'),
  new Ingredient('Alghe giapponesi'),
  new Ingredient('Anacardi'),
  new Ingredient('Anguilla'),
  new Ingredient('Arachidi'),
  new Ingredient('Arancia'),
  new Ingredient('Asparagi'),
  new Ingredient('Avocado'),
  new Ingredient('Bambù'),
  new Ingredient('Calamari'),
  new Ingredient('Carne'),
  new Ingredient('Carote'),
  new Ingredient('Cetriolo'),
  new Ingredient('Cipolla'),
  new Ingredient('Cipolla fritte'),
  new Ingredient('Cipollina'),
  new Ingredient('Cocco'),
  new Ingredient('Curry'),
  new Ingredient('Edamame'),
  new Ingredient('Fagioli di soia'),
  new Ingredient('Fagioli rossi'),
  new Ingredient('Fettuccine'),
  new Ingredient('Fragole'),
  new Ingredient('Frutta di stagione'),
  new Ingredient('Frutti di mare'),
  new Ingredient('Funghi'),
  new Ingredient('Gambero'),
  new Ingredient('Gamberone'),
  new Ingredient('Germogli di soia'),
  new Ingredient('Granchio'),
  new Ingredient('Guacamole'),
  new Ingredient('Kataifi'),
  new Ingredient('Ketchup'),
  new Ingredient('Ikura'),
  new Ingredient('Insalata'),
  new Ingredient('Lime'),
  new Ingredient('Limone'),
  new Ingredient('Maiale'),
  new Ingredient('Maionese'),
  new Ingredient('Mais'),
  new Ingredient('Mandorle'),
  new Ingredient('Mango'),
  new Ingredient('Manzo'),
  new Ingredient('Mela verde'),
  new Ingredient('Nachos'),
  new Ingredient('Nutella'),
  new Ingredient('Ostriche'),
  new Ingredient('Pane'),
  new Ingredient('Panko'),
  new Ingredient('Panna'),
  new Ingredient('Passion fruit'),
  new Ingredient('Patate'),
  new Ingredient('Pepe nero'),
  new Ingredient('Pesce misto'),
  new Ingredient('Philadelphia'),
  new Ingredient('Piselli'),
  new Ingredient('Pistacchio'),
  new Ingredient('Pollo'),
  new Ingredient('Polpo'),
  new Ingredient('Prosciutto cotto'),
  new Ingredient('Riso'),
  new Ingredient('Riso venere'),
  new Ingredient('Rucola'),
  new Ingredient('Sale'),
  new Ingredient('Salmone'),
  new Ingredient('Salsa agrodolce'),
  new Ingredient('Salsa al sesamo'),
  new Ingredient('Salsa al tabasco'),
  new Ingredient('Salsa di agrumi'),
  new Ingredient('Salsa ponzu'),
  new Ingredient('Salsa teriyaki'),
  new Ingredient('Sesamo'),
  new Ingredient('Soia'),
  new Ingredient('Spaghetti di grano'),
  new Ingredient('Spaghetti di riso'),
  new Ingredient('Spaghetti di soia'),
  new Ingredient('Spigola'),
  new Ingredient('Surimi'),
  new Ingredient('Tobiko'),
  new Ingredient('Tonno'),
  new Ingredient('Tonno in scatola'),
  new Ingredient('Toufu'),
  new Ingredient('Uova'),
  new Ingredient('Uova di pesce volante'),
  new Ingredient('Uova di salmone'),
  new Ingredient('Verdure di stagione'),
  new Ingredient('Verdure miste'),
  new Ingredient('Verza'),
  new Ingredient('Wakame'),
  new Ingredient('Wasabi'),
  new Ingredient('Zenzero')
].sort(Ingredient.sort);

INGREDIENTS.forEach((ingredient: Ingredient, index: number) => {
  ingredient.id = index;
});
