import ReactTable, { useTable } from "react-table";
import React from "react";
import moment from "moment";
import "react-table/react-table.css";
// import ChangeRole from "./ChangeRole/ChangeRole";
import { Link } from "react-router-dom";
import DeleteContainer from "./Delete/DeleteContainer";

const columns = [
  {
    minWidth: 120,
    Header: "id",
    accessor: "id",
    Cell: row => {
      return <div>{row.value}</div>;
    }
  },
  {
    minWidth: 120,
    Header: "subject",
    accessor: "subject",
    Cell: row => {
      return <div>{row.value || "-"}</div>;
    }
  },
  {
    minWidth: 120,
    Header: "email",
    accessor: "email",
    Cell: row => {
      return <div>{row.value}</div>;
    }
  },
  {
    minWidth: 120,
    Header: "full name",
    accessor: "fullName",
    Cell: row => {
      return <div>{row.value || "-"}</div>;
    }
  },
  {
    minWidth: 120,
    Header: "message",
    accessor: "message",
    Cell: row => {
      return <div>{row.value}</div>;
    }
  },
  {
    minWidth: 120,
    Header: "createdAt",
    accessor: "createdAt",
    Cell: row => {
      return <div>{moment(row.value).format("YYYY/MM/DD HH:mm")}</div>;
    },
    filterable: false
  },
  {
    minWidth: 120,
    Header: "updatedAt",
    accessor: "updatedAt",
    Cell: row => {
      return <div>{moment(row.value).format("YYYY/MM/DD HH:mm")}</div>;
    },
    filterable: false
  },
  {
    minWidth: 250,
    Header: "actions",
    Cell: row => {
      return <DeleteContainer id={row.original.id} />;
      //<ConfirmContainer id={row.original.id} />;
    },
    filterable: false
  }
];

//     doctor {
//     code
//     category {
//       id
//       name
//     }
//   }
const DataTable = ({ data = [] }) => {
  return (
    <ReactTable
      defaultFilterMethod={(filter, row) => {
        if (row[filter.id])
          return String(row[filter.id])
            .toLowerCase()
            .includes(filter.value.toLowerCase());

        return "-" === filter.value.toLowerCase();
      }}
      style={{ textAlign: "center" }}
      columns={columns}
      data={data}
      filterable
      defaultPageSize={5}
      resizable
      //   subHeader
      //   subHeaderComponent={<Filter onFilter={value => setFilterText(value)} />}
    />
  );
};

export default DataTable;
