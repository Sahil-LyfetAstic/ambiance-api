import { DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';

export const SwaggerConfig = new DocumentBuilder()
  .setTitle('CyberCore Framework')
  .setDescription('CyberCore framework API description')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

export const SwaggerOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
};
