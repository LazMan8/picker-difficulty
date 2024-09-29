// Importation du hook useState de React pour gérer l'état local du composant
import { useState } from "react";
// Importation du composant DisplayDifficulty, qui affiche la difficulté sélectionnée
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
// Importation du composant MenuList, qui permet de sélectionner un niveau de difficulté
import { MenuList } from "./components/MenuList/MenuList";
// Importation des styles spécifiques de ce composant
import s from "./style.module.css";

// Déclaration du composant principal App
function App() {
    // Déclaration de l'état `currentDifficulty` pour stocker la difficulté sélectionnée
    // `setCurrentDifficulty` permet de mettre à jour cette valeur
    const [currentDifficulty, setCurrentDifficulty] = useState("");

    // Fonction pour mettre à jour la difficulté courante en fonction de l'option sélectionnée
    function updateDifficulty(difficulty) {
        setCurrentDifficulty(difficulty);
    }

    // Rendu de l'interface utilisateur du composant App
    return (
        <div>
            {/* Titre principal de l'application, avec un style défini */}
            <h1 className={s.titre}>Choisi ta difficulter :</h1>
            
            {/* Conteneur de l'espace de travail */}
            <div className={s.workspace}>
                {/* MenuList pour choisir un niveau de difficulté */}
                <MenuList 
                    onItemClick={updateDifficulty} // Passe la fonction de mise à jour pour gérer la sélection de la difficulté
                    difficulty={currentDifficulty} // La difficulté actuellement sélectionnée, à comparer pour le surlignage
                />

                {/* Affichage de la difficulté sélectionnée grâce au composant DisplayDifficulty */}
                <DisplayDifficulty difficulty={currentDifficulty} />
            </div>
        </div>
    );
}

// Exportation du composant App pour qu'il puisse être utilisé dans d'autres fichiers
export default App;
