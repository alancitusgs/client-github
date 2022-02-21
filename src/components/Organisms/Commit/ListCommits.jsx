import React from "react";
import ListWithoutCommits from "./ListWithoutCommits";
import ListWithCommits from "./ListWithCommits";


const ListCommits = ({ data }) => {
  const initialState = {
    loader: true,
    error: false,
  };

  return (
    <div className="row">
      <div className="col-md-12 d-flex justify-content-between align-items-center py-2">
      </div>
      <div className="col-md-12 ">
        {data.length === 0 ? (
          <ListWithoutCommits />
        ) : (
          <ListWithCommits commits={data} />
        )}
      </div>

    </div>
  );
};

export default ListCommits;
