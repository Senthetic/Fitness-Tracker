const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {

    },
    exercises: [{

        type: {
            type: String,
            trim: true,
            required: "Need exercise type"

        },
        name:{
            type: String,
            trim: true,
            required: "Need exercise name"
        },
        duration:{
            type: Number,
            trim: true,
            required: "Need exercise type"
        },
        weight:{
            type: String,
            trim: true,
            
        },
        reps:{
            type: String,
            trim: true,
            
        },
        sets:{
            type: String,
            trim: true,
           
        },
        distance:{
            type: String,
            trim: true,
        }
    }
]
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;