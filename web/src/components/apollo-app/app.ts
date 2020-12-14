import { ApolloQuery, customElement, css, html, TemplateResult } from '@apollo-elements/lit-apollo';

import { TypePoliciesMixin } from '@apollo-elements/mixins/type-policies-mixin';

import type {
  AppQueryData as Data,
  AppQueryVariables as Variables,
} from '../../schema';

import AppQuery from './App.query.graphql';
import style from './app.css';
import shared from '../shared.css';

import { locationVar } from '../../router';

import "@material/mwc-top-app-bar-fixed";

@customElement('lit-apollo-app')
export class ApolloApp extends TypePoliciesMixin(ApolloQuery)<Data, Variables> {
  static readonly is = 'lit-apollo-app';

  static readonly style = [shared, style];

  query = AppQuery;

  typePolicies = {
    Query: {
      fields: {
        location(): Location {
          return locationVar();
        },
      },
    },
  }
  
  static get styles() {
    return css`
      :host {
        position: absolute;
      }
      mwc-top-app-bar-fixed {
        --mdc-theme-primary: #002f6c;
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <mwc-top-app-bar-fixed>
          <!-- <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button> -->
          <div slot="title">LEANstack</div>
          <!-- <mwc-icon-button icon="file_download" slot="actionItems"></mwc-icon-button> -->
          <!-- <mwc-icon-button icon="print" slot="actionItems"></mwc-icon-button> -->
          <!-- <mwc-icon-button icon="favorite" slot="actionItems"></mwc-icon-button> -->
          <!-- <div>content</div> -->
      </mwc-top-app-bar-fixed>
      <!-- <p>Latest launch was ${this.data?.launchLatest?.missionName ?? '...'}</p> -->
    `;
  }
}
