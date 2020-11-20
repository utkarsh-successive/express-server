const permissions = {
    'getUser': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
};

const users = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    },
    {
        traineeEmail: 'trainee2@successive.tech',
        reviewerEmail: 'reviewer2@successive.tech',
    },

    {
        traineeEmail: 'trainee3@gmail.com',
        reviewerEmail: 'reviewer3@successive.tech',
    }
];

export { permissions , users };