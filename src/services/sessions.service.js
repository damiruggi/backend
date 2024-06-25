import Service from "./service.js";
import Manager from "../data/mongo/Manager.mongo.js";

const managerService = new Service(Manager);
export const {
  createService,
  readService,
  paginateService,
  readOneService,
  updateService,
  destroyService,
} = managerService;
