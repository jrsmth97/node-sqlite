module.exports = {
    paths:{
        '/api/auth/admin-register':{
            post:{
                tags:['Register admin'],
                description: "Register admin",
                security: [],
                parameters:[],
                requestBody: {
                    content:{
                        'application/json': {
                            schema:{
                                $ref:'#/components/schemas/AdminRegister'
                            }
                        }
                    }
                },
                responses:{
                    '200':{
                        description: "Success register"
                    },
                    '400':{
                        description: "Invalid json body format"
                    },
                    '401':{
                        description: "Unauthorized error"
                    },
                    '403':{
                        description: "Forbidden access error"
                    },
                    '500':{
                        description: 'Server error'
                    }
                }
            }
        },

        '/api/auth/admin-login':{
            post:{
                tags:['Admin login'],
                description: "Admin login",
                security: [],
                parameters:[],
                requestBody: {
                    content:{
                        'application/json': {
                            schema:{
                                $ref:'#/components/schemas/AdminLogin'
                            }
                        }
                    }
                },
                responses:{
                    '200':{
                        description: "Success login"
                    },
                    '400':{
                        description: "Invalid json body format"
                    },
                    '401':{
                        description: "Unauthorized error"
                    },
                    '403':{
                        description: "Forbidden access error"
                    },
                    '500':{
                        description: 'Server error'
                    }
                }
            }
        },

        '/api/auth/user-register':{
            post:{
                tags:['Register user'],
                description: "Register user",
                security: [],
                parameters:[],
                requestBody: {
                    content:{
                        'application/json': {
                            schema:{
                                $ref:'#/components/schemas/UserRegister'
                            }
                        }
                    }
                },
                responses:{
                    '200':{
                        description: "Success register"
                    },
                    '400':{
                        description: "Invalid json body format"
                    },
                    '401':{
                        description: "Unauthorized error"
                    },
                    '403':{
                        description: "Forbidden access error"
                    },
                    '500':{
                        description: 'Server error'
                    }
                }
            }
        },

        '/api/auth/user-login':{
            post:{
                tags:['User login'],
                description: "User login",
                security: [],
                parameters:[],
                requestBody: {
                    content:{
                        'application/json': {
                            schema:{
                                $ref:'#/components/schemas/UserLogin'
                            }
                        }
                    }
                },
                responses:{
                    '200':{
                        description: "Success login"
                    },
                    '400':{
                        description: "Invalid json body format"
                    },
                    '401':{
                        description: "Unauthorized error"
                    },
                    '403':{
                        description: "Forbidden access error"
                    },
                    '500':{
                        description: 'Server error'
                    }
                }
            }
        }
    }
}