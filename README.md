# I Need a Gyro

Gyros for you via the Yelp API

![workflow](https://github.com/eebbesen/ineedagyro-nextjs/actions/workflows/test.yml/badge.svg)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

You will need to set environment variable `YELP_API_KEY`. See [the Yelp Fusion API documentation] for more information. Since this value is used by the server you just need to make sure it is set in the environment that starts the Node server.

### Run

```bash
npm run dev
# or
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

This root route (`/`) is hard-coded to return records using the browser's `navigator.geolocation.getCurrentPosition` and the search term `gyro`.

#### API endpoints

These allow you to pass in latitude and longitude _and_ to use the search term of your choice.

##### recs `/api/recs?lat=44.938128&lng=-93.169022&term=kabob"`

Returns a JSON object with the key `businesses` containing an array of businesses matching the passed-in latitude, longitude, and term.

This endpoint uses the key `businesses` for compatibility with other applications using this microservice. You should consider using the `locations` endpoint instead.

##### locations `/api/locations?lat=44.938128&lng=-93.169022&term=burger"`

Returns a JSON array of businesses matching the passed-in latitude, longitude, and term.

### Test/Lint

```bash
npm run test
npm run lint
npm run prettier
```

### logging

[Winston](https://github.com/winstonjs/winston) is used for to-file logging. By default logs are written to the `logs` directory in the application but you may need to modify this. Logged events are:

- errors calling Yelp
- latitude/longitude/term used in calls to Yelp
- latitude/longitude/term used in API calls
- miles/kilometers toggle events

Where latitude and longitude are logged, decimals are stripped to obfuscate users' location. For example, a call to 44.938128, 93.169022 would be logged as 44, 93.

## Setup Log

How this application was initialized. For more info on packages added later see package.json -- the below only includes npm installs where `init` was required.

```bash
npx create-next-app@latest --ts ineedagyro-nextjs
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
npm init jest@latest

npm run build
npm run start
```
