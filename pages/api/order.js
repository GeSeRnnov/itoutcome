// const nodemailer = require("nodemailer");
const path = require('path')
require('dotenv').config(path.resolve(__dirname, '../../.env'))
const sgMail = require('@sendgrid/mail')
// const apiKey = 'SG.2IP/eLPLVRZu_CCPN8Msyqw.6a4lfyErtzt3XoNvsY3pd_9_S4ZFFT0hEhv3V1RT8cY'
// const apiKey = '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'
const apiKey = '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'
				// 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
// const apiKey = 'apikey'

// const apiKey = process.env.SENDGRID_API_KEY
sgMail.setApiKey(apiKey)

export default async(req, res) => {
	try{
		// create reusable transporter object using the default SMTP transport
		// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

		// let transporter = nodemailer.createTransport({
		// // host: "smtp.ethereal.email",
		// host: "smtp.sendgrid.net",
		// port: 587,
		// // port: 465,
		// secure: false, // true for 465, false for other ports
		// // secure: true, // true for 465, false for other ports
		// auth: {
		// // user: testAccount.user, // generated ethereal user
		// user: 'apikey', // generated ethereal user
		// // pass: testAccount.pass, // generated ethereal password
		// pass: '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', // generated ethereal password
		// },
		// });

		// const to = 'gesernnov@gmail.com'
		// // const from = 'gesernnov@gmail.com'
		// const from = "villian_2007@mail.ru"
		// // const to = "villian_2007@mail.ru"
		// // send mail with defined transport object
		// let info = await transporter.sendMail({
		// 	// from: '"Fred Foo 👻" <foo@example.com>', // sender address
		// 	from, // sender address
		// 	to, // list of receivers
		// 	subject: "Hello ✔", // Subject line
		// 	text: "Hello world?", // plain text body
		// 	html: "<b>Hello world?</b>", // html body
		// });

		// console.log("Message sent: %s", info.messageId);
		// // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

		// // Preview only available when sending through an Ethereal account
		// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
		// // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

		const to = 'gesernnov@gmail.com'
		const from = "villian_2007@mail.ru"
		const msg = {
			to,
			from,
			subject: 'Sending with SendGrid is Fun',
			text: 'and easy to do anywhere, even with Node.js',
			html: '<strong>and easy to do anywhere, even with Node.js</strong>',
		}
		// sgMail
		// 	.send(msg)
		// 	.catch(err=> {
		// 		console.log('err!!!', err)
		// 		// res.json({ error2: err, msg})
		// 	})
		// const sendMail = async () => {
		//   try {
		    const sender = await sgMail.send(msg);
		    // console.error('sender: ');

		//   } catch (error) {
		//     console.error('Catch error!: ', error);

		//     if (error.response) {
		//       console.error('error.response.body', error.response.body)
		//     }
		//   }
		// }

		// sendMail()

		res.statusCode = 200
		res.json({ msg, apiKey, isOk: true })
	} catch(err) {
		console.log('error: ', err);
		res.json({ error: err})
	}

}
