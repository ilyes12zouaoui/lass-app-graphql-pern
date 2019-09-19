import { isEmpty } from "lodash";
import React from "react";
export default ({ error = null }) => {
  if (!error) return null;
  console.log("err", error.graphQLErrors, "net", error.networkError);
  if (!isEmpty(error.graphQLErrors)) {
    return error.graphQLErrors.map(({ message }, i) => (
      <div
        className="mt-2"
        style={{
          color: "#dc3545",
          // word-break: break-all;
          "white-space": "normal"
        }}
        key={i}
      >
        {message}
      </div>
    ));
    // return (
    //   <div className="mt-2" style={{ color: "#dc3545" }}>
    //     graphql Error !
    //   </div>
    // );
  }
  if (!!error.networkError) {
    return (
      <div className="mt-2" style={{ color: "#dc3545" }}>
        failed network error !
      </div>
    );
  }

  return null;
};
