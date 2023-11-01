# PROJET EXAMEN M1 

# Auteurs : 
- SKRZYPCZAK Louis
- RENOUVIN--DELECOURT Alexandra
- DJELALI Célia
- LAFONT Arthur
- COCHET Mélodie

######################## 
##### COTE BACKEND #####
########################

On remarque que certaines fonctionnalités sont plus difficiles à développer si on en développe pas d'autres avant
-> Ex : Implémenter la création de livres est plus difficile si on a pas implémenté les auteurs (Authors), les genres de livres (BookGenre) et les genres (Genre) avant.

On va donc remonter de cette manière, de fonctionnalité en fonctionnalité : 
1. On va implémenter la possibilité de créer des auteurs et de distribuer ces auteurs au front
2. On implémentera les genres, le fait de pouvoir récupérer ces genres et d'en créer de nouveaux
3. Puis finalement, les livres

4. On pourra donc s'intéresser aux utilisateurs, car ils peuvent posséder des livres (donc on a besoin que les trois étapes précédentes soient réalisées)
5. Lorsque les utilisateurs seront crées, on essaiera de prendre en charge la fonctionnalité des "amis"


Plus précisément : 
1. D'après le sujet on voit que l'on veut faire une page qui affiche l'entièreté des auteurs et qu'on puisse en ajouter.
   On va d'abord FAIRE UNE METHODE (POST) pour pouvoir inscrire des auteurs dans notre base de données.
   On va ensuite FAIRE UNE METHODE (GET) pour pouvoir récupérer l'ensemble des auteurs
   Après, on préparera UNE METHODE (GET) pour pouvoir récupérer un auteur uniquement -> Puisque l'on doit pouvoir accéder à la page de détail d'un auteur
   Et, on programmera UNE METHODE (DELETE) pour pouvoir supprimer un auteur de notre base de données lorsque nous le souhaiterons
   Puis enfin on fera UNE METHODE (PATCH) pour pouvoir updater les informations d'un auteur en fonction de son ID

2. On va faire à peu près les mêmes requêtes pour les Genres

// CONTINUER L'EXPLICATION //


######################## 
##### COTE FRONTEND ####
########################

La meilleure manière pour que l'on puisse développer la partie front-end avec une certaine continuité avec le backend est donc de suivre l'évolution de celui-ci.
-> Ex : On implémentera les cartes pour render l'ensemble des livres de la bibliothèque après que la possibilité de créer des livres sera disponible

// COMMENCER L'EXPLICATION //
