import { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Test Case Docs - Aditya",
      version: "1.0.0"
    },
  },
  apis: ["C:/Users/Asus/Downloads/Eigen/Test-Case/Backend/src/controllers/entrypoint.ts"],
}

export default swaggerOptions