import Post from "./Post.js";
import fileService from "./FileService.js";

class PostService {
  async create(post, picture) {
    const fileName = fileService.saveFile(picture)
    const createdPost = await Post.create({...post, fileName});
    return createdPost;
  }
  async getAll() {
    const post = await Post.find();
    return post;
  }
  async getOne(id) {
    if (!id) {
      throw new Error("Id не указан");
    }
    const post = await Post.findById(id);
    return post;
  }

  async update(post) {
    if (!post._id) {
      throw new Error("Id не указан");
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }
  async delete(id) {
    console.log(id);
    if (!id) {
      throw new Error("Id не указан");
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
