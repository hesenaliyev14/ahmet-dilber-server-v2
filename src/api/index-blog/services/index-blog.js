'use strict';

/**
 * index-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::index-blog.index-blog');
