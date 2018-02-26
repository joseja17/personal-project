module.exports = {

    create: (req, res) => {
        console.log(req.body)
        
        let newAdventure = {
            location: req.body.location,
            title: req.body.title,
            date: req.body.date,
            details: req.body.details,
            images: req.body.images,
            latitud: req.body.latitud,
            longitud: req.body.longitud
        }
        const db = req.app.get('db');
        db.create_adventures([newAdventure.location,
        newAdventure.title,
        newAdventure.details,
        newAdventure.date,
        newAdventure.images,
        newAdventure.latitud,
        newAdventure.longitud]).then(resp => {
            res.status(200).send(resp)
        })
    },

    read: (req, res) => {
        const db = req.app.get('db');
        db.get_adventures().then(resp => {
            res.status(200).send(resp)
        })
    },

    delete: (req, res) => {


    }



}