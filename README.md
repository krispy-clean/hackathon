# Présentation du Projet

## Introduction
Ce document présente les fonctionnalités mises en place dans le cadre de notre projet. Nous avons mis en œuvre plusieurs outils et pratiques pour assurer une intégration continue, une livraison continue (CI/CD) et une architecture efficace de notre application. 

## DevSecOps: Security & CI/CD

### Code Scanning Tool : CodeQL
CodeQL est utilisé pour analyser notre code source et détecter des vulnérabilités de sécurité potentielles. Il permet d'identifier les failles de sécurité et les bugs avant qu'ils n'atteignent la production, assurant ainsi la qualité et la sécurité de notre code.

### Dependabot : Dependency Package Manager
Dependabot est utilisé pour gérer les dépendances de notre projet. Il surveille les mises à jour des packages et crée automatiquement des pull requests pour les nouvelles versions des dépendances.

Cela permet de maintenir notre projet à jour et de réduire les risques de sécurité associés aux versions obsolètes des packages.

Nous avons configurer Dependabot pour qu'il met à jour nos packages bun dans le package.json et nos packages Docker. 

### Github Branch Protection
Nous avons mis en place une protection des branches sur GitHub pour assurer la qualité et la sécurité de notre code avant la fusion des modifications.

Les branches protégées nécessitent une validation des Merge Requests (MR) par au moins un seul membre avant de pouvoir être "mergé" dans le main branch. 

### Linter Verification
Nous avons mis en place un check avec l'utilisation de ESLint pour vérifier le style et la qualité du code JavaScript. Cela empêche l'intégration de code non conforme aux standards définis.

## Docker Containers

### MongoDB
Nous utilisons un conteneur Docker pour MongoDB, qui est notre base de données principale. Cela permet une gestion simplifiée et une isolation de la base de données, facilitant ainsi le déploiement et la maintenance.

### MongoDB Express
Un conteneur Docker pour MongoDB Express est également utilisé, offrant une interface web pour gérer et visualiser notre base de données MongoDB. Cela simplifie les opérations de gestion de la base de données.

### App Container
L'application elle-même est contenue dans un conteneur Docker. Cette application est un monolithe développé avec Bun, comprenant un frontend en Next.js et un backend avec ElysiaJS. L'utilisation de conteneurs Docker permet de garantir la portabilité et la cohérence de l'application à travers différents environnements de déploiement.

## Workspaces dans Bun
Nous avons utilisé les workspaces de Bun pour partager efficacement les packages réutilisés entre le frontend et le backend. Cette approche permet de centraliser et de rationaliser la gestion des dépendances communes, améliorant ainsi la cohérence du code et réduisant la duplication des efforts.

## Frontend

### NextUI
NextUI est utilisé pour construire une interface utilisateur moderne et réactive. Il fournit des composants UI prêts à l'emploi qui accélèrent le développement et assurent une expérience utilisateur cohérente.

### NextJS
Next.js est le framework utilisé pour notre frontend. Il offre des fonctionnalités telles que le rendu côté serveur et la génération de sites statiques, ce qui améliore les performances et le SEO de notre application.

### TailwindCSS
Nous utilisons TailwindCSS pour la gestion des styles de notre application frontend. TailwindCSS permet une grande flexibilité et rapidité dans le développement de styles en fournissant des classes utilitaires prédéfinies.

## Backend

### ElysiaJS
ElysiaJS est utilisé pour développer notre backend. Ce framework léger et performant permet de créer des API rapides et scalables, facilitant la gestion des requêtes et des réponses de notre application.

## Conclusion
En combinant ces outils et technologies, nous avons créé une architecture solide et sécurisée pour notre projet, permettant une gestion efficace du code, des dépendances et des déploiements.

Les conteneurs Docker assurent la portabilité et la cohérence de notre application, tandis que les frameworks et outils choisis pour le frontend et le backend garantissent des performances élevées et une expérience utilisateur optimale.

L'utilisation des workspaces de Bun permet une réutilisation efficace des packages entre le frontend et le backend, améliorant la cohérence et l'efficacité du développement.
