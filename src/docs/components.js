module.exports = {
  components: {
    schemas: {
      AdminRegister: {
        type: "object", 
        properties: {
          username: {
            type: "string", 
            description: "username", 
            example: "admin", 
          },
          password: {
            type: "string", 
            description: "admin password", 
            example: "password", 
          },
        },
      },
      AdminLogin: {
        type: "object", 
        properties: {
          username: {
            type: "string",
            description: "username", 
            example: "admin",
          },
          password: {
            type: "string",
            description: "admin password", 
            example: "password", 
          },
        },
      },
      UserRegister: {
        type: "object", 
        properties: {
          username: {
            type: "string", 
            description: "username", 
            example: "user", 
          },
          password: {
            type: "string", 
            description: "User password", 
            example: "password", 
          },
        },
      },
      UserLogin: {
        type: "object", 
        properties: {
          username: {
            type: "string",
            description: "username", 
            example: "user",
          },
          password: {
            type: "string",
            description: "user password", 
            example: "password", 
          },
        },
      },
    },
    securitySchemes: {
        ApiKeyAuth: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
        },
    }
  }
}
