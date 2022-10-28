const client = require("./dbClient");

const dataMapper = {

    async getRecepies(req, res) {
        try{
            const result = await client.query('SELECT * FROM recipes');
            console.log(result.rows);
            res.json(result.rows);
        }
        catch(err){
            console.error(err);
        }


        // if(!result && !result.rows){
        //     return null;
        // }
        // else{
        //     return result.rows[0];
        // }
    },
};

module.exports = dataMapper;