import conf from "../conf/conf.js";
import { Client, ID, Databases, Query, Storage } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteprojectid);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //Post related services
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    //Slug is our unique ID
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (err) {
      console.error("Create post me errror aaya hai: ", err);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (err) {
      console.error("Update post me errror aaya hai: ", err);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        slug
      );

      return true;
    } catch (err) {
      console.error("Delete post me errror aaya hai: ", err);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        slug
      );
    } catch (err) {
      console.error("Get post me errror aaya hai: ", err);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        queries
      );
    } catch (err) {
      console.error("Get posts me errror aaya hai: ", err);
      return false;
    }
  }

  //File upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketid,
        ID.unique(),
        file
      );
    } catch (err) {
      console.error("Upload file me errror aaya hai: ", err);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketid, fileId);
      return true;
    } catch (err) {
      console.error("Delete file me errror aaya hai : ", err);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketid, fileId);
  }
}

const service = new Service();

export default service;
