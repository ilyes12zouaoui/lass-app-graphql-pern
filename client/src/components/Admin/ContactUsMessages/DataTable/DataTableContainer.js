import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { CONTACT_US_MESSAGES } from "../../../../graphql/queries/contactUsMessages";
import DataTable from "./DataTable";
import GraphqlErrorHandler from "../../UI/GraphqlErrorHandler";
import Loading from "../../UI/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

const DataTableContainer = () => {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    CONTACT_US_MESSAGES
  );
  if (loading || networkStatus == 4) return <Loading />;
  if (error) return <GraphqlErrorHandler error={error || null} />;

  return (
    <>
      <div
        className="p-2"
        onClick={() => {
          refetch();
        }}
        style={{ display: "inline-block", cursor: "pointer" }}
      >
        <FontAwesomeIcon icon={faRedo} className="color-pink" size="lg" />{" "}
        <span
          className="color-pink"
          style={{ fontSize: "9px", cursor: "pointer" }}
        >
          Refetch
        </span>
      </div>
      <DataTable data={(data && data.contactUsMessages) || []} />
    </>
  );
};

export default DataTableContainer;
