import winston from "winston";
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({
      filename: `./logs/${process.env.NODE_ENV}_ineedagyro-nextjs.log`,
    }),
  ],
});

export { logger };
