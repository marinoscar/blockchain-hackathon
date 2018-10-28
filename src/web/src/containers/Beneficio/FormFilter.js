import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import SelectField from '../../../components/SelectField';
import DatePickerField from '../../../components/DatePickerField';
import InputField from '../../../components/InputField';

class LoansFormFilter extends React.Component {
  constructor(props) {
    super(props);
  }
  handleReset = () => {
    this.props.reset();
  };



  render() {
    const { handleSubmit } = this.props;

    const entitiesOptions = this.props.entities.map((entity) => { return <option key={entity.code} value={entity.code}>{entity.name}</option>; });

    const loanTypesOptions = this.props.loanTypes.map((loanType) => { return <option key={loanType.code} value={loanType.code}>{loanType.name}</option>; });

    const interestRateTypesOptions = this.props.interestRateTypes.map((interestRateType) => { return <option key={interestRateType.code} value={interestRateType.code}>{interestRateType.name}</option>; });
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="row">
          <div className="mt-4 col-md-6 col-xs-12">
            <Field name="entity" type="text" component={SelectField} label="Counterparty">
              <option value="">Select</option>
              { entitiesOptions }
            </Field>
            <Field name="loanType" type="text" component={SelectField} label="Loan Type">
              <option value="">Select</option>
              {loanTypesOptions}
            </Field>
            <Field name="interestRateType" type="text" component={SelectField} label="Interest Rate Type">
              <option value="">Select</option>
              {interestRateTypesOptions}
            </Field>
            <Field name="loanId" type="text" component={InputField} label="Loan ID"  />
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="d-flex flex-wrap">
              <span className="col-md-12 row">Effective date</span>
              <Field
                name="startEffectiveDate"
                component={DatePickerField}
                dateFormat="DD.MM.YYYY"
                showYearDropdown
                label="From"
                textRight
              />
              <Field
                name="endEffectiveDate"
                component={DatePickerField}
                dateFormat="DD.MM.YYYY"
                showYearDropdown
                label="To"
                textRight
              />
            </div>
            <div className="d-flex flex-wrap">
              <span className="col-md-12 row">Maturity date</span>
              <Field
                name="startMaturityDate"
                component={DatePickerField}
                dateFormat="DD.MM.YYYY"
                showYearDropdown
                label="From"
                textRight
              />
              <Field
                name="endMaturityDate"
                component={DatePickerField}
                dateFormat="DD.MM.YYYY"
                showYearDropdown
                label="To"
                textRight
              />
            </div>
          </div>
        </div>
        <div className="d-flex flex-row-reverse mb-2">
          <button className="btn btn-primary float-right ml-1" type="submit">Apply Filters</button>
          <button className="btn btn-secondary float-right" onClick={this.handleReset}>Reset Filters</button>
        </div>
      </form>
    );
  }
}

LoansFormFilter = reduxForm({
  form: 'loanAdvancedSearchForm',
})(LoansFormFilter);


LoansFormFilter = connect()(LoansFormFilter);

export default LoansFormFilter;
