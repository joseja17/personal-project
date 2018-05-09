module.exports = {

    create: (req, res) => {
        let newAdventure = {
            location: req.body.location,
            title: req.body.title,
            date: req.body.date,
            details: req.body.details,
            images: req.body.images,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            id: req.user.id
        }
        const db = req.app.get('db');
        db.create_adventures([newAdventure.location,
        newAdventure.title,
        newAdventure.date,
        newAdventure.details,
        newAdventure.images,
        newAdventure.latitud,
        newAdventure.longitud,
        newAdventure.id
        ]).then(resp => {
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
        const db = req.app.get('db');
        db.delete_adventures([req.params.id]).then(resp => {
            res.status(200).send(resp)
        })
    }
}