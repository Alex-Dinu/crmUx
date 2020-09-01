import React, { useEffect, useState } from "react";


import SkeletonCustomers from "./SkeletonCustomers";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../redux/actions/customerAction";
import Customers from "../components/customer/Customers";

function CustomersScreen() {
  const state = useSelector((state) => state);
  const { customers, loading, error } = state.customerList;
 
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCustomers());

    return () => {};
  }, []);

  return (
    <>
      {loading && <SkeletonCustomers />}
      {!loading && (
        <Customers customers={customers}></Customers>

      )}
    </>
  );
}

export default CustomersScreen;
