"use strict";


const { createCoreService } = require("@strapi/strapi").factories;


module.exports = createCoreService(
 "api::student.student",
 ({ strapi }) => ({
   async getByName(name, { populate }) {
       
     return strapi.db.query("api::student.student").findMany({
       where: {
         name: name,
       },
       populate: ['photo'],
     })
   },
   async getBySpeciality(speciality_id, { populate }) {
       
    return strapi.db.query("api::student.student").findMany({
      where: {
        speciality: speciality_id,
      },
      populate: ['photo'],
    })
  },
 })
);