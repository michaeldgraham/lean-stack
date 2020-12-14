import type { ApolloClient, NormalizedCacheObject } from '@apollo/client/core';

import { client } from './client';

// import class-based LitElement component
import './components/apollo-app';

// import component function wrapper for haunted components
import { component } from '@apollo-elements/haunted';
// import haunted functional components
import { HauntedApp } from './components/haunted-app/app';
import { HauntedForceGraph } from './components/haunted-app/haunted-force-graph';

window.customElements.define('haunted-app', component(HauntedApp, { useShadowDOM: false }));
window.customElements.define('haunted-force-graph', component(HauntedForceGraph, { useShadowDOM: false }));

window.__APOLLO_CLIENT__ =
  client;

Promise.all([
  customElements.whenDefined('lit-apollo-app'),
  customElements.whenDefined('haunted-app')
]).then(() => document.body.removeAttribute('unresolved'));

declare global {
  interface Window {
    __APOLLO_CLIENT__?: ApolloClient<NormalizedCacheObject>;
  }
}
