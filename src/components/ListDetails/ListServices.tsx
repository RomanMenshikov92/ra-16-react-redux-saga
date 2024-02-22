import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./types/types";
import { fetchServices } from "./observables/action";

export const ListServices: React.FC = () => {
  const dispatch = useDispatch();
  const services = useSelector((state: RootState) => state.services);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.error);

  const [retrying, setRetrying] = useState(false);

  useEffect(() => {
    if (!services && !loading && !error && !retrying) {
      dispatch(fetchServices());
    }
  }, [dispatch, services, loading, error, retrying]);

  const handleRetry = () => {
    setRetrying(true);
    dispatch(fetchServices());
  };

  return (
    <>
      <h2 className="list-details__title">Список сервисов:</h2>
      {loading && <div>Loading...</div>}
      {error && (
        <div>
          Error: {error}
          <button onClick={handleRetry}>Повторить запрос</button>
        </div>
      )}
      {services &&
        services.map((service) => (
          <div key={service.id}>
            <Link to={`/ra-16-react-redux-saga/list-details/${service.id}/details`}>{service.name}</Link>
          </div>
        ))}
    </>
  );
};

export default ListServices;
