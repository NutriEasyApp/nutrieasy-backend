const {
  VerifyCodeService,
} = require('@modules/users/services/VerifyCodeService');

class VerifyCodeController {
  async verify(request, response) {
    const { email, code } = request.body;
    const verifyCodeService = new VerifyCodeService();
    const verify = await verifyCodeService.execute({ email, code });
    return response.status(200).json({ verify });
  }
}

module.exports = { VerifyCodeController };
