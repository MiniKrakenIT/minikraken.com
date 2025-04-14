import logo from '$assets/logo/minikraken-small.svg'

export interface ContactToMiniKrakenData {
	name: string
	email: string
	subject: string
	message: string
}

export const template = (data: ContactToMiniKrakenData) => `
	<!DOCTYPE html>
	<html>
		<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Contact Form Submission</title>
		</head>
		<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
				<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
						<tr>
								<td style="padding: 40px 20px;">
										<table border="0" cellpadding="0" cellspacing="0" width="100%">
												<tr>
														<td style="background-color: #ffffff; border-radius: 15px 15px 0 0; padding: 20px; text-align: center;">
																<img src="${logo}" alt="Company Logo" style="max-width: 150px; height: auto; display: block; margin: 0 auto 10px;">
																<h2 style="color: #333333; margin: 0; font-size: 20px;">MiniKraken</h2>
														</td>
												</tr>
										</table>
										<table border="0" cellpadding="0" cellspacing="0" width="100%">
												<tr>
														<td style="background-color: #ffffff; padding: 20px 30px;">
																<h1 style="color: #333333; margin: 0; font-size: 24px; text-align: center;">New Contact Form Submission</h1>
														</td>
												</tr>
										</table>
										<table border="0" cellpadding="0" cellspacing="0" width="100%">
												<tr>
														<td style="background-color: #ffffff; padding: 30px; border-radius: 0 0 15px 15px;">
																<table border="0" cellpadding="0" cellspacing="0" width="100%">
																		<tr>
																				<td style="color: #666666; font-size: 16px; padding-bottom: 20px;">
																						You've received a new message from your website contact form:
																				</td>
																		</tr>
																		<tr>
																				<td style="padding: 15px; background-color: #f8f8f8; border-radius: 10px;">
																						<table border="0" cellpadding="0" cellspacing="0" width="100%">
																								<tr>
																										<td style="color: #333333; font-size: 16px; padding-bottom: 10px;">
																												<strong>Name:</strong> ${data.name}
																										</td>
																								</tr>
																								<tr>
																										<td style="color: #333333; font-size: 16px; padding-bottom: 10px;">
																												<strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a>
																										</td>
																								</tr>
																								<tr>
																										<td style="color: #333333; font-size: 16px; padding-bottom: 10px;">
																												<strong>Subject:</strong> ${data.subject}
																										</td>
																								</tr>
																								<tr>
																										<td style="color: #333333; font-size: 16px;">
																												<strong>Message:</strong><br>
																												${data.message}
																										</td>
																								</tr>
																						</table>
																				</td>
																		</tr>
																</table>
														</td>
												</tr>
										</table>
		
										<!-- Footer -->
										<table border="0" cellpadding="0" cellspacing="0" width="100%">
												<tr>
														<td style="padding-top: 20px; text-align: center;">
																<p style="color: #999999; font-size: 12px; margin: 0;">
																		This email was sent from your website's contact form<br>
																		Sent on: ${new Date().toString().replace(' GMT+0200 (Central European Summer Time)', '')}
																</p>
														</td>
												</tr>
										</table>
								</td>
						</tr>
				</table>
		</body>
	</html>
`
