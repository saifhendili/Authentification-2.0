import React, { Fragment } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, loading, user } =auth ;

  return (
<hi>dashboard</hi>  )
}

export default Dashboard