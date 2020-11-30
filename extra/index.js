import {diamond} from './pattern'
import {equlitral} from './pattern'
import {hasPermissions} from './utils'
import {validateUsers} from './utils'
import {users} from './constant'
diamond(7)
equlitral(5)
hasPermissions('getUsers', 'head-trainer', 'all')
validateUsers(users) 