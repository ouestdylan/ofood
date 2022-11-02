
BEGIN;

TRUNCATE "user", "recipe" RESTART IDENTITY;

INSERT INTO "user" ("email","username", "password", "is_admin") 
    VALUES ('michel@michel.fr', 'Michel', 'ilovemichel', 'true'),
            ('bernard@bernard.fr', 'Bernard', 'ilovebernard', 'false');

INSERT INTO "recipe" ("title", "ingredients_list", "description", "cooking_time", "difficulty", "rate", "picture") 
    VALUES ('Tarte aux pommes', '1 pâte feuilletée, 4 pommes, 50g de sucre', '1.Couper les pommes en cartiers très fins 2.Dérouler la pâte 3.Etaler les pommes sur la pâte 4.Ajouter le sucre', 60, 'Très facile', 8, 'https://www.papillesetpupilles.fr/wp-content/uploads/2005/07/Tarte-aux-pommes-c-Margouillat-photo-shutterstock-600x900.jpg'),
            ('Crème de courgettes', '4 courgettes, 2 pommes de terre (chair tendre), 4 pincées de sel, 4 kiri (fromage), 2l de bouillon', '1. Couper les courgettes en morceaux sans les peler 2. Peler les pommes de terre et les couper également en morceaux 3. Faire cuire le tout dans un bouillon de votre choix pendant 30 mn 4. Une fois les légumes cuits, les égoutter, ajouter le Kiri et le sel 5. Passer le tout au mixer', 35, 'Très facile', 3, 'https://assets.afcdn.com/recipe/20170727/70965_w640h486c1cx2767cy1844cxb5534cyb3689.webp'),
            ('Epaule d''agneau rotie au four', '1 épaule d''agneau (1 à 1,2 kg), 1 ou 2 branches de romarin, 2 feuilles de laurier, quelques brins de thym frais, 20 cl d''eau (ou de vin blanc sec), 2 têtes d''ail, beurre, sel, poivre', '1. Préchauffez le four sur th. 7-8/220° 2.Enduisez 1 belle épaule (1 à 1,2 kg) d’huile d’olive et placez-la dans un plat à four 3. Parsemez de 1 ou 2 branches de romarin, 2 feuilles de laurier et quelques brins de thym frais 4. Versez au fond du plat 20 cl d’eau (ou de vin blanc sec), ajoutez autour de la viande 2 têtes d’ail ouvertes en deux dans la largeur. On peut aussi piquer des gousses d’ail crues pelées dans l’épaule 5. Mettez à cuire dans le four 35 à 40 mn pour une chair rosée à coeur 6. A mi-cuisson, salez, poivrez et répartissez quelques noisettes de beurre sur la viande 7. Arrosez régulièrement avec le jus', 45, 'moyen', 7, 'https://resize.elle.fr/portrait_480_webp/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/epaule-d-agneau-entiere-rotie-au-four-859952/11013473-31-fre-FR/Epaule-d-agneau-entiere-rotie-au-four.jpg');

COMMIT;
