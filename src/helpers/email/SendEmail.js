const nodemailer = require("nodemailer");
const accountActivationEmailTemplate = require("./templetes/accountActivationTemplate");
const resetPasswordEmailTempalte = require("./templetes/resetPasswordTemplate");
const { GMAIL_CONFIGURATIONS, EMAIL_TEMPLETES } = require("./Configs");

const produceEmailData = (user, token, TEMPLETE) => {
  // console.log("user", user);
  let emailData = {
    from: "Alzhelps " + GMAIL_CONFIGURATIONS.EMAIL_ADRESSE,
    to: user.email
  };
  if (TEMPLETE == EMAIL_TEMPLETES.ACCOUNT_ACTIVATION) {
    emailData["subject"] = "Account Activation Lass";
    emailData["html"] = accountActivationEmailTemplate(
      user.firstName,
      user.lastName,
      token
    );
  } else if (TEMPLETE == EMAIL_TEMPLETES.RESET_PASSWORD) {
    emailData["subject"] = "Reset Password Lass";
    emailData["html"] = resetPasswordEmailTempalte(
      user.firstName,
      user.lastName,
      token
    );
  }
  return emailData;
};

function sendEmail(user, token, TEMPLETE) {
  // console.log("email", GMAIL_CONFIGURATIONS);
  let transporter = nodemailer.createTransport({
    service: GMAIL_CONFIGURATIONS.EMAIL_SERVICE,
    auth: {
      user: GMAIL_CONFIGURATIONS.EMAIL_ADRESSE,
      pass: GMAIL_CONFIGURATIONS.EMAIL_PASSWORD
    }
  });

  const emailData = produceEmailData(user, token, TEMPLETE);

  transporter.sendMail(emailData, function(err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
}

module.exports = sendEmail;
