import React from "react";
import { datemomentReal } from "../../Utils/Helpers";

const ListWithCommits = ({ commits }) => {
  return (
    <>
      <table
        id="listCustomers"
        className="table align-items-center table-flush"
      >
        <thead className="thead-light">
          <tr>
            <th scope="col" className="sort" data-sort="name">
              Commit
            </th>
            <th scope="col" className="sort" data-sort="budget">
              Date
            </th>
            <th scope="col" className="sort" data-sort="status">
              Author
            </th>
          </tr>
        </thead>

        <tbody className="list">
          {commits.map((row, index) => (
            <tr key={index}>
              <td className="" style={{ paddingLeft: "1.5rem" }}>
                {row.commit.message}

              </td>
              <td>{datemomentReal(row.commit.author.date)}

              </td>
              <td> {row.committer.login}
                <div>
                  <img alt="Image placeholder" src={row.committer.avatar_url} className="avatar rounded-circle" />
                </div>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListWithCommits;
