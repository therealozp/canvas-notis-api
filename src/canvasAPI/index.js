const getCourses = require('./canvasAPI.getCourses.js');
const getCourseByID = require('./canvasAPI.getCourseByID.js');
const getAssignmentsByCourseID = require('./canvasAPI.getAssignmentsByCourseID.js');

exports.getCourses = getCourses.getCourses;
exports.getCourseByID = getCourseByID.getCourseByID;
exports.getAssignmentsByCourseID =
	getAssignmentsByCourseID.getAssignmentsByCourseID;
