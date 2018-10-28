import React from 'react';
import { connect } from 'react-redux';
import { AssetForm } from './AssetForm';
import _ from 'lodash';

class AssetCreate extends React.Component {
  render() {
    const defaultValues = {
      description: 'Hola',
      owner: 'Coopronaranjorl'
    };

    return (
      <AssetForm
        form="create-asset-form"
        initialValues={defaultValues}
        formType="create"
      />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const assetCreate = connect(mapStateToProps)(AssetCreate);
export { assetCreate as AssetCreate };
