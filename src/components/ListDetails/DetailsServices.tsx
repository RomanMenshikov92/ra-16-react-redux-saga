import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./types//types";
import { fetchServiceDetails } from "./observables/action";

export const DetailsServices: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const service = useSelector((state: RootState) => state.selectedService);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.error);

  const [retrying, setRetrying] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      if (!service && !loading && !error && !retrying) {
        dispatch(fetchServiceDetails(Number(id)));
      }
    }
  }, [dispatch, error, id, loading, retrying, service]);

  const handleRetry = (): void => {
    setRetrying(true);
    dispatch(fetchServiceDetails(Number(id)));
  };

  const handleGoBack = (): void => {
    navigate(-1);
  };

  return (
    <>
      {loading && <div className="list-details__loading">Идет загрузка...</div>}
      {error && (
        <div className="list-details__error">
          Произошла ошибка!
          <button className="list-details__error-btn btn-reset" onClick={handleRetry}>
            Повторить запрос
          </button>
        </div>
      )}
      {service && !loading && !error && (
        <>
          <h3 className="list-details__details-number">Сервис № {service.id}</h3>
          <p className="list-details__details-name">
            <span className="list-details__details-span">Название:</span> {service.name}
          </p>
          <p className="list-details__details-price">
            <span className="list-details__details-span">Стоимость:</span> {service.price}
          </p>
          <p className="list-details__details-content">
            <span className="list-details__details-span">Описание:</span> {service.content}
          </p>
          <button className="list-details__details-btn btn-reset" onClick={handleGoBack}>
            Назад
          </button>
        </>
      )}
    </>
  );
};

export default DetailsServices;
