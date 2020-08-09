 const router = require("express").Router();
 const Workout = require("../models");

  router.get("/api/workouts/range", (req, res) => {
   Workout.find({})
     //.sort({ date: -1 })
     .then(dbWorkout => {
         console.log("Do you work out",dbWorkout);
       res.json(dbWorkout);
     })
     .catch(err => {
       res.status(400).json(err);
     });
 });

router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

 module.exports = router;
