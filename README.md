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

STRATEGIE DE CONCEPTION

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

2. On va faire à peu près les mêmes requêtes pour les genres
   -> POST pour créer un nouveau genre
   -> GET pour récupérer tous les genres possibles (pour plus tard filtrer par genre)
   -> GET pour récupérer un seul genre en fonction de son ID
   -> DELETE pour supprimer un genre
   -> PATCH pour update un genre (dans le cas d'une faute de frappe par exemple)

3. Puis les livres (car dépendant de l'auteur et de son genre)

4. Et finalement les users (car ils peuvent avoir un livre préféré, etc...)


######################## 
##### COTE FRONTEND ####
########################

STRATEGIE DE CONCEPTION

La meilleure manière pour que l'on puisse développer la partie front-end avec une certaine continuité avec le backend est donc de suivre l'évolution de celui-ci.
-> Ex : On implémentera les cartes pour render l'ensemble des livres de la bibliothèque après que la possibilité de créer des livres sera disponible

1. On pourra faire en premier lieu toutes les choses qui ne nécéssitent pas d'appel à l'API (ex: page d'accueil, menu de navigation, création des pages initialement vides, etc...)

PUIS PROGRESSIVEMENT

2. Les auteurs seront la première entité créée et distribuée par l'API donc on pourra travailler sur un composant pour les render, créer un bouton pour créer un nouvel auteur, modifier les infos de l'un d'entre-eux, accéder à la page de détails d'un livre pour le modifier, le supprimer, etc...

3. Puis l'arrivée des genres 

4. Et des livres, qui permettront d'ajouter de nouveaux livres et de les attribuer à un auteur particulier. On pourra à ce moment travailler également sur la page des livres (générale) puis la page d'infos par livre

5. Enfin, l'arrivée des users qui viendra cloturer l'ensemble des interactions possibles avec l'API et permettra d'ajouter encore d'autres fonctionnalités et pages !
