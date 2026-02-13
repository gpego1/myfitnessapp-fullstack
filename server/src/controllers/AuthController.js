import AuthService from "../services/AuthService.js";

const AuthController = {
  async register(req, res) {
    try {
      const user = await AuthService.register(req.body);
      await user.save(user);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async login(req, res) {
    try {
      const result = await AuthService.login(
        req.body.email,
        req.body.password
      );

      return res.json(result);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
};

export default AuthController;
