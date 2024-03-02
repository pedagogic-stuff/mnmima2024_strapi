import type { Schema, Attribute } from '@strapi/strapi';

export interface ObjetPoi extends Schema.Component {
  collectionName: 'components_objet_pois';
  info: {
    displayName: 'POI';
    description: '';
  };
  attributes: {
    Cartel: Attribute.Blocks;
    Media: Attribute.Media;
    coordonnees: Attribute.String;
  };
}

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
      'objet.poi': ObjetPoi;
      'qcm.reponses': QcmReponses;
    }
  }
}
