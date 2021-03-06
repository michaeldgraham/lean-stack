declare module '*.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export default defaultDocument;
}

declare module '*.css' {
  import { CSSResult } from 'lit-element';
  const css: CSSResult;
  export default css;
}

declare module 'web-worker:*' {
  const WorkerFactory: new () => Worker;
  export default WorkerFactory;
}