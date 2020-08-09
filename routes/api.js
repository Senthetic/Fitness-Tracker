 const db = require("../models");

 module.exports = (app)=>{
  app.get("/api/workouts", (req, res)=>{
     db.Workout.find().then((results)=>{
         res.json(results);
     })
  })

  app.get("/api/workouts/range", (req, res)=>{
    db.Workout.find().then(response => {
   res.json(response);
})
})

app.post("/api/workouts", (req, res)=>{
    db.Workout.create(req.body).then((response)=>{
        res.json(response);
    })
})

app.put("/api/workouts/:id", (req, res)=>{
    db.Workout.findByIdAndUpdate({_id: req.params.id}, {$push:{exercises:req.body}}, {"new": true}).then((response)=>{
        res.json(response)
    })
})


}