import { Request, Response } from 'express';
import * as supertest from 'supertest';
import * as sinon from 'sinon';
import { MongoMemoryServer }  from 'mongodb-memory-server';
import Server from '../../server';
import Database from '../../libs/database';
import traineeController from './controller';
import testconfig from '../../config/test_config';
import UserRepository from '../../repositories/User/UserRepository';


const mongoServer = new MongoMemoryServer();
const sandbox = sinon.createSandbox();


describe('getapi test', ()=> {
    const server= new Server(testconfig);
    const request = supertest(server.app);
    const userRepository = new UserRepository();
    // const traineeController =new TraineeController();
    // beforeAll (async(done) =>{
        
    // }) 

    it("should return get api",async() =>{
        // const response= await userRepository.find({ query, role : "trainee" })
        console.log('testresponse');

    })

}) 