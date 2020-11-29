import{ Router } from 'express';
import traineeControler from './controller';
import validationHandler from '../../libs/validationHandler';
import config from './validation';
import authmiddleware from '../../libs/routes/authmiddleware';
console.log(authmiddleware);
const traineeRouter = Router();
/**
 * @swagger
 *
 *  definitions:
 *      TraineePost:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              example: test@successive.tech
 *          name:
 *              type: string
 *              example: tomer
 *          password:
 *              type: string
 *              example: 1234
 *          role:
 *               type: string
 *               example: trainee
 *      TraineeResponse:
 *        type: object
 *        properties:
 *          _id:
 *              example: 5e4a36bc64824b1f80b730cd
 *          email:
 *              type: string
 *              example: test@successive.tech
 *          name:
 *              type: string
 *              example: tomer
 *          role:
 *              type: string
 *              example: trainee
 *          originalId:
 *              example: 5e4a36bc64824b1f80b666cd
 *          createdAt:
 *              example: 2020-02-20T11:06:29.125Z
 *          v:
 *              example:444
 *      Unauthorized:
 *        type: object
 *        properties:
 *          error:
 *              example: Unauthorized
 *          message:
 *              example: Token not found
 *          status:
 *              example: 403
 *          timestamp:
 *               example: 2020-11-25T17:34:37.066Z
 *
 */

traineeRouter.route('/')
/**
 * @swagger
 *
 * /api/trainee:
 *   get:
 *     description: List of all the trainees
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Trainee
 *     consumes:
 *       - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *       - name: skip
 *         description: Number of elements to skip
 *         in: query
 *         required: false
 *         type: number
 *       - name: limit
 *         description: number of elements to show
 *         in: query
 *         required: false
 *         type: number
 *       - name: sort
 *         description: Parameter to sort (name or email)
 *         in: query
 *         required: false
 *         type: string
 *       - name: search
 *         description: Element to search
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Trainee List
 *         schema:
 *              properties:
 *                  status:
 *                      example: 200 OK
 *                  message:
 *                      example: 'successfully fetched Trainee'
 *                  Count:
 *                      example: 5
 *                  data:
 *                      type: object
 *                      allOf:
 *                              - $ref: '#/definitions/TraineeResponse'
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */
.get(authmiddleware('getUser', 'read'), validationHandler ( config.get ) , traineeControler.get)
/**
 * @swagger
 *
 * /api/trainee:
 *   post:
 *     tags:
 *       - Trainee
 *     description: Returns the success reponse on creation
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: Data of users.
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *             $ref: '#/definitions/TraineeCreate'
 *     responses:
 *       200:
 *         description: User Created Successfully
 *         schema:
 *              oneOf:
 *              properties:
 *                  status:
 *                      example: OK
 *                  message:
 *                      example: Trainee Created Successfully
 *                  data:
 *                      type: object
 *                      allOf:
 *                          - $ref: '#/definitions/TraineeResponse'
 *                      properties:
 *                              name:
 *                                  type: string
 *                                  example: "utkarsh"
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */

.post(authmiddleware('getUser', 'read'), validationHandler ( config.create) , traineeControler.create)
/**
 * @swagger
 *
 * /api/trainee:
 *   put:
 *     tags:
 *       - Trainee
 *     description: Returns the success reponse on Updation
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: Data of users.
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *          oneOf:
 *          properties:
 *              dataToUpdate:                   
 *                  example: 5e4e6e93c095d84d34045a30
 *                  allOf:
 *                      - $ref: '#/definitions/TraineePost'
 *     responses:
 *       200:
 *         description: User Updated Successfully
 *         schema:
 *              oneOf:
 *              properties:
 *                  status:
 *                      example: OK
 *                  message:
 *                      example: successfully upddate
 *                  data:
 *                      type: object
 *                      allOf:
 *                          - $ref: '#/definitions/TraineeResponse'
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */

 .put(authmiddleware('getUser', 'read'), validationHandler ( config.update) ,  traineeControler.update)
/**
 * @swagger
 *
 * /api/trainee/{id}:
 *   delete:
 *     tags:
 *       - Trainee
 *     description: Returns the success reponse on deletion
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: OriginalID of user to be deleted.
 *         in: query
 *         required: true
 *         type: string
 *         example: 5e4e6e93c095d84d34045a30
 *     responses:
 *       200:
 *         description: Data to be deleted
 *         schema:
 *              oneOf:
 *              properties:
 *                  status:
 *                      example: OK
 *                  message:
 *                      example: Trainee deleted successfully!
 *                  code:
 *                      example: 200
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */

 traineeRouter.route('/:id').delete(authmiddleware('getUser', 'read'), validationHandler ( config.delete) , traineeControler.delete);
export default traineeRouter;

