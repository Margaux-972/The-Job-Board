# The Job Board

## Description

Ce projet est une application React simple qui affiche une liste d'offres d'emploi sous forme de composants réutilisables.
L'objectif est de comprendre :

- La création de composants React
- Le passage de props
- L'organisation d'une application en arbre de composants

## Arbre de composants

```
App
├── Header
│   └── Title
├── Jobs
│   ├── Job
│   ├── Job
│   ├── Job
│   ├── Job
│   ├── Job
│   ├── Job
│   ├── Job
│   └── Job
└── Footer
```

## Composants

### App

Composant principal qui contient toute l'application.

### Header

Affiche l'en-tête du site.

### Title

Affiche le titre de l'application.

### Jobs

Contient la liste des offres d'emploi.

### Job

Composant réutilisable représentant une offre.

Props :

- className : style spécifique
- title : intitulé du poste
- contractType : type de contrat
- country : pays
- city : ville

### Footer

Affiche le pied de page.

## Technologies utilisées

- React
- JavaScript (ES6)
- CSS

## Objectifs pédagogiques

- Comprendre les composants React
- Manipuler les props
- Structurer une application
- Afficher des listes dynamiques
