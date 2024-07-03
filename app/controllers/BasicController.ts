class BasicController {

  public async index(request, response) {
    return response.inertia("home")
  }

  public async indexInertia(request, response) {
    return response.inertia("home")
  }

}


export default new BasicController();

