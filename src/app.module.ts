import {Module} from '@nestjs/common';
import {AppController} from './controllers/app/app.controller';
import {AppService} from './services/app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';
import {CustomerModule} from './modules/customer/customer.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        CustomerModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(
        private readonly connection: Connection) {
    }

}
