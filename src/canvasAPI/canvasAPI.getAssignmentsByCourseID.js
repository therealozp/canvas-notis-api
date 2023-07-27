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

const graphQLAssignmentQuery = async (id) => {
	const query = `
		query assignments($courseID: ID!) {
			course(id: $courseID) {
				name
				assignmentsConnection {
					nodes {
						dueAt
						createdAt
						lockAt
						unlockAt
						name
						expectsSubmission
						expectsExternalSubmission
						# discussion {
						# 	subscribed
						# }
						# hasSubmittedSubmissions
						# gradesPublished
					}
				}
			}
		}`;

	// console.log(query);
	const variables = {
		courseID: id,
	};

	const response = await fetch(process.env.GRAPHQL_URL, {
		method: 'POST',
		body: JSON.stringify({
			query: query,
			variables: variables,
		}),
		headers: {
			Authorization: `Bearer ${process.env.AUTH_KEY}`,
			// must have content-type to fetch from graphql
			'Content-Type': 'application/json',
		},
	});

	return response.json();
};

exports.getAssignmentsByCourseID = getAssignmentsByCourseID;
exports.getAssignmentsByCourseIDGraphQL = graphQLAssignmentQuery;
