# I Need a Gyro

Gyros for you

![workflow](https://github.com/eebbesen/ineedagyro-nextjs/actions/workflows/test.yml/badge.svg)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Run

```bash
npm run dev
# or
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Test/Lint

```bash
npm run test
npm run lint
npm run prettier
```

### logging

Winson is used for to-file logging. By default logs are written to the `logs` directory in the application but you may need to modify this. Logged events are:

- errors calling Yelp
- latitude/longitude used in calls to Yelp
  - decimals are stripped to obfuscate exact user location
- miles/kms toggle events

## Setup Log

How this application was initialized. For more info on packages added later see package.json -- the below only includes npm installs where `init` was required.

```bash
npx create-next-app@latest --ts ineedagyro-nextjs
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
npm init jest@latest

npm run build
npm run start
```
