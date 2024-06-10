import User from "./models/user.models.js"
import Manager from "./Manager.mongo.js";

const usersManager = new Manager(User);
export default usersManager;