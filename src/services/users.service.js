import Service from "./service.js";
//import usersManager from "../data/memory/UserManager.memory.js";
//import usersManager from "../data/fs/UserManager.fs.js"
import usersManager from "../data/mongo/UsersManager.mongo.js";

const usersService = new Service(usersManager);
export const { createService, readService, paginateService, readOneService, updateService, destroyService } = usersService;