import React, { useState, useEffect } from "react";
import withLayout from "../HOC/withLayout";
import Loader from "../../components/Organisms/Loader";
import { get, header } from "../Utils/Helpers";
import NotFound from "../../components/Organisms/NotFound";
import ListCommits from "../../components/Organisms/Commit/ListCommits";

const Commit = () => {

  const initialState = {
    loader: true,
    error: false,
    errorMessage: null,
    data: null,
  };

  const resetMainState = () => {
    setScope({ ...initialState });
  };

  const [scope, setScope] = useState(initialState);

  useEffect(() => {
    if (!scope.loader) return;
    get(`/alancitusgs`, header(), function (code, response) {
      if (code === 200) {

        console.log(response.datos)
        setScope({
          ...scope,
          data: response.datos,
          loader: false,
        });
      } else {
        setScope({
          ...scope,
          loader: false,
          error: true,
        });
      }
    });
  }, [scope]);

  if (scope.error) {
    return <NotFound />;
  }

  if (scope.loader) return <Loader height={500} />;

  return (
    <>
      <div className="header pb-6 mr-top-fx ">
        <div className="container-fluid ">
          <div className="header-body ">
            <div className="row align-items-center py-4">
              <div className="col-lg-12 col-12">
                <p className="d-inline-block mb-0 breat-fx">
                  {" "}
                  <i className="fa fa-github"></i> GIT COMMITS HISTORY{" "}
                  
                 </p>
                <hr style={{ margin: "1em auto 0" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt--6">
        <ListCommits data={scope.data} resetMainState={resetMainState} />
      </div>
    </>
  );
};

export default withLayout()(Commit);
