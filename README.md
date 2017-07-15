[![Zendesk Logo](https://d1eipm3vz40hy0.cloudfront.net/images/p-brand/zendesk-wordmark.svg)](http://expressjs.com/)
# A Ticket View for Zendesk built using NodeJS + Express
 Built as part of the recruitment process for the 2017 Zendesk Internships

[![Build Status](https://travis-ci.org/Matt-Allen44/TicketZen.svg?branch=master)](https://travis-ci.org/Matt-Allen44/TicketZen)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/) 

#### Installation
```bash
$ npm install
```
#### Running
```bash
$ npm run
-- then navigate to localhost:3000
```
#### Test
```bash
$ npm test

example output:

    > ticketzen@0.0.0 test B:\TicketZen
    > mocha test.js --timeout 15000
    
        loading express
        GET / 200 217.218 ms - 1111
        √ responds to / (237ms)
        GET /foo/bar 404 38.243 ms - 822
        √ 404 everything else (44ms)
    
        ticket routes
        GET /tickets 200 6299.421 ms - 9881
        √ tickets overview (6301ms)
        GET /ticket?id=1 200 1900.043 ms - 1676
        √ specific ticket (1904ms)
        GET /ticket 400 2311.014 ms - 868
        √ specific ticket (no id) (2314ms)
        GET /ticket?id=9999 404 448.386 ms - 874
        √ non-existing ticket (450ms)
    
         6 passing (12s)

```

## Features

  * Displays a list of all tickets
  * Pages through 25 tickets at a time
  * Displays individual tickets

## Usage
* Run the script using npm run
* navigate to localhost:3000 to view the page
* the overview can be found at /tickets
* individual tickets can be found at /ticket?id={ticket-id}

