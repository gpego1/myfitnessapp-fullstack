import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "FitForce API",
            version: "1.0.0",
            description: "FitForce server documentation"
        },
        servers: [
            {
                url: process.env.SERVER_URL
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            },

            schemas: {
                Login: {
                    type: "object",
                    required: ["email", "password"],
                    properties:{
                        email: { type: "string", example: "user@email.com"},
                        password: { type: "string", example: "123456" }
                    }
                },
                User: {
                    type: "object",
                    properties: {
                        id: { type: "string"},
                        name: { type: "string" },
                        email: { type: "string" },
                        role: { type: "string", example: "USER"}
                    }
                }
            }
        },
        security: [{ bearerAuth: [] }]
    },
    apis: ["./src/routes/**/*.js"]
};

export const swaggerSpec = swaggerJSDoc(options);