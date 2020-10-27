export default interface IPermissions {
    'GetUsers': {
        'all': string[],
        'read': string[],
        'write': string[],
        'delete': string[],
    };
}

interface IUsers {
    [index: number]: {traineeEmail: string; reviewerEmail: string};
}