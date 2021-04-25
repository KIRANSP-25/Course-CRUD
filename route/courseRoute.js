const router = require('express').Router();

const courseCtrl = require('../controller/courseCtrl');


router.route('/').get(courseCtrl.getCourse);
router.route('/').post(courseCtrl.createCourse);

router.route('/:id')
    .get(courseCtrl.getSingle)
    .put(courseCtrl.updateCourse)
    .delete(courseCtrl.deleteCourse);


module.exports = router;