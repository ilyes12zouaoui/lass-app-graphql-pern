const emailTemplate = (firstName, lastName, token) => {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
	<!--[if gte mso 9]>
	<xml>
		<o:OfficeDocumentSettings>
		<o:AllowPNG/>
		<o:PixelsPerInch>96</o:PixelsPerInch>
		</o:OfficeDocumentSettings>
	</xml>
	<![endif]-->
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="format-detection" content="date=no" />
	<meta name="format-detection" content="address=no" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Noto+Serif:400,400i,700,700i|Raleway:400,400i,700,700i" rel="stylesheet" />
    <!--<![endif]-->
	<title>Email Template</title>
	<!--[if gte mso 9]>
	<style type="text/css" media="all">
		sup { font-size: 100% !important; }
	</style>
	<![endif]-->
	

	<style type="text/css" media="screen">
		/* Linked Styles */
		body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#fff; -webkit-text-size-adjust:none }
		a { color:rgb(33, 173, 228); text-decoration:none }
		p { padding:0 !important; margin:0 !important } 
		img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
		.mcnPreviewText { display: none !important; }
		.text-footer a { color: #7e7e7e !important; }
		.text-footer2 a { color: #c3c3c3 !important; }
		
		/* Mobile styles */
		@media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
			.mobile-shell { width: 100% !important; min-width: 100% !important; }
			
			.m-center { text-align: center !important; }
			.m-left { margin-right: auto !important; }
			
			.center { margin: 0 auto !important; }
			
			.td { width: 100% !important; min-width: 100% !important; }

			.m-br-15 { height: 15px !important; }
			.m-separator { border-bottom: 1px solid #000000; }
			.small-separator { border-top: 1px solid #333333 !important; padding-bottom: 20px !important; }

			.m-td,
			.m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }

			.m-block { display: block !important; }

			.fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }
			
			.content-middle { width: 140px !important; padding: 0px !important; }

			.text-white { font-size: 12px !important; }

			.h2-white { font-size: 46px !important; line-height: 50px !important; }
			.h3-white { font-size: 24px !important; line-height: 30px !important; }

			.mpb15 { padding-bottom: 15px; }
			.content { padding: 20px 15px !important; }

			.section-inner { padding: 0px !important; }

			.content-2 { padding: 30px 15px 30px 15px !important; }
			.pt30 { padding-top: 20px !important; }
			.main { padding: 0px !important; }
			.section { padding: 30px 15px 30px 15px !important; }
			.section2 { padding: 0px 15px 30px 15px !important; }
			.section4 { padding: 30px 15px !important; }
			.section-inner2 { padding: 30px 15px !important; }

			.separator-outer { padding-bottom: 30px !important; }
			.section3 { padding: 30px 15px !important; }
			.mpb10 { padding-bottom: 10px !important; padding-top: 5px !important; }
			.preheader { padding-bottom: 20px !important; } 

			.column,
			.column-dir,
			.column-top,
			.column-empty,
			.column-empty2,
			.column-bottom,
			.column-dir-top,
			.column-dir-bottom { float: left !important; width: 100% !important; display: block !important; }
			.column-empty { padding-bottom: 30px !important; }
			.column-empty2 { padding-bottom: 10px !important; }
			.content-spacing { width: 15px !important; }
		}
	</style>
</head>
<body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#fff; -webkit-text-size-adjust:none;">
	<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fff">
		<tr>
			<td align="center" valign="top">
				<!-- Main -->
				<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">		<tr>
						<td align="center" class="main" >
            <table width="650" border="0" style="padding:50px 0 50px 0;" cellspacing="0" cellpadding="0" class="mobile-shell">
            <tr>
									<td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
										

										<!-- Header -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
											<tr>
												<td style="padding: 30px 0px 30px 30px;">
													<table width="100%" border="0" cellspacing="0" cellpadding="0" dir="rtl" style="direction: rtl;">
														<tr>
														<th class="column-dir" dir="ltr" width="200" style="padding:0; margin:0; font-weight:normal; direction:ltr;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td class="m-center mpb10" style="text-align:center;"><h1 style="font-size: 38px;color:rgb(33, 173, 228);">IEEE ESPRIT</h1></td>
																	</tr>
																</table>
															</th>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!-- END Header -->

										<!-- Intro -->
										<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:rgb(33, 173, 228)" bgcolor="rgb(33, 173, 228)">
										<tr>
												<th class="column" width="325" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;text-align:center">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tr>
															<td class="content" style="padding:30px 50px;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0">
																	<tr>
																		<td class="text-white pb15" style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px; line-height:20px; text-transform:uppercase; text-align:center; padding-bottom:15px;">Welcome to our family</td>
																	</tr>
																	<tr>
																		<td class="h2-white pb20" style="color:#ffffff; font-family:Arial, sans-serif; font-size:52px; line-height:58px; text-transform:uppercase; font-weight:bold; text-align:center; padding-bottom:20px;">${firstName} <br />${lastName}</td>
																	</tr>
																	<tr>
																		<td class="text4 pb20" style="color:#d2d4ff; font-family:'Raleway', Arial,sans-serif; font-size:14px; line-height:24px; text-align:center; padding-bottom:20px;">Please click the link below to activate your account</td>
																	</tr>
																	<!-- Button -->
																	<tr>
																		<td align="center">
																			<table width="140" border="0" cellspacing="0" cellpadding="0">
																				<tr>
																					<td class="text-button white-button" style="font-family:'Raleway', Arial,sans-serif; font-size:14px; line-height:18px; text-align:center; text-transform:uppercase; padding:10px; background:#ffffff; color:#f54084; font-weight:bold;"><a href="http://localhost:3000/authentication/account-activation/${token}" target="_blank" class="link" style="color:rgb(33, 173, 228); text-decoration:none;"><span class="link" style="color:rgb(33, 173, 228); text-decoration:none;">Activate</span></a></td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																	<!-- END Button -->
																</table>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</table>
										<!-- END Intro -->

								
											</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- END Main -->
			</td>
		</tr>
	</table>
</body>
</html>
`;
};

module.exports = emailTemplate;
