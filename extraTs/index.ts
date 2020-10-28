import  { diamond, equlitral } from './pattern';
import { hasPermissions, validateUsers } from './utils';
import { users } from './constant';

diamond(5);
equlitral(5);
hasPermissions('getUsers', 'head-trainer', 'delete');
validateUsers(users);