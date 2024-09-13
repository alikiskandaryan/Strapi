"use strict";


const { createCoreController } = require("@strapi/strapi").factories;


module.exports = createCoreController(
 "api::speciality.speciality",
 ({ strapi }) => ({
   async findOneBySlug(ctx) {
     const { slug } = ctx.params;


     const sanitizedQuery = await this.sanitizeQuery(ctx);


     const result = await strapi
       .service("api::speciality.speciality")
       .findOneBySlug(slug, {
         populate: sanitizedQuery.populate,
       });


     const sanitizedResults = await this.sanitizeOutput(result, ctx);


     return this.transformResponse(sanitizedResults);
   },
   async findAllByDuration(ctx) {
    const { duration } = ctx.params;


    const sanitizedQuery = await this.sanitizeQuery(ctx);


    const result = await strapi
      .service("api::speciality.speciality")
      .findAllByDuration(duration, {
        populate: sanitizedQuery.populate,
      });


    const sanitizedResults = await this.sanitizeOutput(result, ctx);


    return this.transformResponse(sanitizedResults);
  },
 })
);