import React from 'react';
import { connect } from 'react-redux';
import 'react-table/react-table.css';
import DataTable from '../../components/DataTable';
import { getTableConfigurations } from './AssetColumnsSettings';

class AssetListSold extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Lista de Assets</h1>

        <div className="row">
          <div className="col-md-12">
            <div className="mt-2">
              <DataTable
                data={[
                  {
                    sku: '01120000',
                    fanegas: '3',
                    variety: 'Caturra',
                    producer: 'Carlos Méndez',
                    ownership: 'Coopronaranjorl',
                    location: 'LLano Bonito (Recibidor)',
                    status: 'Recibido'
                  },
                  {
                    sku: '01130000',
                    fanegas: '10',
                    variety: 'Tipia',
                    producer: 'El T',
                    ownership: 'Coopronaranjorl',
                    location: 'LLano Bonito (Recibidor)',
                    status: 'Recibido'
                  }
                ]}
                columns={getTableConfigurations()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const assetListSold = connect()(AssetListSold);
export { assetListSold as AssetListSold };
