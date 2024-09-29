// Importation du composant MenuListItem pour afficher chaque élément du menu
import { MenuListItem } from '../MenuListItem/MenuListItem';
// Importation des styles spécifiques de ce composant à partir du fichier CSS correspondant
import s from './style.module.css';
// Importation des constantes représentant les niveaux de difficulté
import { DIFFICULTIES } from './constant';

// Définition du composant MenuList qui reçoit deux propriétés : la difficulté actuelle et une fonction de rappel (onItemClick)
export function MenuList({difficulty, onItemClick}) {
    return (
        <div className={s.container}>
            {/* Parcourt chaque difficulté définie dans DIFFICULTIES et crée un MenuListItem pour chacune */}
            {DIFFICULTIES.map((diff) => {
                return (
                    <MenuListItem 
                        onClick={onItemClick} // Fonction à appeler quand l'élément est cliqué
                        difficulty={diff} // La difficulté spécifique à cet élément
                        isSelected={difficulty === diff} // Vérifie si l'élément est la difficulté sélectionnée
                    />
                );
            })}
        </div>
    );
}
