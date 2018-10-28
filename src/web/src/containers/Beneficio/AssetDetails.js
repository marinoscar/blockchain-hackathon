import { connect } from 'react-redux';
import React from 'react';
import { AssetForm } from './AssetForm';

class AssetDetails extends React.Component {
  render() {
    const defaultValues = {
      sku: '1010011',
      fanegas: 34,
      producer: 'STELLER',
      variety: 'Caturra',
      owner: 'Coopronaranjorl',
      location: 'Cañuela-Naranjo',
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
    };
    return (
      <AssetForm
        form="details-asset-form"
        initialValues={defaultValues}
        formType="details"
        loanId={this.props.match.params.id}
      />
    );
  }
}

const assetDetails = connect()(AssetDetails);
export { assetDetails as AssetDetails };
