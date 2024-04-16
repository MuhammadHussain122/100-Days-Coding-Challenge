/*
Create two modules; one that exports a class, and another that imports the class and creates an instance.
*/
import { Game } from "./game.js";
let favouriteGame = new Game("Cricket");
favouriteGame.greet();
