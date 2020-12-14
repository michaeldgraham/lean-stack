import {
  html,
  useEffect
} from '@apollo-elements/haunted';
import ForceGraph from 'force-graph';

const styles = () => html`
  <style>
    #force-graph-2d {
      background-color: whitesmoke;
    }
  </style>
`;

export function HauntedForceGraph({ nodes }) {
  useEffect(() => {
    if(nodes.length) {
      const graphNodes = nodes.map(node => ({ ...node }));
      const graphContainer = document.getElementById('force-graph-2d');
      if(graphContainer) {
        const myGraph = ForceGraph();
        myGraph(graphContainer)
        .nodeLabel('id')
        .nodeColor('#6200ee')
        .graphData({
          nodes: graphNodes,
          links: []
        })
        .onNodeHover(node => graphContainer.style.cursor = node ? 'pointer' : null)
        .onNodeDragEnd(node => {
          node.fx = node.x;
          node.fy = node.y;
        })
        .onNodeClick(node => {
          // Center/zoom on node
          console.log('Node: ', node);
          myGraph.centerAt(node.x, node.y, 1000);
          myGraph.zoom(8, 2000);
        })
        .cooldownTicks(10)
        .d3Force('center').strength(0.20)
      }
    }
  }, [nodes]);
  return html`
    ${styles()}
    <div id="force-graph-2d"></div>
  `;
};