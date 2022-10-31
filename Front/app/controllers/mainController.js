const mainController = {

    async homePage(req, res) {
        try {
            const quizzes = await Quiz.findAll({
                include: ['author']
        });
            res.render('home', {quizzes})
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = mainController;