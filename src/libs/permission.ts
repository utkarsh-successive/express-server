const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
};


export default function hasPermission(moduleName, role, permissionType) {

    let type;
    console.log('Module Name is', moduleName);
    console.log('permission type is', permissionType);
    console.log('role is', role);

    const values = ['all', 'read', 'write', 'Delete'];

    function getType(permissiontype) {
        if (values.includes(permissiontype)) { type = permissiontype; }
        return type;
    }
    type = getType(permissionType);

    if (role === 'head-trainer') {
        console.log('role is matched')
        return true;
    }
    else {
        if (type.includes(role))
            return true;
        else
            return false;
    }
}