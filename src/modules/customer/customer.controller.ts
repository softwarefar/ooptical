import {Controller, Get} from '@nestjs/common';
import {CustomerService} from './customer.service';

@Controller('api')
export class CustomerController {
    constructor(
        private readonly customerService: CustomerService,
    ) {
    }

    @Get('customer')
    findAll() {
        return this.customerService.findAll();
    }

    @Get('init')
    init() {
        return this.customerService.init();
    }
}
