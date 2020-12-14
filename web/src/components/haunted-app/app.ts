import { html, useQuery, useState, useEffect } from '@apollo-elements/haunted'

import { locationVar } from '../../router'

import '@apollo-elements/components/'
import '@material/mwc-button'

import READ_A from './ReadA.query.graphql'
import CREATE_A from './CreateA.mutation.graphql'

// No Shadow DOM
const styles = () => html`
  <style>
    #create-a-btn {
      z-index: 1;
      position: absolute;
      top: 86px;
      left: 24px;
      font-style: bold;
      --mdc-theme-primary: #01579b;
    }
  </style>
`

export function HauntedApp() {
  const [nodes, setNodes] = useState([])
  const [location, setLocation] = useState(locationVar())
  const { data, error, loading } = useQuery(READ_A)

  useEffect(() => {
    const ANodes = data?.A ?? []
    if (ANodes.length) setNodes(() => [...nodes, ...ANodes])
  }, [data])

  const addAGraphNode = ({ detail }) => {
    const ANode = detail?.data?.CreateA
    if (ANode) setNodes(() => [...nodes, ANode])
  }

  return html`
    ${styles()}

    <apollo-mutation
      .mutation="${CREATE_A}"
      @apollo-mutation-result="${addAGraphNode}"
    >
      <mwc-button id="create-a-btn" raised slot="trigger">Create A</mwc-button>
    </apollo-mutation>

    <haunted-force-graph .nodes="${nodes}"></haunted-force-graph>
  `
}
