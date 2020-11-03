Question 2 : choix du design pattern : MVC

Une application conforme au motif MVC comporte trois types de modules : les modèles, les vues et les contrôleurs.

Modèle

Élément qui contient les données ainsi que de la logique en rapport avec les données : validation, lecture et enregistrement. Il peut, dans sa forme la plus simple, contenir uniquement une simple valeur, ou une structure de données plus complexe. Le modèle représente l'univers dans lequel s'inscrit l'applicatio. Par exemple pour une application de banque, le modèle représente des comptes, des clients, ainsi que les opérations telles que dépôt et retraits, et vérifie que les retraits ne dépassent pas la limite de crédit.

Vue

Partie visible d'une interface graphique. La vue se sert du modèle, et peut être un diagramme, un formulaire, des boutons, etc3. Une vue contient des éléments visuels ainsi que la logique nécessaire pour afficher les données provenant du modèle. Dans une application de bureau classique, la vue obtient les données nécessaires à la présentation du modèle en posant des questions. Elle peut également mettre à jour le modèle en envoyant des messages appropriés4. Dans une application web une vue contient des balises HTML2.

Contrôleur

Module qui traite les actions de l'utilisateur, modifie les données du modèle et de la vue.

On utilise ce design pattern car il permet : - une conception plus efficace et plus claire. Ceci étant du à la séparation des données de la Vue et du Contrôleur. - Une plus grande souplesse pour organiser le développement du site entre différents développeurs (indépendance des données, de l’affichage (webdesign) et des actions)

Question 3 : SOLID : - Le Principe de Responsabilité Unique (Single Responsibility Principle). - Le Principe d'Ouverture-Fermeture (Open-Closed Principle) - Le Principe de Substitution de Liskov (Liskov Substitution Principle). - Le Principe de Ségrégation des Interfaces (Interface Segregation Principle).
- Le Principe d'Inversion des Dépendances (Dependency Inversion Principle).

Ici le principe utilisé est le I :  Un client ne doit pas être contraint de dépendre d'interfaces qu'il n'utilise pas. Le problème est qu'il n'y a pas d'interfaces explicites en JS, cependant il y a des manières de contourner ce point. Il faut donc favoriser plusieurs interface plutôt qu'une seule interface. 


Question 4 : 
    - Le Design Patter utilisé dans cette question est l'Adaptateur, L’adaptateur fait fonctionner ensemble des classes qui n'auraient pas pu fonctionner sans lui, à cause d'une incompatibilité d'interfaces. celui-ci permet de modifier avec un simple fichier les infos du JSON. 



