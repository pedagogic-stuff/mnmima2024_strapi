import type { Schema, Attribute } from '@strapi/strapi';

export interface QcmReponses extends Schema.Component {
  collectionName: 'components_qcm_reponses';
  info: {
    displayName: 'reponses';
  };
  attributes: {
    text: Attribute.String;
    vraifaux: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'qcm.reponses': QcmReponses;
    }
  }
}
