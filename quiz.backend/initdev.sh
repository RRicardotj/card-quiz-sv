#!/bin/bash
sleep 50 # Sleep while postgres is ready for connections
npm run db-migrate && node ./src/db/load-game-data.js
npm start