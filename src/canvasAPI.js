const getCourses = async () => {
	const courses = await fetch(process.env.BASE_URL + '/courses', {
		headers: {
			Authorization: `Bearer ${process.env.AUTH_KEY}`,
		},
	});
	return courses.json();
};

const getCourseByID = async (id) => {
	const course = await fetch(process.env.BASE_URL + `/courses/${id}`, {
		headers: {
			Authorization: `Bearer ${process.env.AUTH_KEY}`,
		},
	});
	return course.json();
};

const getAssignmentsByCourseID = async (id) => {
	const assignments = await fetch(
		process.env.BASE_URL + `/courses/${id}/assignments`,
		{
			headers: {
				Authorization: `Bearer ${process.env.AUTH_KEY}`,
			},
		}
	);
	return assignments.json();
};

exports.getCourse = getCourses;
exports.getCourseByID = getCourseByID;
