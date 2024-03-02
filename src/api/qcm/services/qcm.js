'use strict';

/**
 * qcm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::qcm.qcm');
