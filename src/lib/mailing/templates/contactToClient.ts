import logo from '$assets/logo/minikraken-small.svg'

interface ContactFormEmailData {
	senderName: string
	messageSubject: string
	messageContent: string
}

export const template = (data: ContactFormEmailData): string => `
	<!DOCTYPE html>
	<html>
		<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Bedankt voor uw bericht</title>
		</head>
		<body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f4f4f4">
				<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px">
						<tr>
								<td style="padding:40px 20px">
										<table border="0" cellpadding="0" cellspacing="0" width="100%">
												<tr>
														<td style="background-color:#ffffff;border-radius:15px 15px 0 0;padding:20px;text-align:center">
																<img src="${logo}" alt="Bedrijfslogo" style="max-width:150px;height:auto;display:block;margin:0 auto 10px">
																<h2 style="color:#333333;margin:0;font-size:20px">MiniKraken</h2>
														</td>
												</tr>
										</table>
										<table border="0" cellpadding="0" cellspacing="0" width="100%">
												<tr>
														<td style="background-color:#ffffff;padding:20px 30px">
																<h1 style="color:#333333;margin:0;font-size:24px;text-align:center">Bedankt voor uw bericht!</h1>
														</td>
												</tr>
										</table>
										<table border="0" cellpadding="0" cellspacing="0" width="100%">
												<tr>
														<td style="background-color:#ffffff;padding:30px;border-radius:0 0 15px 15px">
																<table border="0" cellpadding="0" cellspacing="0" width="100%">
																		<tr>
																				<td style="color:#666666;font-size:16px;padding-bottom:20px">Beste ${data.senderName},<br><br>Bedankt dat u contact met ons heeft opgenomen! We hebben uw bericht ontvangen en zullen zo spoedig mogelijk reageren.</td>
																		</tr>
																		<tr>
																				<td style="padding:15px;background-color:#f8f8f8;border-radius:10px">
																						<table border="0" cellpadding="0" cellspacing="0" width="100%">
																								<tr>
																										<td style="color:#333333;font-size:16px;padding-bottom:10px"><strong>Uw onderwerp:</strong> ${data.messageSubject}</td>
																								</tr>
																								<tr>
																										<td style="color:#333333;font-size:16px;padding-bottom:10px"><strong>Uw bericht:</strong><br>${data.messageContent}</td>
																								</tr>
																								<tr>
																										<td style="color:#333333;font-size:16px"><strong>Verzonden:</strong> ${new Date().toString().replace(' GMT+0200 (Central European Summer Time)', '')}</td>
																								</tr>
																						</table>
																				</td>
																		</tr>
																		<tr>
																				<td style="color:#666666;font-size:16px;padding-top:20px">Ons team reageert doorgaans binnen de 24h (gedurende werkdagen). Voor dringende zaken kan u ons bellen op <a href="phone:+32474773567">+32 4 47 77 35 67</a>.</td>
																		</tr>
																</table>
														</td>
												</tr>
										</table>
										<table border="0" cellpadding="0" cellspacing="0" width="100%">
												<tr>
														<td style="padding-top:20px;text-align:center">
																<p style="color:#999999;font-size:12px;margin:0">MiniKraken | <a href="https://minikraken.com">minikraken.com</a><br>Dit is een geautomatiseerde bevestigingsemail</p>
														</td>
												</tr>
										</table>
								</td>
						</tr>
				</table>
		</body>
	</html>
`
