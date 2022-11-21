
const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './static/img/recipes/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, Date.now() + "--" + file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

const mainController = require('./controllers/mainController');
const userController = require('./controllers/userController');
const sessionMd = require('./middlewares/session');
const authorizationMd = require('./middlewares/jwt')

router.use(sessionMd);

router.get('/', mainController.homePage);

router.get('/recettes', mainController.recipesPage);
router.get('/recettes/:id/:title', mainController.recipeDetailsPage);

router.get('/connexion', userController.loginPage);
router.post('/connexion', userController.loginAction);


router.get('/presentation', mainController.presentationPage);
router.get('/cgu', mainController.cguPage);
router.get('/contact', mainController.contactPage);

router.get('/deconnexion', userController.disconnect);

router.use('/admin', authorizationMd);
router.get('/admin/dashboard', mainController.dashboardPage);
router.get('/admin/ajouterunerecette', mainController.recipeFormPage);
router.post('/admin/ajouterunerecette', upload.single('uploaded_file'), mainController.addNewRecipe);
router.get('/admin/supprimerunerecette/:id', mainController.deleteRecipeById);


module.exports = router;