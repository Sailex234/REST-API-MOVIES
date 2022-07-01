const router = require('express').Router(); 

//model
const {movie} = require('../database/db');

//findAll
router.get('/', (req, res)=>{
    movie.findAll({})  
    .then(result => res.json(result))   
    .catch(error =>{   
        res.status(412).json({msg: error.message}); 
    })
})

//create
router.post('/', (req, res)=>{
    movie.create(req.body)
    .then(result => res.json(result))
    .catch(error =>{
        res.status(412).json({msg: error.message});
    });

})

//findOne
router.get('/:id', (req, res)=>{
    movie.findOne({where: {id: req.params.id}})
    .then(result => res.json(result))
    .catch(error =>{
        res.status(412).json({msg: error.message});
    });
})

//update
router.put('/:id', (req, res)=>{
    movie.update(req.body, {where: {id: req.params.id}})
    .then(result => res.sendStatus(204))
    .catch(error =>{
        res.status(412).json({msg: error.message});
    });
})

//destroy
router.delete('/:id', (req, res)=>{
    movie.destroy({where: {id: req.params.id}})
    .then(result => res.sendStatus(204))
    .catch(error =>{
        res.status(412).json({msg: error.message});
    }); 
})

module.exports = router; 