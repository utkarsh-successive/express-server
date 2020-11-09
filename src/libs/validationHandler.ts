import { Request, Response, NextFunction } from 'express';
export default (config) => (req: Request,res: Response,next: NextFunction) => {
    const errors = [];
    Object.keys(config).forEach((key) => {
        const i = 0;
        const keys = config[key];
        const locations = keys.in[i]; 
        let request = req[locations][key];
        const regex = keys.regex;
         if ((keys.required) && (request.custom)) {
            const err = {
                key: `${key}`,
                location: `${keys.in}`,
                errorMessage: `${keys.errorMessage || 'required'}`
                };
            errors.push(err);
        }
        if ((!keys.required) && (request.custom)) {
            return request = keys.default;
        }
        if  ((keys.number) && !(isNaN(Number(request))))
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
        if (request.custom && typeof request.custom === 'function') {
            request.custom(locations);
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
