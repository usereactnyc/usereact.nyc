const { parse } = require('querystring');
const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    var formString = event.body;
    if (event.isBase64Encoded) {
      formString = Buffer.from(formString, 'base64').toString()
    }
    const formData = parse(formString)
    const email = formData.email.trim();
    const baseURL = "https://slack.com/api/users.admin.invite"
    const toSlack = `email=${encodeURIComponent(email)}&token=${process.env.SLACK_LEGACY_TOKEN}&set_active=true`;
    const response = await axios.get(`${baseURL}?${toSlack}`)
    console.log(response.data);
    if (response.status !== 200) {
      return { statusCode: 500, body: "error with slack api" }
    } else {
      return {
        statusCode: 303,
        headers : {
          Location : `/#invited=${email}`
        },
        body: `Invited ${email}, check your email.`
      }
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
