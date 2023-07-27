// expect this to run when requirement is met (e.g. 2 days until deadline)
const cron = require('node-cron');
const messageGenerator = require('../utils/messageGenerator');
const emailAgent = require('./notification.emailAgent');
const getAssignmentsByCID =
	require('../canvasAPI/canvasAPI.getAssignmentsByCourseID').getAssignmentsByCourseIDGraphQL;
const deadlineTools = require('../utils/deadlineChecker');

const fetchAssignments = async (courseID) => {
	const assignments = await getAssignmentsByCID(courseID);
	const assignmentList = assignments.data.course.assignmentsConnection.nodes;

	return assignmentList;
};

const send = async (courseID, user) => {
	const fetched = await fetchAssignments(courseID);
	const assignmentsList = deadlineTools.deadlineChecker(fetched);

	const message = messageGenerator.generateMessage(assignmentsList, user);
	emailAgent.sendEmail(
		user.email,
		`Finish your ${assignmentsList.length} assignment(s)!`,
		message
	);
	return;
};
const initSend = () => {
	const scheduler = cron.schedule('*/10 * * * *', () => {
		console.log('Sending emails...');
	});
	scheduler.start();
};

exports.sendEmail = send;
exports.fetchAssignments = fetchAssignments;
exports.initSend = initSend;
