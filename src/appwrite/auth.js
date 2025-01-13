import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteprojectid);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const userAcc = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAcc) {
        //Call method to directly login the user
        return this.login({ email, password });
      } else {
        return userAcc;
      }
    } catch (err) {
      throw err;
    }
  }

  async login({ email, password }) {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (e) {
      throw e;
    }
  }

  async getCurrentUser() {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.account.get();
    } catch (err) {
      console.log("Account get service karne me error aaya hai: ", err);
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (err) {
      console.log("logout service karne me error aaya hai: ", err);
    }
  }
}

const authService = new AuthService();
export default authService;
