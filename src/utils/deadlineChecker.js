const deadlineChecker = (assignmentsList) => {
	let tempList = [...assignmentsList].filter((assignment) => {
		const dueDate = new Date(assignment.dueAt);
		const dayLimit = 2; // 1 day
		const today = new Date(1688111782);
		const difference = dueDate.getTime() - today.getTime();
		const differenceInDays = difference / (1000 * 3600 * 24);
		return differenceInDays <= dayLimit && differenceInDays >= 0;
	});

	console.log(tempList);
};

exports.deadlineChecker = deadlineChecker;
