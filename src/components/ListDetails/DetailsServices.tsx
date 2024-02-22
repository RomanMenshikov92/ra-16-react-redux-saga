import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from './types//types';
// import { fetchServiceDetails } from './observables/action';

export const DetailsServices: React.FC = () => {
  // const { id } = useParams<{ id: string }>();
  // const dispatch = useDispatch();
  // const service = useSelector((state: RootState) => state.selectedService);

  // useEffect(() => {
  //   dispatch(fetchServiceDetails(Number(id)));
  // }, [dispatch, id]);

  return (
    <div>
      {/* <h1>Service Details</h1>
      {service && (
        <div>
          <h2>{service.name}</h2>
          <p>Price: {service.price}</p>
          <p>{service.content}</p>
        </div>
      )} */}
    </div>
  );
};

export default DetailsServices;