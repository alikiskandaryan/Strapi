import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksSsylka extends Schema.Component {
  collectionName: 'components_blocks_ssylka';
  info: {
    displayName: '\u0421\u0441\u044B\u043B\u043A\u0430';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.ssylka': BlocksSsylka;
    }
  }
}
