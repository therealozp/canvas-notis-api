const getCourses = async () => {
	const courses = await fetch(process.env.BASE_URL + '/courses', {
		headers: {
			Authorization: `Bearer ${process.env.AUTH_KEY}`,
		},
	});
	return courses.json();
};

const getActiveCourses = async () => {
	const courses = await getCourses();
	const activeCourses = [...courses].filter((course) => {
		if (!course.access_restricted_by_date) {
			const endDate = new Date(course.end_at);
			const today = new Date();
			return endDate > today;
		} else {
			return false;
		}
	});
	return activeCourses;
};

exports.getCourses = getActiveCourses;
