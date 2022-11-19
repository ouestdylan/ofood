
# O'food, Good Mood! - Documents d'un projet

## Présentation


## Instalation

Pour commencer il va falloir créer une BDD avec psql sur votre server.
Ensuite créer les tables et y importer les données que vous trouverez dans /Back/data/,
il y a un script bash que vous pourrez lancer pour la construction:
```
bash create_db.sh
```
si celui-ci ne fonctionne pas on passe aux commandes sql:
```
psql -U nomDeLutilisateur -d nomDeLaBdd -f create_tables.sql
psql -U nomDeLutilisateur -d nomDeLaBdd -f data.sql
```

Ensuite il vous faudra installer les dépendances coté Back et coté Front en tapant la commande suivante dans chaque dossier:
```
npm i
```

Une fois ces étapes réalisées vous pouvez lancer vos deux servers, coté Back et coté Front, et vous pourrez ensuite accéder au site.

