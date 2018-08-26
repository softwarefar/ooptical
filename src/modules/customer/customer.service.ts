import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Customer} from './customer.entity';
import {CustomerRepository} from './customer.repository';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerRepository)
        private readonly customerRepository: CustomerRepository
    ) {
    }

    async findAll(): Promise<Customer[]> {
        return await this.customerRepository.find();
    }

    async init() {
        await this.customerRepository.save({name: 'test', description: 'description', firstName: 'firstName', lastName: 'lastName'});
        await this.customerRepository.save({name: 'test', description: 'description', firstName: 'firstName', lastName: 'lastName'});
        await this.customerRepository.save({name: 'test', description: 'description', firstName: 'firstName', lastName: 'lastName'});
        await this.customerRepository.save({name: 'test', description: 'description', firstName: 'firstName', lastName: 'lastName'});
        await this.customerRepository.save({name: 'test', description: 'description', firstName: 'firstName', lastName: 'lastName'});
        await this.customerRepository.save({name: 'test', description: 'description', firstName: 'firstName', lastName: 'lastName'});
    }
}