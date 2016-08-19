# Informations

In order to use this application you have to setup and run API from part two.
Clone this repo in your cloud9 environment:
https://github.com/jb223cp/1DV450_jb223cp_API

Follow the steps from README file in that repo.

Run API before You use this application (don't forget cd Registration):
`$ rails server -p $PORT -b $IP`

- Clone this repo and use it as a usual express application.
- You need Nodejs installed on your system.
- Navigate to `angular-express-seed ` folder.
- Run `npm install ` to fetch the dependencies
- Run `node app.js` to mount express server
- Open browser and run application on localhost:8000

Credentials for sign in:
- Username: selma
- Password: selma2


Even if you have some data available, you can try to POST some extra pubs if you follow the link to POSTMAN file from API repo.

## Notice

This repo is not a start from scratch. I copied some scripts and files from my application and commit history can be seen here:
https://github.com/jb223cp/1dv450_jb223cp_angular

## Changes in API during build up process of this application

- Installed gem `gem 'rack-cors', :require => 'rack/cors'` for two servers on the same machine.
- Configured rack-cors to accept not-simple requests (PUT,OPTION,DELETE) and not return `'Access-Control-Allow-Origin'` error
- limit and offset changed, so it makes data conversion to INTEGER
- Gets creators by parameters. I need this as when I get creator's id (by searching and comparing with username) I can filter pubs (pubs only saves creator_id so I can not filter by creator's name).
- `protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }` This line is changed, as continuation after null_session allows PUT request. It is still fishy businesss. Sometimes updates pub, but throws exception (I am working on debugging that).
