// import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

// @Injectable()
// class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('requesting...');
//     next();
//   }
// }

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log('requesting...');
  next();
};

export { logger };
