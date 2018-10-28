import React from 'react';
import TextAreaField from './TextAreaField';
import { Field } from 'redux-form';
import { formatDate } from '../utilities/formatUtils';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import _ from 'lodash';

class InteractionPanel extends React.Component {
  handleAmend = () => {
    this.props.onAmendClick();
  };

  handleCreate = () => {
    this.props.onCreateClick();
  };
  handleModify = () => {
    this.props.onModifyClick();
  };
  handleSaveDraft = () => {
    this.props.onSaveDraftClick();
  };

  handleApprove = () => {
    this.props.onApproveClick();
  };

  handleReject = () => {
    this.props.onRejectClick();
  };

  buildTimelineCard = (interaction, title, iconColor, icon) => {
    const author = `Dueño: ${interaction.submitterUser.entityCode}`;
    return (
      <TimelineEvent
        key={interaction._id}
        title={title}
        subtitle={author}
        createdAt={interaction.created_at}
        icon={<i className={icon} />}
        iconColor={iconColor}
      >
        {interaction.comment}
      </TimelineEvent>
    );
  };

  buildTimeline = () => {
    const { interactions } = this.props;
    const interactionConstants = {
      LOAN: 'Loan',
      TRANSACTION: 'Transaction',
      CONTRACT: 'Contract',
      MSA: 'Master Service Agreement'
    };
    const cards = _.map(interactions, interaction => {
      let interactionType = interaction.type;
      switch (interaction.action) {
        case 'CREATE':
          return this.buildTimelineCard(
            interaction,
            interactionType + ' creado',
            '#6FBA1C',
            'fas fa-check'
          );
        case 'TRANSFER':
          return this.buildTimelineCard(
            interaction,
            interactionType + ' transferido',
            '#6FBA1C',
            'fas fa-exchange-alt'
          );
        case 'REGISTER_LOCATION_CHANGE':
          return this.buildTimelineCard(
            interaction,
            interactionType + ' registrado en nueva ubicación',
            'olive',
            'fas fa-map-marker-alt'
          );
        case 'REGISTER_ORIGIN_LOCATION':
          return this.buildTimelineCard(
            interaction,
            interactionType + ' registrado en ubicación origin',
            'olive',
            'fas fa-seedling'
          );
        case 'DISPUTED':
          return this.buildTimelineCard(
            interaction,
            interactionType + ' disputed',
            '#e32',
            'far fa-file-excel'
          );
        case 'PROCESSED':
          return this.buildTimelineCard(
            interaction,
            'Procesado con calidad HB y clasificación diferenciado A',
            '#6FBA1C',
            'fas fa-wrench'
          );
      }
    });
    if (!cards.length) {
      return <div />;
    }
    return (
      <div className={'audit-train'}>
        <h4>Trazabilidad</h4>
        <Timeline>{cards}</Timeline>
      </div>
    );
  };

  render() {
    const {
      acceptOrReject,
      createOrSaveDraft,
      amend,
      modify,
      type
    } = this.props;
    return (
      <div>
        {(acceptOrReject || createOrSaveDraft || amend) && (
          <div className="row">
            <div className="col-md-12 ">
              <Field
                name="comment"
                label="Entity Name"
                component={TextAreaField}
              />
            </div>
          </div>
        )}
        {acceptOrReject && (
          <div className="row">
            <div className="col-md-6 " />
            <div className="col-md-6 ">
              <button
                type="button"
                className="btn btn-success w-100"
                onClick={this.handleApprove}
              >
                Procesar
              </button>
            </div>
          </div>
        )}
        {createOrSaveDraft && (
          <div className="row">
            <div className="col-md-6 ">
              {this.props.showDraft && (
                <button
                  type="button"
                  className="btn btn-ey w-100"
                  onClick={this.handleSaveDraft}
                >
                  Guardar Borrador
                </button>
              )}
            </div>
            <div className={this.props.showDraft ? 'col-md-6' : 'col-md-12'}>
              <button
                type="button"
                className="btn btn-success w-100"
                onClick={modify ? this.handleModify : this.handleCreate}
              >
                Crear
              </button>
            </div>
          </div>
        )}
        {amend && (
          <div className="row">
            <div className="col-md-6 ">
              <a
                href={
                  type === 'non-trade'
                    ? '/non-trade/contracts/list'
                    : '/loans/list'
                }
              >
                <button type="button" className="btn btn-ey w-100">
                  Exit
                </button>
              </a>
            </div>
            <div className="col-md-6 ">
              <button
                type="button"
                className="btn btn-success w-100"
                onClick={this.handleAmend}
              >
                Amend
              </button>
            </div>
          </div>
        )}
        {this.buildTimeline()}
      </div>
    );
  }
}

export default InteractionPanel;
