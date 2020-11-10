import { Request, Response, NextFunction } from 'express';
export default (config) => (req: Request,res: Response,next: NextFunction) => {
    const errors = [];
    Object.keys(config).forEach((key) => {
        const i = 0;
        const keys = config[key];
        const values=keys.in.map(location => {
            return req[location][key]
        });
         
        let request = values.find(val=>{return isNull(val)})
        const regex = keys.regex;
        if ((!keys.required) && !(isNull (request))) {
            return request = keys.default;
        }
        if  ((keys.number) && (isNaN(Number(request))))
           {
            const err = {
                key: `${key}`,
                location: `${keys.in}`,
                errorMessage: `${keys.errorMessage || 'incorrect Type'}`
                };
            errors.push(err);
        }
        if((keys.string) && !(typeof request === 'string'))
        {
            const err = {
                key: `${key}`,
                location: `${keys.in}`,
                errorMessage: `${keys.errorMessage || 'incorrect Type'}`
                };
            errors.push(err);
        }
        if ((keys.isObject) && !(typeof(request) === 'object')) {
            const err = {
                key: `${key}`,
                location: `${keys.in}`,
                errorMessage: `${keys.errorMessage || 'not an Object'}`
                };
            errors.push(err);
        }
        if ((regex) && (!regex.test(request))) {
            const err = {
                key: `${key}`,
                location: `${keys.in}`,
                errorMessage: `${request} is not valid`
                };
            errors.push(err);
        }
        if (keys.custom && typeof keys.custom === 'function') {
            keys.custom(location);
        }
    

    });
    if (errors.length !== 0) {
        return res.status(400).send(errors);
    }
    next();
};

function isNull( request) {
    const a = ( request === undefined || request === null || request === '' );
    return a;
}
