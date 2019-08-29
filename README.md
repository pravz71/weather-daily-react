## weather-daily-react
A weather app that lets you know the current weather of any city using a call to the AccuWeather APIs namely Location API and Current Conditions API.
Technologies Used: React, Redux,Node.js, Express, Redux, SCSS, HTML

Deployed on Heroku: https://weather-daily-pravin.herokuapp.com/


## Requirements
* Node
* Git

## Common Setup
Clone the repo and install the dependencies.
```bash
git clone https://github.com/pravz71/weather-daily-react.git
cd weather-daily-react
```
```bash
npm install
```
## Setup environment variables
Create the following file in the root directory ```.env.development``` and  copy the content below. Fill it up with your api key. 
```
ACCUWEATHER_API_KEY=paste your key without the quotes
```
```
For Production add the above key-value pair as environment variables.
```
## Start Development Server
**Start dev-server**
```bash
npm run dev-server
```
*Open [http://localhost:8080](http://localhost:8080)*

**Start Express server**
```bash
npm run build:dev
npm start
```
*Open [http://localhost:3000](http://localhost:3000)*

## Start Production Server
**Start Express server**
```bash
npm run build:prod
npm start
```
*Open [http://localhost:3000](http://localhost:3000)*


