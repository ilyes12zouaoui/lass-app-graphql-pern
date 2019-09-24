import ReactTable, { useTable } from "react-table";
import React from "react";
import moment from "moment";
import "react-table/react-table.css";
import ChangeRole from "./ChangeRole/ChangeRole";
import BanUserContainer from "./BanUser/BanUserContainer";
import UnbanUserContainer from "./UnBanUser/UnbanUserContainer";
import { Link } from "react-router-dom";

const columns = [
  {
    minWidth: 120,
    Header: "id",
    accessor: "id",
    Cell: row => {
      return (
        <Link to={`/users/${row.value}`}>
          <a>{row.value}</a>
        </Link>
      );
    }
  },
  {
    minWidth: 120,
    Header: "first name",
    accessor: "firstName",
    Cell: row => {
      return <div>{row.value}</div>;
    }
  },
  {
    minWidth: 120,
    Header: "last name",
    accessor: "lastName"
  },
  {
    minWidth: 120,
    Header: "e-mail",
    accessor: "email"
  },
  {
    minWidth: 120,
    Header: "birthDate",
    accessor: "birthDate",
    Cell: row => {
      return <div>{moment(row.value).format("YYYY/MM/DD")}</div>;
    }
  },
  {
    minWidth: 120,
    Header: "image",
    accessor: "image",
    filterable: false,
    Cell: row => {
      return (
        <div>
          <img
            style={{ display: "block", width: "100%" }}
            src={`/images/users/${row.value}`}
          />
        </div>
      );
    }
  },

  {
    minWidth: 120,
    Header: "isActive",
    accessor: "isActive",
    Cell: row => {
      return <div>{row.value ? "yes" : "no"}</div>;
    },
    filterMethod: (filter, row) => {
      if (filter.value == "any") return true;
      if (filter.value == "yes") return row[filter.id];
      if (filter.value == "no") return !row[filter.id];
    },
    Filter: props => {
      let filterValue = (props.filter && props.filter.value) || "any";

      let Options = ["any", "yes", "no"].map(value => {
        return <option value={value}>{value}</option>;
      });
      return (
        <select
          value={filterValue}
          onChange={e => {
            props.onChange(e.target.value);
            // setFilter(e.target.value || undefined);
          }}
        >
          {Options}
        </select>
      );
    }
  },
  {
    minWidth: 120,
    Header: "isOnline",
    accessor: "isOnline",

    Cell: row => {
      return <div>{row.value ? "yes" : "no"}</div>;
    },
    filterMethod: (filter, row) => {
      if (filter.value == "any") return true;
      if (filter.value == "yes") return row[filter.id];
      if (filter.value == "no") return !row[filter.id];
    },
    Filter: props => {
      let filterValue = (props.filter && props.filter.value) || "any";

      let Options = ["any", "yes", "no"].map(value => {
        return <option value={value}>{value}</option>;
      });
      return (
        <select
          value={filterValue}
          onChange={e => {
            props.onChange(e.target.value);
            // setFilter(e.target.value || undefined);
          }}
        >
          {Options}
        </select>
      );
    }
  },
  {
    minWidth: 120,
    Header: "isBanned",
    accessor: "isBanned",
    Cell: row => {
      return <div>{row.value ? "yes" : "no"}</div>;
    },
    filterMethod: (filter, row) => {
      if (filter.value == "any") return true;
      if (filter.value == "yes") return row[filter.id];
      if (filter.value == "no") return !row[filter.id];
    },
    Filter: props => {
      let filterValue = (props.filter && props.filter.value) || "any";

      let Options = ["any", "yes", "no"].map(value => {
        return <option value={value}>{value}</option>;
      });
      return (
        <select
          value={filterValue}
          onChange={e => {
            props.onChange(e.target.value);
            // setFilter(e.target.value || undefined);
          }}
        >
          {Options}
        </select>
      );
    }
  },
  {
    minWidth: 120,
    Header: "Telephone",
    accessor: "telephone",
    Cell: row => {
      if (!row.value) return <div>-</div>;
      return <div>{row.value}</div>;
    }
  },

  {
    minWidth: 120,
    Header: "role",
    accessor: "role"
  },
  {
    minWidth: 120,
    Header: "description",
    accessor: "description",
    Cell: row => {
      if (!row.value) return <div>-</div>;
      return <div>{row.value}</div>;
    }
  },
  {
    minWidth: 120,
    Header: "address",
    accessor: "address",
    Cell: row => {
      if (!row.value) return <div>-</div>;
      return <div>{row.value}</div>;
    }
  },
  {
    minWidth: 120,
    Header: "sexe",
    accessor: "sexe"
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
      if (row.original.role == "ADMIN") return <div>-</div>;

      return (
        <>
          <ChangeRole id={row.original.id} role={row.original.role} />
          {row.original.isBanned ? (
            <UnbanUserContainer id={row.original.id} />
          ) : (
            <BanUserContainer id={row.original.id} />
          )}
        </>
      );
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
