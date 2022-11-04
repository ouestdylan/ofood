BEGIN;

TRUNCATE "user", "recipe" RESTART IDENTITY;

INSERT INTO "user" ("email","username", "password", "is_admin") 
    VALUES ('michel@michel.fr', 'Michel', 'ilovemichel', 'true'),
            ('bernard@bernard.fr', 'Bernard', 'ilovebernard', 'false');

INSERT INTO "recipe" ("title", "ingredients_list", "description", "steps", "cooking_time", "difficulty", "rate", "picture") 
    VALUES ('BIFSTECK AUX OIGNONS CARAMELISEES',
            'Sel et poivre au goût,
            1 lb (450 g) de surlonge de boeuf ou steak (environ 3/4 po/2 cm d’épaisseur),
            2 c. à soupe (30 ml) de beurre,
            2 oignons émincés,
            2 gousses d’ail hachées,
            5 c. à thé (2 ml) de romarin séché emietté,
            2 c. à soupe (30 ml) de farine tout usage,
            1 1/2 tasse (375 ml) de lait,
            2 c. à soupe (30 ml) de sauce soya,
            1 c. à soupe (15 ml) de moutarde de Dijon,
            Persil frais haché',

            'Ce plat digne du menu d’un restaurant est pourtant tout simple à préparer et sûr de plaire. Régalez-vous en le servant avec des pommes de terre à l’eau et des légumes croquants !',

            'Frotter les deux côtés du bifteck avec 1/4 c. à thé (1 ml) de sel et de poivre. 
            Dans un grand poêlon, faire fondre la moitié du beurre à feu vif; y faire revenir le bifteck des deux côtés, environ 2 min par côté. 
            Réserver dans une assiette.
            Réduire la chaleur à feu moyen-doux; ajouter le reste du beurre dans le poêlon. 
            Incorporer en remuant les oignons, l’ail et le romarin; couvrir et faire cuire en remuant souvent pendant 10 min ou jusqu’à ce que les oignons soient très tendres et caramélisés. Saupoudrer de farine; faire cuire en brassant 1 min.
            Incorporer graduellement le lait en remuant, puis la sauce soya et la moutarde.
            Augmenter la chaleur à feu moyen; laisser mijoter en remuant 5 min ou jusqu’à l’épaississement de la sauce.
            Remettre le bifteck et les sucs accumulés dans le poêlon; napper le bifteck de sauce avec une cuillère. 
            Faire mijoter en retournant le bifteck une fois et en remuant la sauce pendant environ 5 min ou jusqu’à ce que le bifteck atteigne le degré de cuisson voulu. 
            Retirer du feu. 
            Déposer le bifteck sur une planche à découper; laisser reposer 5 min. Rectifier l’assaisonnement de la sauce avec du sel et du poivre. 
            Couper le bifteck en fines tranches dans le sens contraire du grain et le servir nappé de sauce. Garnir de persil.', 
            30, 
            'Difficile',
             8, 
             'bifsteak.jpg'),

            ('BIMBIMBAP AU BOEUF', 
                'Riz,
                2 carottes,
                2 courgettes,
                200 g de pousses de soja,
                Jeunes pousses d’épinard,
                Champignons shiitakés ou de Paris,
                2 ou 3 gousses d’ail,
                1 morceau de gingembre râpé,
                500 g de boeuf à braiser,
                Des oeufs (un par personne),
                Sauce soja,
                Cassonade ou sucre,
                Vinaigre de riz ou blanc,
                Huile de sésame,
                Pâte de piment coréen (Gochujang)', 

            ' Direction la Corée avec le fameux Bibimbap ! Un plat très populaire en Corée à base de riz, de légumes sautés (privilégiez les légumes de saison, et si vous trouvez des shiitake frais ou deshydratés c’est top), et de boeuf émincé ou haché mariné à l’ail, sucre et sauce soja.',
            
            'Faites cuire le riz (1 volume de riz pour 2 volumes d’eau) : 10 minutes à feu vif, puis 10 minutes hors du feu, couvert
            Préparez la marinade : mélangez 3 c. à soupe de cassonade, 3 c. à soupe d’huile de sésame, 3 c. à soupe de vinaigre de riz, une gousse d’ail écrasée et un morceau de gingembre émincé (environ 1 c. à café)
            Ajoutez les lamelles de boeuf bien fines ou du boeuf haché, laisser au frigo 20 minutes
            Préparez les légumes en lamelles fines : carottes, courgettes, émincez les champignons
            Faites cuire les légumes un par un à la poêle ou au wok  (carottes, champignons, épinards, soja, courgettes) avec à chaque fois une c. à café d’huile de tournesol, un peu d’ail émincé selon le goût, et au bout de 3 minutes, ajouter 1 c. à café de sauce soja à chaque légume
            Faire cuire 2 minutes les lamelles de boeuf dans un peu d’huile bien chaude, et faire frire les oeufs (oeufs au plat)
            Servir dans des bols avec du riz au fond, des légumes tout autour, un peu de pâte de piment, et le boeuf et/ou l’oeuf au milieu!',
             45, 
             'Moyen', 
             10, 
             'bimbimpap.jpg'),

             ('BLINI AU SAUMON', 
                'poivre,
                sel,
                Blini,
                crème fleurette,
                10 cl,
                de crème fleurette (ou crème liquide),
                carré frais,
                saumon fumé,
                oeuf,
                ciboulette', 
            'Parfait pour vos soirées apéro-dinatoire',
            'Écrasez à la fourchette les Carrés frais puis ajoutez sel, poivre, ciboulette.
            Montez en chantilly la crème fleurette, puis incorporez délicatement le mélange à base de Carré frais, pour obtenir un mélange onctueux.
            Prendre un blinis, le garnir de la composition précédente, y mettre un morceau de saumon fumé, puis un peu d’oeufs de lumps.
            Garnir les autres, puis poser dans un plat de service avec des rondelles de citron joliment découpées, et les minis tomates.
            Peut se déguster en entrée, ou en plat de résistance avec une salade à l’huile de noix, ou à l’apéro.',
             10, 
             'Facile', 
             3, 
             'blini-saumon.jpg'),

            ('BRUSCHETTA ITALIENNE', 
            '8 tomates,
            2 c.à.s d’huile d’olive,
            sel,
            ail,
            1 gousse d’ail,
            8 tranches de pain de campagne un peu épaisses', 
            ' La bruschetta est un plat ou antipasto issu de la cuisine italienne dite pauvre. 
            Originaire de Naples et désormais diffuse dans toute l’Italie et en dehors de ses frontières, elle consiste à agrémenter une tranche de pain ...',
            'Découper les tomates en petits dés après avoir retiré la partie verte en haut, les mettre dans un petit saladier avec une bonne huile d’olive et du sel.
            Faire griller les tranches de pain de campagne, puis les frotter d’ail.
            Disposer le mélange tomate/huile d’olive généreusement sur la tartine, à déguster aussitôt (tiède).',
             10, 
             'Facile', 
             8, 
             'bruschetta.jpg'),

             ('LASAGNE BOLOGNAISE', 
            ' - Pour le bechamel ,
                70g de buerre,
                70g de farine,
                50cl de lait,
                1 pincée Noix de muscade,
                Plaque de lasagnes (fraîche ou sèche spécial sans précuisson),
                8 Tomate,
                Pulpe de tomate en conserve (ou 500 g de tomates fraîches),
                800 g Boeuf hachée,
                300 g Oignon,
                1 gousse d’Ail,
                Huile d’olive,
                2 c à s Origan,
                Herbes aromatiques au choix (origan thym basilic),
                1 c à s Emmental râpé,
                100 g Sucre,
                Sel,
                Poivre', 
            ' Découvrez la recette des lasagnes, l’une des spécialités italiennes que tout le monde aime avec sa viande hachée et gratinée à l’emmental.',
            'Couper un oignon et une gousse d’ail en petit morceaux.
            Les faire revenir à feu doux dans une casserole ou une sauteuse avec une cuillère à soupe d’huile d’olive, jusqu’à ce que les oignons soient devenus un peu translucides. Afin d’exhaler les saveurs de oignon, démarrer la cuisson à feu vif pendant 1 à 2 minutes. 
            Puis baisser le feu juste après pour ne pas que les oignons ne brûlent.
            Une fois que les oignons ont pris une jolie couleur dorée, ajouter 800 g de pulpe de tomate. 
            Saler, poivrer et ajouter une bonne cuillère à soupe d’herbes aromatiques (au choix : origan, basilic, thym). Laisser réduire et mijoter à feu doux pendant 20 minutes, avant de mixer ou non selon les goûts. 
            Contrairement aux tomates fraîches, la pulpe en conserve étant plutôt acide, penser à ajouter 2 morceaux de sucre pour adoucir la sauce.
            Pendant que la sauce mijote, faire chauffer un peu d’huile d’olive dans une poêle pour y faire revenir 300 g de viande de bœuf hachée à feu moyen pendant 3 à 5 minutes. Saler et poivrer, puis la mélanger à la sauce tomate réservée. 
            Penser à dégraisser la viande avant de la mélanger à la sauce tomate. 
            Pour cela, retirer la viande à l’aide d’une écumoire.',
             60, 
             'Moyen', 
             4, 
             'lasagne.jpg'),

             ('OSSO BUCCO', 
            ' Osso Buco 1.5 kg,
            Oignon 1,
            Tomate 5,
            Concentré de tomate,
            Champignon 200 g,
            Olive verte 1 boîte,
            Olive noire 1 boîte,
            Laurier 1 feuille,
            Vin blanc ½ verre,
            Huile d’olive,
            Sel,
            Poivre,
            Farine,
            Beurre 1 noix', 

            ' Découvrez la recette d’osso bucco de grand-mère, un incontournable de la cuisine italienne, encore meilleur réchauffé. L’osso bucco est un jarret de veau troué mijoté au vin blanc avec des champignons, oignons, tomates, olives et laurier. ',
            
            ' Faire bouillir de l’eau dans une casserole et y mettre une tomate pendant 1 minute puis la retirer et enlever la peau. 
            Recommencer pour les autres tomates. Nettoyer et couper les champignons de Paris en 2 ou 4 suivant la grosseur. 
            Dans une autre casserole, bouillir de l’eau et y mettre les champignons 10 minutes puis les sortir de l’eau, les égoutter et les réserver.
            Faire chauffer de l’huile et du beurre dans un faitout. Passer les morceaux d’osso buco dans la farine et les faire revenir dans l’huile et le beurre. 
            Saler et poivrer puis retourner les morceaux de viande et dorer la face crue. 
            Une fois dorés, retirer les morceaux de viande du faitout et les réserver.
            Dans le faitout, faire dorer l’oignon préalablement coupé en petit morceaux. 
            Ajouter les tomates coupées en 4 et les faire fondre en recouvrant le faitout d’un couvercle. 
            Une fois les tomates fondues, enlever le couvercle et ajouter ½ verre de vin blanc, saler et poivrer. 
            Mettre la feuille de laurier. Ajouter les olives vertes et noires.
            Ajouter les champignons de Paris.
            Remettre les morceaux de viandes, recouvrir le faitout du couvercle et laisser cuire à feu moyen pendant 1 heure.',
             45, 
             'Difficile', 
             6, 
             'osso-bucco.jpg'),

             ('PANCAKES', 
            ' Farine 125 g,
            Sucre 38 g,
            Beurre 25 g,
            Oeufs 1,
            Lait entier 20 cl,
            Levure chimique 1,5 c à c,
            Sucre vanillé 0,5 sachet,
            Sel 0,5 pincée', 

            ' Découvrez la recette de pancakes à la japonaise au bon lait entier. Rapides à préparer, ces pancakes sont parfaits pour le petit-déjeuner, le goûter. ou un brunch. Une recette adaptée au végétariens et à petit prix. ',
            'Tamisez la farine et la levure dans un saladier. Ajoutez le sucre, le sucre vanillé et le sel.
            Creusez un puits, ajoutez les oeufs, le beurre fondu et un peu de lait puis travaillez la pâte.
            Mouillez progressivement avec le reste du lait jusqu’à ce que la pâte forme un ruban.
            Faites cuire les pancakes dans une petite poêle beurrée bien chaude. 
            Versez une demi-louche de préparation et faites cuire 2 à 3 minutes le temps que des bulles se forment à la surface. 
            Retournez et faites cuire 2 minutes sur l’autre face.',
             15, 
             'Facile', 
             8, 
             'pancakes.jpg'),

             ('PASTA PESTO ROSSO', 
            ' 100 g Pâtes (Rigatoni)
            2 cl Huile d’olive,
            10 g Pignons de pin,
            1/4 gousse d’ Ail,
            20 g Parmesan (morceaux),
            50 g Tomate séchée', 
            ' 10 min max pour préparer ces pâtes enrobées d’une délicieuse sauce aux oignons nouveaux et tomates séchées. Avec la mozzarella qui font sur vos Penne et le croquant de noix du Périgord, un régal instantané ! ',
            'Dans une casserole d’eau bouillante, faites cuire les pâtes selon les instructions du paquet soit environ 10 minutes. 
            Égouttez-les en fin de cuisson.
            Épluchez la gousse d’ail.
            Avant de réaliser votre pesto, gardez 1 càc de parmesan et de pignons de pin par personne pour le dressage.
            Dans un mixeur, ajoutez les tomates séchées, l’huile d’olive, les pignons de pin, l’ail et le parmesan. 
            Salez et mixez.
            Servez les pâtes avec le pesto, ajoutez le parmesan et les pignons de pin que vous aviez mis de côté. 
            Salez, poivrez!',
             15, 
             'Très facile', 
             7, 
             'pasta-pesto-rosso.jpg'),

             ('PASTA PESTO VERDE', 
            ' Parmigiano Reggiano AOP Giovanni Ferrari : 30 g,
            poivre noir 1 pincée,
            pignons de pin torréfiés 3 cuillères à soupe,
            roquette  30 g,
            basilic  40 g,
            huile d’olive vierge 10 cl,
            penne 250 g', 
            ' Les pâtes au fromage, une évidence ! Courtes ou longues, complètes ou aux œufs, les pâtes s’accommodent volontiers avec vos fromages préférés, comme dans cette recette de penne au pesto verde. Râpé ou fondu dans une sauce, le fromage a le don de twister tous vos plats de pâtes. ',
            'Pour les penne au pesto verde, cuire les pâtes al dente dans de l’eau bouillante salée en suivant les conseils de préparation inscrits sur le paquet.
            Laver la roquette et le basilic, les essuyer dans un torchon et les hacher grossièrement. 
            Torréfier les pignons de pin dans une poêle à feu doux pour qu’ils brunissent légèrement, en réserver une c.a.s pour la décoration. 
            Râper grossièrement le fromage. 
            Mixer les ingrédients pour la sauce des penne avec le pesto verde et réduire en purée avec l’huile d’olive vierge, puis assaisonner avec du poivre fraichement moulu et un peu de sel.           
            Une fois le pesto terminé, le mélanger aux pâtes chaudes. 
            Disposer dans deux assiettes à pâtes creuses et saupoudrer les penne au pesto verde de fromage râpé, à votre goût, et d’une demi-cuillère à soupe de pignons de pin torréfiés.',
            15, 
             'Facile', 
             6, 
             'pasta-pesto-verde.jpg'),

             ('SALADE DE PATES AU FETA', 
            ' 240 g de pâtes selon votre choix,
            3 concombres,
            1 oignon rouge,
            12 tomates cerises,
            200 g de fromage feta,
            60 g olives noires dénoyautées', 
            ' Idéale au déjeuner lorsqu’il fait chaud, cette salade de pâtes avec ses tomates cerises et ses dés de féta se déguste fraîche accompagnée d’un petit verre de vin rosé et de charcuterie si on le souhaite. ',
            'Faites cuire vos pâtes dans l’eau bouillante. Refroidissez-les dans l’eau froide après cuisson. 
            Mettez-les dans un saladier.
            Épluchez et coupez le 1/2 concombre en brunoise. 
            Coupez les tomates cerises en deux. 
            Mélangez le concombre et les tomates avec les pâtes. 
            Ajoutez l’huile d’olives, les morceaux de féta, la persillade. 
            Salez, poivrez et mélangez délicatement pour ne pas écraser les morceaux fromage.',
             20, 
             'Facile', 
             3, 
             'pasta-salad-feta.jpg'),

             ('POKEBOWL SAUMON', 
            ' 1 pavé de saumon,
            2 cuillère(s) à soupe de vinaigre de riz,
            2 cuillère(s) à soupe de sauce soja,
            graines de sésame,
            riz à sushi cuit et refroidi,
            2 cuillère(s) à soupe de ciboulette ciselée,
            tranches de concombre,
            radis émincés,
            tranches avocat,
            coriandre émincée', 
            ' Direction Hawaï pour le repas avec ce poké bowl au saumon, coloré et extra frais ! Un plat aussi facile qu’équilibré qui embellira votre journée ',
            'Mélangez le pavé de saumon coupé en dés avec 1 cuil. à soupe de vinaigre de riz, 1 cuil. à soupe de sauce soja et des graines de sésame. 
            Réservez.
            Mélangez du riz à sushi cuit et refroidi avec 1 cuil. à soupe de vinaigre de riz, 1 cuil. à soupe de sauce soja, des graines de sésame, et 1 cuil. à soupe de ciboulette ciselée. 
            Réservez.
            Placez le riz au fond d’un bol, ajoutez des graines de sésame, des tranches de concombre, des radis émincés, des tranches d’avocat, le saumon assaisonné, 1 cuil. à soupe de ciboulette ciselée et de la coriandre émincée. 
            Servez.',
             15, 
             'Moyen', 
             9, 
             'poke-bowls-salmon.jpg'),

             ('SALADE COMPOSEE', 
            ' Sucrine,
            Salade sucrine 6,
            Blanc de poulet 3,
            Beurre 15 g,
            Avocat 3,
            Citron jaune 1,
            Poitrine fumée 6 tranches,
            Oeuf 3,
            Grosse tomate 3,
            Roquefort 60 g,
            Ciboulette 1 botte,
            Sel 3 pincées,
            Poivre,
            Moutarde forte 1 c à s,
            Vinaigre de cidre 3 c à s,
            Huile d’olive 9 c à s,
            Sauce Worcestershire 1 c à s', 
            ' En hiver, en automne, au printemps ou en été, la salade composée se savoure à n’’importe quelle saison à condition d’y mettre des fruits et légumes de saison ',
            'Préparation de la salade. Faire cuire les œufs Matines dans l’eau bouillante pendant 10 minutes à partir de la reprise de l’ébullition.
            Les plonger dans l’eau froide et ensuite les écaler. 
            Couper les œufs durs Matines en rondelles.
            Faire dorer les tranches de poitrine fumée dans une poêle à sec. 
            Égoutter sur un papier absorbant et les émietter grossièrement. 
            Saler et poivrer les blancs de poulet et les faire cuire dans cette même poêle dans un peu de beurre mousseux pendant 12 minutes environ. 
            Laisser refroidir puis tailler en tranches.',
             15, 
             'Facile', 
             3, 
             'salade-composee.jpg'),

             ('SALADE CRISPY CHICKEN Gaulois', 
            ' 1 étui de Crousty Chicken Long Filet’s Le Gaulois,
            1 petite laitue ou bathavia,
            2 œufs durs,
            2 tomates,
            1 gousse d’ail,
            1 jaune d’œuf,
            50g de parmesan,
            10 cl d’huile de tournesol,
            20 cl de crème,
            3 c. à soupe de vinaigre ,
            Quelques croutons ,
            Sel, poivre', 

            ' Croustillante, croquante et fraîche.
             Cette salade se distingue par ses tendres morceaux de poulet pané déposés sur un lit de salade, ses tomates et ses délicieux copeaux de fromage. ',
            
            'Préchauffez le four à 210°C. 
            Enfournez les Crousty Chicken Long Filet’s Le Gaulois pendant 12 minutes une fois le four chaud. 
            Pendant ce temps, préparez la sauce en mixant le jaune d’œuf, la gousse d’ail, 30g de parmesan, l’huile de tournesol, le vinaigre, le sel et le poivre. 
            Mêlez la laitue romaine à la sauce et ajoutez-y le reste de parmesan en copeaux, les croûtons, les œufs durs et les tomates en morceaux.
            Disposez la salade dans des coupelles. 
            Émincez les Crousty Chicken Long Filet’s Le Gaulois et disposez-les sur la salade.',
             25, 
             'Facile', 
             7, 
             'salade-crispy-chicken.jpg'),

             ('SALADE EPINARD POULET', 
            ' 3 blancs de poulet,
            2 citrons verts,
            1 gousse d’ail,
            200 g de pousses d’épinards,
            1 mangue bien mûre,
            50 g de noix de cajou,
            quelques feuilles de basilic et de coriandre,
            2 cuillère(s) à soupe d’huile,
            sel,
            piment', 
            ' Une salade à la fois fraîche, croquante et fondante. ',
            'Faites mariner 30 mn 3 blancs de poulet dans le jus et le zeste de 1 citron vert avec 1 gousse d’ail hachée. 
            Faites griller puis découpez en lamelles.
            Mélangez 200 g de pousses d’épinards avec 1 mangue bien mûre coupée en lamelles, 50 g de noix de cajou dorées à la poêle, quelques feuilles de basilic et de coriandre, ainsi que le poulet.
            Mélangez 2 c. à soupe d’huile, le jus de 1 citron vert, sel, piment selon votre goût et assaisonnez-en la salade.',
             20, 
             'Facile', 
             6, 
             'salade-epinard-poulet.jpg'),

             ('PAVE DE SAUMON GRILLEE', 
            ' 2 pavés de saumon frais
            De l’huile d’olive
            1 citron
            Du sel
            Du poivre noir', 
            ' Préparez cette recette de pavé de saumon grillé: une recette de cuisine facile, assaisonnée avec le jus d’un citron fraîchement pressé. ',
            ' D’abord, chauffez une planche ou une grande poêle, à feu très vif. 
            Versez-y un petit filet d’huile d’olive.
            Ensuite, salez et poivrez les pavés de saumon et faites- les cuire à la poêle.
            En fonction de l’épaisseur des pavés, la cuisson du saumon peut prendre plus longtemps. 
            En principe, calculez 2 minutes de chaque côté.
            Une fois écoulé ce temps, vous pouvez réduire la température du feu à la moitié et le laisser un peu plus de temps de cuisson pour le poisson. 
            Etant donné que le saumon est un poisson gras , il va cuire dans ses jus ou dans sa propre graisse.
            Une fois les pavés de saumon prêts, retirez-les de la poêle ou planche, et déposez chacun sur une assiette.
            Coupez le citron et exprimez chaque moitié sur chaque pavé, pour l’asperger avec le jus, de manière généreuse.',
             7, 
             'Moyen', 
             3, 
             'saumon_grillé.jpg'),

             ('SOUPE POMMES DE TERRE', 
            ' 5 oignons
            4 pommes de terre
            3 c. à soupe de sucre en poudre
            1 c. à soupe de maïzena
            50 cl bouillon de légumes
            125 g fromage râpé
            25 g beurre
            Sel, poivre', 
            ' Une recette nature et onctueuse, qui revisite la préparation des pommes de terre dans un potage relevé de cerfeuil, avec la douceur incomparable née de la crème fleurette et du bouillon de volaille ',
            'Pelez et émincez les oignons. Épluchez et coupez les pommes de terre en cubes.
            Faites dorer 10 min en mode dorer les oignons avec le sucre dans le beurre.
            Mélangez avec la maïzena.
            Ajoutez les pommes de terre, le bouillon de légumes, le bouillon de légumes, salez et poivrez puis lancez la cuisson sous pression pour 8 min.
            Placez la soupe dans des assiettes creuses, servez avec le fromage râpé.',
             35, 
             'Difficile', 
             3, 
             'soupe-potato.jpg'),

             ('VERRINE  DE FRAISES AUX SPECULOS', 
            '300g de fraises
            300g de fromage blanc
            1 paquert de spéculos', 
            ' Délicieux, très frais avec des saveurs qui se marient très bien. ',
            'Mixez puis déposez la moitié des spéculoos au fond de chaque verrine.
            Recouvrez de fromage blanc sur environ 3 cm de hauteur.
            Mixez les fraises (sauf 2) et répartissez-les dans chaque verrine.
            Recouvrez avec le reste des spéculos puis terminez par 1/2 fraise.
            Mettez au frais avant de servir.',
             20, 
             'Très facile', 
             9, 
             'speculos_fraise.jpg'),


             ('TARTE AUX POMMES', 
            ' Pâte sablée,
            Pâte sablée 1 rouleau,
            Pomme Golden 3,
            Oeuf 3,
            Sucre 3 c à s,
            Crème liquide 20 cl,
            Cannelle 1 pincée,
            Sucre vanillé 1 sachet', 
            ' Découvrez cette recette de tarte aux pommes, grand classique des tartes sucrées française ! 
            Succombez à ces pommes fondantes sur une pâte sablée croustillante. ',
            'Déroulez, étalez et piquez la pâte dans un moule à tarte. 
            Pelez, videz et coupez en fines tranches les pommes.
            Posez-les sur la pâte en rosace.
            Dans un saladier, battez les œufs avec le sucre, puis ajoutez la crème et la cannelle. Versez le mélange sur les pommes.
            Mettez au four à 210°C (thermostat 7) pour 40 minutes environ. 
            Vers la fin de la cuisson, répartissez sur la tarte le sucre vanillé et remettez au four pour caramélisé.',
             35, 
             'Facile', 
             3, 
             'tarte-pommes.jpg'),

             ('FAJITAS AU POULET', 
            ' 2 poivrons, rouge ou jaune de préférence, coupés en lanières,
            60 ml (1/4 tasse) d’huile d’olive,
            2 à 3 oignons, émincés,
            15 ml (1 c. à soupe) de beurre,
            2 demi-poitrines de poulet désossées et sans la peau, émincées,
            15 ml (1 c. à soupe) d’assaisonnement au chili,
            5 ml (1 c. à thé) d’origan séché,
            8 tortillas moyennes,
            Sel et poivre,
            Garnitures au choix,
            Tomates en dés,
            Guacamole du commerce ou maison,
            Salsa du commerce,
            Crème sure,
            Cheddar orange fort râpé,
            Quartiers de lime,
            Coriandre fraîche', 
            ' Découvrez notre recette de fajitas au poulet et aux légumes, pour un repas croustillant et plein de bonne humeur ! ',
            'Dans une grande poêle à feu moyen, dorer les poivrons dans 15 ml (1 c. à soupe) de l’huile. 
            Saler et poivrer. 
            Réserver sur une assiette.
            Dans la même poêle, caraméliser les oignons dans 15 ml (1 c. à soupe) d’huile et le beurre. 
            Saler et poivrer. 
            Réserver avec les poivrons.
            Dans la même poêle, dorer le poulet dans le reste de l’huile avec les épices.
            Saler et poivrer. 
            Remettre les légumes réservés dans la poêle. 
            Poursuivre la cuisson 1 minute en remuant.
            Retirer la poêle du four. 
            Y verser la préparation à fajitas.',
             35, 
             'Difficile', 
             8, 
             'tortilla.jpg'),

             ('POIVRON FARCIS AU BOEUF', 
            ' 600 g Steaks hachés,
            4 Poivrons,
            2 échalotes,
            1 Petit Oignon,
            2 gousse(s) Ail,
            bouquet(s) Persil,
            bouquet(s) Ciboulette,
            c. à café Paprika,
            1 Oeuf,
            2 c. à soupe Chapelure,
            Sel,
            Poivre', 
            ' Changez des traditionnelles tomates farcies au porc. Confectionnez de beaux poivrons farcis à la viande de bœuf. 
            Agrémenté d’herbes fraîches, d’oignon, d’échalote et d’ail, le bœuf haché se parfumera délicatement. ',
            'etapes',
             90, 
             'Difficile', 
             3, 
             'poivron-farci.jpg');
            

COMMIT;