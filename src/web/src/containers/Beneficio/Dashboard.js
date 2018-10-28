import React from 'react';
import Plot from 'react-plotly.js';

const Dashboard = () => {
  return (
    <Plot
      data={[
        {
          type: 'sankey',
          orientation: 'h',
          valuesuffix: ' Fanegas',
          node: {
            pad: 15,
            thickness: 30,
            line: {
              color: 'black',
              width: 0.5
            },
            label: [
              'Cañuela-Naranjo',
              'LOURDES',
              'BARRANCA',
              'HB',
              'SHB',
              'SHB Plus',
              'Diferenciado A',
              'Diferenciado B',
              'EEUU',
              'Bélgica',
              'Alemania'
            ],
            color: [
              'red',
              'red',
              'red',
              'blue',
              'blue',
              'blue',
              'green',
              'green',
              'orange',
              'orange',
              'orange'
            ]
          },

          link: {
            source: [
              0,
              0,
              0,
              1,
              1,
              1,
              2,
              2,
              2,
              3,
              3,
              4,
              4,
              5,
              5,
              6,
              6,
              6,
              7,
              7,
              7
            ],
            target: [
              3,
              4,
              5,
              3,
              4,
              5,
              3,
              4,
              5,
              6,
              7,
              6,
              7,
              6,
              7,
              8,
              9,
              10,
              8,
              9,
              10
            ],
            value: [
              7,
              2,
              1,
              8,
              7,
              5,
              10,
              15,
              5,
              15,
              10,
              14,
              10,
              7,
              4,
              18,
              13,
              5,
              12,
              9,
              3
            ]
          }
        }
      ]}
      layout={{ width: 1024, height: 768, title: 'Gráfico de Trazabilidad' }}
    />
  );
};

export default Dashboard;
