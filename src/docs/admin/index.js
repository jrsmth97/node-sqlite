module.exports = {
    paths:{
        '/admin-page':{
            get: {
                tags:['Admin page'],
                security: [
                    {
                      ApiKeyAuth: []
                    }
                ],
                description: 'Admin only page',
                responses:{
                    '200':{
                        description: "Authorized"
                    },
                    '401':{
                        description: "Unauthorized error"
                    },
                    '403':{
                        description: "Forbidden access error"
                    },
                }
            }
        },
    }
}