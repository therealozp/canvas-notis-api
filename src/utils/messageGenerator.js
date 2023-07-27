const messageGenerator = (assignmentsList, user) => {
	return `
    <html>
        <p>Hello ${user.name}!</p>
        <br />
        <p>Here are your upcoming assignments, please complete them before the due date:</p>
        <br />
        <ul>
            ${assignmentsList.map((assignment) => {
							return `
                <li>
                    <p><span style="font-weight: bold; ">${assignment.name}</span>, due at ${assignment.dueAt}</p>
                </li>
                `;
						})}
        </ul>
        <br />
    </html>
    `;
};

exports.messageGenerator = messageGenerator;
