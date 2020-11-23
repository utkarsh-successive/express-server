import { permissions } from './constants';
export default  function hasPermissions(moduleName: string, permissionType: string, role: string): boolean {
    try {
        console.log('//running permissions.ts ... \n');
        console.log(moduleName);
        console.log(role);
        console.log(permissionType);
        if (!permissions[moduleName].all.includes(role) || permissions[moduleName][permissionType].includes(role)) {
           console.log(`${role} has ${permissionType} permissions`);
                return true;
            }
       console.log(`${role} does not has ${permissionType} permissions`);
            return false;
    }
    catch (err) {
          console.log(err);
                    return false;
    }
}
