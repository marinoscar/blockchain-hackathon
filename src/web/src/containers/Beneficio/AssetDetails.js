import { connect } from 'react-redux';
import React from 'react';
import { AssetForm } from './AssetForm';

class AssetDetails extends React.Component {
  render() {
    const defaultValues = [
      {
        sku: '1010011',
        fanegas: 34,
        producer: 'STELLER',
        variety: 'Caturra',
        owner: 'Coopronaranjorl',
        location: 'Cañuela-Naranjo',
        status: 'Recibido',
        interactions: [
          {
            action: 'CREATE',
            created_at: '21-20-2009',
            submitterUser: { entityCode: 'Don Pedro (Productor)' },
            type: 'Asset'
          },
          {
            action: 'REGISTER_ORIGIN_LOCATION',
            created_at: '21-20-2009',
            submitterUser: { entityCode: 'Don Pedro (Productor)' },
            type: 'Asset'
          },

          {
            action: 'TRANSFER',
            created_at: '21-20-2009',
            submitterUser: { entityCode: 'Coopronaranjo (Beneficio)' },
            type: 'Asset'
          },
          {
            action: 'REGISTER_LOCATION_CHANGE',
            created_at: '21-20-2009',
            submitterUser: { entityCode: 'Coopronaranjo (Beneficio)' },
            type: 'Asset'
          }
        ]
      },
      {
        sku: '1010021',
        fanegas: 34,
        producer: 'STELLER',
        variety: 'Caturra',
        owner: 'Coopronaranjorl',
        location: 'Cañuela-Naranjo',
        status: 'Procesado',
        quality: 'HB',
        classification: 'Diferenciado A',
        interactions: [
          {
            action: 'CREATE',
            created_at: '21-20-2009',
            submitterUser: { entityCode: 'Don Pedro (Productor)' },
            type: 'Asset'
          },
          {
            action: 'REGISTER_ORIGIN_LOCATION',
            created_at: '21-20-2009',
            submitterUser: { entityCode: 'Don Pedro (Productor)' },
            type: 'Asset'
          },

          {
            action: 'TRANSFER',
            created_at: '21-20-2009',
            submitterUser: { entityCode: 'Coopronaranjo (Beneficio)' },
            type: 'Asset'
          },
          {
            action: 'REGISTER_LOCATION_CHANGE',
            created_at: '21-20-2009',
            submitterUser: { entityCode: 'Coopronaranjo (Beneficio)' },
            type: 'Asset'
          },
          {
            action: 'PROCESSED',
            created_at: '21-20-2009',
            submitterUser: { entityCode: 'Coopronaranjo (Beneficio)' },
            type: 'Asset'
          }
        ]
      }
    ];
    return (
      <AssetForm
        form="details-asset-form"
        initialValues={defaultValues[this.props.match.params.id]}
        formType="details"
        loanId={this.props.match.params.id}
      />
    );
  }
}

const assetDetails = connect()(AssetDetails);
export { assetDetails as AssetDetails };
