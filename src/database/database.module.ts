import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({}),
      dataSourceFactory: () =>
        new DataSource({
          type: 'mysql',
          host: 'localhost',
          port: 3306, // 12189
          username: 'root', // dyhs
          password: 'password',
          database: 'test', // ex) dyhs-study
          entities: [User],
          synchronize: true,
        }).initialize(),
    }),
  ],
})
export class DatabaseModule {}
