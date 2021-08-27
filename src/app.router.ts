import { AppModule } from './app.module';
import { Module } from '@nestjs/common';
import { Routes, RouterModule } from 'nest-router';

const routes: Routes = [
  {
    path: '/',
    children: [
      {
        path: `/star-wars/v1`,
        module: AppModule,
      },
    ],
  },
];

@Module({
  imports: [RouterModule.forRoutes(routes), AppModule],
})
export class AppRouter {}