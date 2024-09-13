"use strict";


const { extendCoreRouter } = require("../../../utils/extendCoreRouter");


const { createCoreRouter } = require("@strapi/strapi").factories;


const defaultRouter = createCoreRouter("api::student.student");


module.exports = extendCoreRouter(defaultRouter, [
 {
   method: "GET",
   path: "/students/get-by-name/:name",
   handler: "student.getByName",
   config: {
     auth: false,
   },
 },
 {
  method: "GET",
  path: "/students/get-by-speciality/:speciality_id",
  handler: "student.getBySpeciality",
  config: {
    auth: false,
  },
},
]);