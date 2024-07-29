import __dirname from "../../utils.js";

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Tiendamia API",
      description: "Documentation Tiendamia",
    },
  },
  apis: [__dirname + "/src/docs/*yaml"],
};

export default options;
