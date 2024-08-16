import React, { useEffect } from 'react'
import DashBoard from './DashBoard'
import { useDispatch, useSelector } from 'react-redux';
import { getPaymentDATA,activeUserDATA } from '../../Store/Slices/Admin';
import PaymentCard from './PaymentCard';

export default function PaymentDetails() {
    const dispatch=useDispatch()
    const {UserDetails} = useSelector((state) => state);
    const {paymentDATA}=UserDetails;
    useEffect(() => {
        (async () => {
          await dispatch(getPaymentDATA());
          await dispatch(activeUserDATA());
        //   await dispatch(getAllCourse());
          console.log(paymentDATA)
       
    
        })();
      }, []);

  return (
    <>
      <div className="flex">
   <DashBoard/>
   <div className="p-10 w-full">
   {paymentDATA[0]?.map((element) => {
            return <PaymentCard key={element._id} data={element} />;
          })}
   </div>
   </div>
    </>
  )
}
