// Importation de la bibliothèque React
import React from "react";
// Importation de la bibliothèque ReactDOM, qui est utilisée pour manipuler le DOM et intégrer le composant React dans la page HTML
import ReactDOM from "react-dom";

// Importation du composant principal de l'application nommé "App"
import App from "./App";

// Sélection de l'élément HTML avec l'ID "root", qui servira de point d'ancrage pour l'application React
const divRoot = document.getElementById("root");

// Création de la racine React dans l'élément HTML sélectionné, permettant ainsi de gérer l'arborescence de composants React
const reactDom = ReactDOM.createRoot(divRoot);

// Rendu du composant "App" dans la racine définie précédemment
reactDom.render(<App></App>);

// Note : <App></App> est l'instance de notre composant "App". Cela permet à React de l'afficher dans la page web.
