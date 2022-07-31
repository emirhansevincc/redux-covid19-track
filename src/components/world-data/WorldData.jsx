import React, { useEffect } from 'react'
import "./worldData.css"
import axios from 'axios';

import { useDispatch } from 'react-redux';

import { 
  addConfirmedData,
  addRecoveredData,
  addDeathData,
  addLastUpdate,
} from '../../redux/covidSlice';
import WorldDataList from './WorldDataList';

function WorldData() {

  const dispatch = useDispatch()


  useEffect(() => {
    axios("https://covid19.mathdro.id/api")
    .then((res) => {
      sendData(res.data)
      // console.log(res.data);
    })
  }, [])

  const sendData = (data) => {
    dispatch(addConfirmedData(data.confirmed.value))
    dispatch(addRecoveredData(data.recovered.value))
    dispatch(addDeathData(data.deaths.value))
    dispatch(addLastUpdate(data.lastUpdate))
  }

  return (
    <div>
      <WorldDataList />
    </div>
  )
}

export default WorldData