"use strict";


const { extendCoreRouter } = require("../../../utils/extendCoreRouter");


const { createCoreRouter } = require("@strapi/strapi").factories;


const defaultRouter = createCoreRouter("api::speciality.speciality");


module.exports = extendCoreRouter(defaultRouter, [
 {
   method: "GET",
   path: "/specialties/get-by-slug/:slug",
   handler: "speciality.findOneBySlug",
   config: {
     auth: false,
   },
 },
 {
    method: "GET",
    path: "/specialties/get-by-duration/:duration",
    handler: "speciality.findAllByDuration",
    config: {
      auth: false,
    },
  },
]);