const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground"

const { EMAIL,MAILING_ID,MAILING_REFRESH,MAILING_SECRET } = process.env;

const auth = new OAuth2(
  MAILING_ID,
  MAILING_SECRET,
  MAILING_REFRESH,
  oauth_link
);

exports.sendVerificationEmail = (email,name,url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type:"OAuth2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "HackConnect email Verification",
    html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#7f3b98"><img src="assets/icon.png" alt="" style="width:50px"><span>Action requise : Activate your HackConnect account</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#4a004a;font-size:17px;font-family:Roboto"><span>Hello ${name}</span><div style="padding:20px 0"><span style="padding:1.5rem 0">You recently created an account on HackConnect. To complete your registration, please confirm your account.</span></div><a href=${url} style="width:200px;padding:10px 15px;background:#43005b;color:#fff;text-decoration:none;font-weight:600">Confirm Your Account</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0;color:#540065">HackConnect allows you to stay in touch with all your friends, once refistered on HackConnect, you can share photos, organize events and much more.</span></div></div>`,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if(err) return err;
    return res;
  });
};


exports.sendResetCode = (email,name,code) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type:"OAuth2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Reset HackConnect Password",
    html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#7f3b98"><img src="assets/icon.png" alt="" style="width:50px"><span>Action requise : Activate your HackConnect account</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#4a004a;font-size:17px;font-family:Roboto"><span>Hello ${name}</span><div style="padding:20px 0"><span style="padding:1.5rem 0">You recently created an account on HackConnect. To complete your registration, please confirm your account.</span></div><a href=${url} style="width:200px;padding:10px 15px;background:#43005b;color:#fff;text-decoration:none;font-weight:600">Confirm Your Account</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0;color:#540065">HackConnect allows you to stay in touch with all your friends, once refistered on HackConnect, you can share photos, organize events and much more.</span></div></div>`,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if(err) return err;
    return res;
  });
};