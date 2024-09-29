// Importation des styles spécifiques de ce composant
import s from './style.module.css';

// Définition du composant DisplayDifficulty qui reçoit des props (propriétés) pour afficher la difficulté actuelle
export function DisplayDifficulty(props) {
    return (
        <div className={s.container}>
            {/* Affiche la difficulté actuelle si définie, sinon indique qu'aucune difficulté n'est définie */}
            {props.difficulty ? `Difficulty set to : ${props.difficulty}` : 'No difficulty set'}
        </div>
    );
}
