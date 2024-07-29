import "dotenv/config.js";
import { expect } from "chai";
import supertest from "supertest";
import dao from "../../src/data/dao.factory.js";
const { Product } = dao;