import React from 'react';
import { Link } from 'react-router-dom';

function getTableConfigurations() {
  return [
    {
      Header: '#',
      accessor: 'number',
      width: 50,
      Cell: cell => {
        return cell.row._index + 1;
      }
    },
    {
      Header: 'SKU',
      accessor: 'sku',
      Cell: cell => {
        return (
          <div>
            <Link to={`/beneficio/assets/1/detalles`} className="mr-4">
              {cell.row.sku}
            </Link>
          </div>
        );
      }
    },
    {
      Header: 'Fanegas',
      accessor: 'fanegas'
    },
    {
      Header: 'Variedad',
      accessor: 'variety'
    },
    {
      Header: 'Productor',
      accessor: 'producer'
    },
    {
      Header: 'Dueño Actual',
      accessor: 'ownership'
    },
    {
      Header: 'Ubicación Actual',
      accessor: 'location'
    },
    {
      Header: 'Calidad',
      accessor: 'quality'
    },
    {
      Header: 'Clasificación',
      accessor: 'classification'
    }
  ];
}

export { getTableConfigurations };
