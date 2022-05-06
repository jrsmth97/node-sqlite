module.exports = {
    paths:{
        '/user-page':{
            get: {
                tags:['User page'],
                security: [
                    {
                      ApiKeyAuth: []
                    }
                ],
                description: 'user only page',
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