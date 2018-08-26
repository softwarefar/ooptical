import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Customer} from './customer.entity';
import {CustomerService} from './customer.service';
import {CustomerController} from './customer.controller';
import {CustomerRepository} from './customer.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Customer, CustomerRepository])],
    providers: [CustomerService],
    controllers: [CustomerController],
})
export class CustomerModule {}