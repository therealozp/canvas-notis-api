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

exports.getAssignmentsByCourseID = getAssignmentsByCourseID;
