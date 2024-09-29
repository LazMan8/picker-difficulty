// Importation du hook useState de React pour gérer l'état local (isHovered)
import { useState } from 'react';
// Importation des styles spécifiques de ce composant
import s from './style.module.css';

// Définition du composant MenuListItem qui reçoit trois propriétés : onClick, difficulty, et isSelected
export function MenuListItem({onClick, difficulty, isSelected}) {
    // Déclaration de l'état local pour savoir si l'élément est survolé
    const [isHovered, setIsHovered] = useState(false);

    // Fonction qui retourne la couleur de fond selon l'état (survolé, sélectionné, ou neutre)
    function getBackgroundColo() {
        if (isHovered) {
            return '#a5e9ff';  // Couleur de fond lorsque l'élément est survolé
        } else if (isSelected) {
            return '#26baea';  // Couleur de fond si l'élément est sélectionné
        } else {
            return '#eff0ef';  // Couleur de fond par défaut
        }
    }

    return (
        <div
            onClick={() => onClick(difficulty)} // Appel de la fonction onClick avec la difficulté actuelle quand l'élément est cliqué
            style={{backgroundColor: getBackgroundColo()}} // Définition de la couleur de fond en fonction de l'état
            className={s.container} // Application du style
            onMouseEnter={() => setIsHovered(true)} // Mettre à jour l'état survolé à true quand la souris entre dans l'élément
            onMouseLeave={() => setIsHovered(false)} // Mettre à jour l'état survolé à false quand la souris quitte l'élément
        >
            Set to : {difficulty} {/* Affichage du texte avec la difficulté */}
        </div>
    );
}
