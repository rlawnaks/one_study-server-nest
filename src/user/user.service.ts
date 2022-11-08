import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository : UserRepository
    ){}

    async saveUser(name: string, number: string) {
        try {
            const user = this.userRepository.create({ name, number })
            return this.userRepository.save(user)
        } catch (err) {
            console.log(err)
        }
    }

    async findAll() {
        try {
            return await this.userRepository.find()        
        } catch (err) {
            console.log(err)
        }
    }

    async findByIdx(idx: number) {
        try {
            return await this.userRepository.findOne({
                where: {idx : idx}
            })
        } catch (err) {
            console.log(err)
        }
    }

    async delete(idx: number) {
        try {
            return await this.userRepository.delete(idx);
        } catch (err) {
            console.log(err)
        }
    }

    async update(idx: number, updateData) {
        try {
            return this.userRepository.update(idx, updateData)
        } catch (err) {
            console.log(err)
        }
    }
}
