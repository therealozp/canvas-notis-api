const getCourses = async () => {
	const courses = await fetch(process.env.BASE_URL + '/courses', {
		headers: {
			Authorization: `Bearer ${process.env.AUTH_KEY}`,
		},
	});
	return courses.json();
};

exports.getCourses = getCourses;
