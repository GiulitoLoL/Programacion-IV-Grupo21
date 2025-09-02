import { Circle } from "./figures/circle";
import { Triangulo } from "./figures/triangulo";
import { Rectangle } from "./figures/rectangle";
import { Figure } from "./figures/figure";

const circle = new Circle(5,5);
const triangulo = new Triangulo(5,5);
const rectangle = new Rectangle(5,5);
const figuras:Figure [] = [circle, triangulo, rectangle];

figuras[0].dibujar()
figuras[1].dibujar()
figuras[2].dibujar()

figuras[0].calcularArea()
figuras[1].calcularArea()
figuras[2].calcularArea()