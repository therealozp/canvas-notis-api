const getCourseByID = async (id) => {
	const course = await fetch(process.env.BASE_URL + `/courses/${id}`, {
		headers: {
			Authorization: `Bearer ${process.env.AUTH_KEY}`,
		},
	});
	return course.json();
};

exports.getCourseByID = getCourseByID;
