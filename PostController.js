import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      console.log(req.files)
      const post = await PostService.create(req.body, req.files.picture);
      res.json(post);
    } catch (e) {
      res.status(500).json(e.message);
      console.log(e.message);
    }
  }
  async getAll(req, res) {
    try {
      const post = await PostService.getAll();
      return res.json(post);
    } catch (e) {
      console.log(e.message);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const post = await PostService.getOne(id);
      return res.json(post);
    } catch (e) {
      console.log(e.message);
    }
  }
  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);
      return res.json(updatedPost);
    } catch (e) {
      console.log(e.message);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      const post = await PostController.delete(id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
