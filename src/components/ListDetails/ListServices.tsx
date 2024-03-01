import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, Service } from "./types/types";
import { fetchServices, fetchServiceDetails } from "./observables/action";

export const ListServices: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const services = useSelector((state: RootState) => state.services);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.error);
  const [retrying, setRetrying] = useState<boolean>(false);

  useEffect(() => {
    if (!services.length && !loading && !error && !retrying) {
      dispatch(fetchServices());
    }
  }, [services, loading, error, retrying, dispatch]);

  const handleRetry = (): void => {
    setRetrying(true);
    dispatch(fetchServices());
  };

  const handleServiceDetails = (id: number): void => {
    dispatch(fetchServiceDetails(id));
    navigate(`/ra-16-react-redux-saga/list-details/${id}/details`);
  };

  return (
    <>
      <h2 className="list-details__title">Список сервисов:</h2>
      {loading && <div className="list-details__loading">Идет загрузка...</div>}
      {error && (
        <div className="list-details__error">
          Произошла ошибка!
          <button className="list-details__error-btn btn-reset" onClick={handleRetry}>
            Повторить запрос
          </button>
        </div>
      )}
      {services.length > 0 && (
        <ul className="list-details__list list-reset">
          {services.map((service: Service) => (
            <li className="list-details__item" key={service.id} onClick={() => handleServiceDetails(service.id)}>
              {service.id}. {service.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListServices;
