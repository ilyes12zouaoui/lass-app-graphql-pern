Hello javascripters ! when we start developing a javascript project using React,Redux,Node,Express,Prisma and GraphQL, there is no ready to use starter project, so we must do the configuration and authentication by our selfs each time, that's why i decided to create a modular ready to use strater project, that contains all the configuration needed, even websocket configuration to use GraphQL subscription, and a full athentication with account activation and reset password e-mails and Three role users ADMIN,STAFF,USER, client and admin space, upload image using graphQL, and for the styling i used bootstrap and my own custom css, so that you can easily modify it.

update this file "src/helpers/email/ConfigProd.js" with the correct email address and password,
update the path to where you want to save files at this directory "src/helpers/file"
update "prisma/prisma.yml" endpoint
update "client/src/config/apollo" uri 
enjoy :D

project github link : https://github.com/ilyes12zouaoui/lass-app-graphql-pern
running online project on heroku link : https://lass-graphql-app.herokuapp.com
