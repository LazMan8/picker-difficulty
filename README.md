# Projet de Sélecteur de Difficulté

## Description 📋

Ce projet est une application React simple permettant aux utilisateurs de sélectionner un niveau de difficulté. Elle propose une interface conviviale où l'utilisateur peut choisir une difficulté dans une liste, et voir la difficulté sélectionnée mise à jour en temps réel. Ce projet est parfait pour illustrer la gestion d'état dans une application React, ainsi que la manière dont les composants peuvent interagir entre eux.

## Fonctionnalités 🌟

- **Sélection de la difficulté** : Choisissez parmi plusieurs niveaux de difficulté prédéfinis.
- **Mise à jour dynamique** : Affichage de la difficulté actuellement sélectionnée.
- **Interface réactive** : Les composants changent d'apparence en fonction des actions de l'utilisateur (survol et sélection).

## Détails des Composants 🧩

### 1. `App.jsx` 🏠
Le composant principal qui gère l'ensemble de l'application.
- **`useState`** : Utilisé pour gérer l'état de la difficulté sélectionnée.
- **`updateDifficulty`** : Fonction permettant de mettre à jour la difficulté sélectionnée.
- Contient :
  - **`<MenuList>`** : Pour choisir un niveau de difficulté.
  - **`<DisplayDifficulty>`** : Pour afficher la difficulté sélectionnée.

### 2. `MenuList.jsx` 📜
Ce composant affiche une liste des niveaux de difficulté disponibles.
- Utilise le composant **`MenuListItem`** pour chaque niveau de difficulté.
- Reçoit la difficulté actuellement sélectionnée ainsi que la fonction de mise à jour comme props.

### 3. `MenuListItem.jsx` 📄
Un élément de la liste des difficultés, représenté visuellement avec différents styles en fonction de l'état :
- **Survolé** : Change la couleur de fond lorsque l'utilisateur survole l'élément.
- **Sélectionné** : Affiche visuellement la difficulté actuellement sélectionnée.
- Utilise le **hook `useState`** pour gérer l'état de survol (`isHovered`).

### 4. `DisplayDifficulty.jsx` 📊
Affiche la difficulté actuellement sélectionnée.
- Si aucune difficulté n'est sélectionnée, affiche "No difficulty set".

## Installation et Lancement 🚀

Suivez ces étapes pour cloner le projet et l'exécuter en local :

1. Clonez le dépôt :
   ```bash
   git clone <URL_DU_REPO>


root
│
├── src
│   ├── components
│   │   ├── DisplayDifficulty
│   │   │   ├── DisplayDifficulty.jsx
│   │   │   └── style.module.css
│   │   ├── MenuList
│   │   │   ├── MenuList.jsx
│   │   │   ├── constant.js
│   │   │   └── style.module.css
│   │   └── MenuListItem
│   │       ├── MenuListItem.jsx
│   │       └── style.module.css
│   ├── App.jsx
│   └── style.module.css
├── package.json
└── README.md


Ce fichier `README.md` contient toutes les informations nécessaires pour comprendre, installer, et contribuer à votre projet. Vous pouvez l'adapter davantage selon vos besoins spécifiques ou ajouter d'autres sections pertinentes. 😊
