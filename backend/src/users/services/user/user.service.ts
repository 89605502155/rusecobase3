import { Injectable } from '@nestjs/common';
import { ID } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreateUserInput } from 'src/users/inputs/create-user.input';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity> 
    ){}

    async createUser(userInput: CreateUserInput): Promise<UserEntity> {
        return await this.userRepository.save({...userInput})
    }
    async getOneUser(id: number): Promise<UserEntity> {
        return await this.userRepository.findOne({ id:id})
    }
}
