const config = {
<<<<<<< HEAD
    create: {
        id: {
            required: true,
            string: true,
            in: ['body'],
            custom: function (value) {
                console.log('Value', value);
                throw { error: 'Error Occured', message: 'Message' }
            }
        },
        name: 
        { 
            required: true,
            string: true,
             regex: /[a-z]+[ ][a-z]+$/i,  
            in: ['body'],
             errorMessage: 'Name is required',
              
        }
    },
    delete: {
        id: {
            required: true,
            errorMessage: 'Id is required',
            in: ['params']
        }
    },
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false, default: 10, number: true, in: ['query'],
            errorMessage: 'Limit is invalid',
        }
    },
    update: {
        id: {
            required: true,
            string: true,
            in: ['body']
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            custom: function (dataToUpdate) { 
                console.log('Inside custom funaton in update',dataToUpdate);
            },
        }
    }
};

export default config;
=======
  create: {
      id: {
          required: true,
          string: true,
          in: ['body'],
          custom(value) {
              console.log('Value', value);
              throw {
                  error: 'Error Occured',
                  message: 'Message',
              };
          },
      },
      name: {
          required: true,
          string: true,
          regex: /[a-z]+[ ][a-z]+$/i,
          in: ['body'],
          errorMessage: 'Name is required',
      },
  },

  delete: {
      id: {
          required: true,
          errorMessage: 'Id is required',
          in: ['params'],
      },
  },
  get: {
      skip: {
          required: false,
          default: 0,
          number: true,
          in: ['query'],
          errorMessage: 'Skip is invalid',
      },
      limit: {
          required: false,
          default: 10,
          number: true,
          in: ['query'],
          errorMessage: 'Limit is invalid',
      },
  },
  update: {
      id: {
          required: true,
          string: true,
          in: ['body']
      },
      dataToUpdate: {
          in: ['body'],
          required: true,
          isObject: true,
          custom(dataToUpdate) {
              console.log();
          },
      },
  },
};

export default config;
>>>>>>> 5bba2593e304e4ac2003c5614ce461e4d33b0fe0
