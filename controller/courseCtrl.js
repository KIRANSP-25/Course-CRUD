const Course = require('../model/courseModel');


const courseCtrol = {
    getCourse: async (req,res) => {
        try {
            const courses = await Course.find();
            res.json(courses);
        } catch (err) {
            return res.status(500).json({ msg: err.message});
        }
    },
    createCourse: async function(req,res) {
        try {
            console.log(req.body);
            const { id, name, fee, duration }= req.body;
            const course=  await Course.findOne({ id });
            if(course) return res.status(400).json({ msg: "This course already exists"});

            const newCourse = new Course({id,name,fee,duration});
            await newCourse.save();
            res.json({ msg: "Created new course"});
            
        } catch (err) {
            return res.status(500).json({ msg: err.message});
        }
    },
    updateCourse: async (req,res) => {
        try {

            const { id,name,fee,duration} = req.body;
            await Course.findOneAndUpdate({ _id: req.params.id }, {
                id,
                name,
                fee,
                duration
            });
            res.json({ msg: "updated a course"});
            
        } catch (err) {
            return res.status(500).json({ msg: err.message});
        }
    },
    getSingle: async (req,res) => {
        try {
           
            const course = await Course.findById({ _id: req.params.id });
                res.json(course);
        } catch (err) {
            return res.status(500).json({ msg: err.message});
        }
    },
    deleteCourse: async (req,res) => {
        try {
            await Course.findByIdAndDelete(req.params.id);
                res.json({ msg: "deleted a course"});
        } catch (err) {
            return res.status(500).json({ msg: err.message});
        }
    }
};


module.exports = courseCtrol;