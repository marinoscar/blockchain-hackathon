import React from 'react';
import ReactTable from 'react-table';

const DataTable = props => {
  return (
    <div>
      <ReactTable
        data={props.data}
        columns={props.columns}
        defaultPageSize={props.pageSize ? 20 : 5}
        className="-striped -highlight"
        showPagination={props.pagination}
        defaultSorted={props.defaultSorted}
      />
    </div>
  );
};
export default DataTable;
