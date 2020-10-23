let permissions= {
    'getUsers': {
        'all': ['head-trainer'],
        'read': ['trainee', 'trainer'],
        'write': ['trainer'],
        'delete': [],
    }
}

function hasPermission(moduleName,role,permissionType)
{
   
    if(permissions[moduleName]!== undefined)
    {
        console.log("Module Name ="+moduleName)
        if(permissions[moduleName][permissionType]!==undefined)
        {
            console.log("Permission Type ="+permissionType)
            if(permissions[moduleName][permissionType]!=='all')
            {
                if(permissions[moduleName]['all'].indexOf(role)!==-1)
                {
                    console.log("Role ="+role)
                    return true;
                }
            }
            if(permissions[moduleName][permissionType].length>0)
            {
                if(permissions[moduleName][permissionType].indexOf(role)!==-1)
                {
                    console.log("Role="+role)
                    return true;
                }
                else
                {
                    console.log("Role not matched="+role)
                    return false;
                }
            }
            else
            {
                console.log("role not matched for delete="+role)
                return false;
               
            }
        }
        else
        {
            console.log("Permission Type not found="+permissionType)
            return false;
        }    
    }
    else
    {
        console.log("Module Name is not found="+moduleName)
        return false;
    }
}

console.log(hasPermission('getUsers','head-trainer','write'))

console.log(hasPermission(' gt','head-trainer','write'));

console.log(hasPermission('getUsers','trainer','read'));

console.log(hasPermission('getUsers','head-trainer','delete'));

console.log(hasPermission('getUsers','tr','delete'));

console.log(hasPermission('getUsers','head-trainer','all'));
