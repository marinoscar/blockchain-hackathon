import React from 'react';
import { Field, reduxForm, formValueSelector, change } from 'redux-form';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import InputField from '../../components/InputField';
import SelectField from '../../components/SelectField';
import InteractionPanel from '../../components/InteractionPanel';
import { NotificationManager } from 'react-notifications';

import validate from './Validator';

class AssetForm extends React.Component {
  constructor(props) {
    super(props);
    this.detailsPage = this.props.formType === 'details';
  }

  componentDidMount() {
    this.disableField = this.detailsPage;
  }

  onSubmit(values) {}

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form autoComplete="off" className="loan-form">
          <div className="row">
            <div className="col-md-8 col-xs-12">
              <h2>Asset</h2>

              <Field
                name="sku"
                label="SKU"
                type="text"
                component={InputField}
                disabled={this.disableField}
              />

              <Field
                name="fanegas"
                label="Fanegas"
                type="number"
                component={InputField}
                disabled={this.disableField}
              />

              <Field
                name="variety"
                type="text"
                component={SelectField}
                label="Variedad"
                disabled={this.disableField}
              >
                <option value="">Select type</option>
                <option value="Caturra">Caturra</option>
                <option value="Catuai">Catuai</option>
                <option value="Costa Rica 95">Costa Rica 95</option>
                <option value="Marsellesa">Marsellesa</option>
                <option value="Magarogipe">Magarogipe</option>
              </Field>

              <Field
                name="producer"
                type="text"
                component={SelectField}
                label="Productor"
                disabled={this.disableField}
              >
                <option value="">Select type</option>
                <option value="STELLER">STELLER</option>
                <option value="LOS PAPILLOS WHITE HONEY">
                  LOS PAPILLOS WHITE HONEY
                </option>
                <option value="MIRIAN">MIRIAN</option>
                <option value="FINCA LA AURORA">FINCA LA AURORA</option>
                <option value="EL TAMQUE">EL TAMQUE</option>
              </Field>

              <Field
                name="owner"
                type="text"
                component={SelectField}
                label="Dueño"
                disabled={this.disableField}
              >
                <option value="Coopronaranjorl">Coopronaranjorl</option>
              </Field>

              <Field
                name="location"
                type="text"
                component={SelectField}
                label="Ubicación"
                disabled={this.disableField}
              >
                <option value="">Select type</option>
                <option value="Cañuela-Naranjo">Cañuela-Naranjo</option>
                <option value="Los Robles- Cirri-Naranjo">
                  Los Robles- Cirri-Naranjo
                </option>
                <option value="San Juan - Río Grande-Naranjo">
                  San Juan - Río Grande-Naranjo
                </option>
                <option value="San Juanillo - Naranjo">
                  San Juanillo - Naranjo
                </option>
                <option value="Cañuela-Naranjo">Cañuela-Naranjop</option>
              </Field>
            </div>

            <div className="col-md-4 col-xs-12">
              <div className="row">
                <h2>Estado: Nuevo</h2>
                <div className="col-md-12 ">
                  <InteractionPanel
                    showDraft
                    interactions={this.props.interactions}
                    createOrSaveDraft={!this.detailsPage}
                    onAmendClick={handleSubmit(this.onSubmit.bind(this))}
                    onCreateClick={handleSubmit(this.onSubmit.bind(this))}
                    onSaveDraftClick={handleSubmit(this.onSubmit.bind(this))}
                    onApproveClick={handleSubmit(this.onSubmit.bind(this))}
                    onRejectClick={handleSubmit(this.onSubmit.bind(this))}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

AssetForm = reduxForm({
  enableReinitialize: true
})(AssetForm);

function mapStateToProps(state, ownProps) {
  const selector = formValueSelector(ownProps.form);
  const interactions = selector(state, 'interactions');
  return {
    validate,
    interactions
  };
}

AssetForm = connect(mapStateToProps)(AssetForm);

export { AssetForm };
