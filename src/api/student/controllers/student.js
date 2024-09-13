"use strict";


const { createCoreController } = require("@strapi/strapi").factories;


module.exports = createCoreController(
 "api::student.student",
 ({ strapi }) => ({
   async getByName(ctx) {
     const { name } = ctx.params;


     const sanitizedQuery = await this.sanitizeQuery(ctx);


     const result = await strapi
       .service("api::student.student")
       .getByName(name, {
         populate: sanitizedQuery.populate,
       });


     const sanitizedResults = await this.sanitizeOutput(result, ctx);


     return this.transformResponse(sanitizedResults);
   },
   async getBySpeciality(ctx) {
    const { speciality_id } = ctx.params;


    const sanitizedQuery = await this.sanitizeQuery(ctx);


    const result = await strapi
      .service("api::student.student")
      .getBySpeciality(speciality_id, {
        populate: sanitizedQuery.populate,
      });


    const sanitizedResults = await this.sanitizeOutput(result, ctx);


    return this.transformResponse(sanitizedResults);
  },
 })
);