const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// dotenv.config();

const sendEmail = async (receiver, subject, content) => {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.MAIL_NAME,
			pass: process.env.MAIL_AUTH,
		},
	});

	const info = await transporter.sendMail({
		from: `Your Canvas Notifier ${process.env.MAIL_NAME}`,
		to: receiver,
		subject: subject,
		text: content,
	});

	console.log(info.messageId);
};

exports.sendEmail = sendEmail;
