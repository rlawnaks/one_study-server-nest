import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: "user",
      password: "rlawnaks12341!@",
      database: "test",
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
  })
  ,UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
