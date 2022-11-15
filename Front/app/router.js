
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
const userMiddleware = require('./middlewares/userMiddleware');

router.use(userMiddleware.sessionVerification);

router.get('/', mainController.homePage);

router.get('/test', mainController.testPage);

router.get('/recettes', mainController.recipesPage);
router.get('/recettes/:id/:title', mainController.recipeDetailsPage);

router.get('/connexion', userController.loginPage);
router.post('/connexion', userController.loginAction);


router.get('/presentation', mainController.presentationPage);
router.get('/cgu', mainController.cguPage);
router.get('/contact', mainController.contactPage);

router.get('/admin/dashboard', userController.dashboardPage);
router.get('/admin/ajouterunerecette', mainController.recipeFormPage);
router.post('/admin/ajouterunerecette', upload.single('uploaded_file'), mainController.addNewRecipe);

router.get('/deconnexion', userController.disconnect);

module.exports = router;