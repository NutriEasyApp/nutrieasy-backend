const { ParameterDao } = require("../../dao/parameter.dao");

class ParameterController {
  constructor() {
    this.dao = new ParameterDao();
  }

  async getAllParameters(request, response) {
    await this.dao.all()
      .then(data => response.send(data))
      .catch(err => response.status(404).send({ error: 404, message: `Could not find parameters ${JSON.stringify(err)}` }))
  }

  async updateParameter(request, response) {
    await this.dao.set(request.body.name, request.body.key, request.body.value)
      .then(data => response.send(data))
      .catch(err => response.status(404).send({ error: 404, message: `Could not update parameter ${JSON.stringify(err)}` }))
  }
}

module.exports = { ParameterController }
