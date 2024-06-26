'use strict';

/**
 * index-about service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::index-about.index-about');
