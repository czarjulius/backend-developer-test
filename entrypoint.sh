#!/bin/ash

printf "\n\n======================================\n"
printf "Making database migrations"
printf "\n======================================\n\n"
export NODE_ENV=development
yarn db:migrate

printf "\n\n======================================\n"
printf "Start the application"
printf "\n======================================\n\n"
npm run dev

exit 0
