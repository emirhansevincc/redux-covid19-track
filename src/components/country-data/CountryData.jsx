import React, { useEffect } from 'react'
import "./countryData.css"
import { useDispatch, useSelector } from 'react-redux'
import CountryDataList from './CountryDataList'
import axios from 'axios'
import {
  addCountryDeaths,
  addCountryConfirmed,
  addCountryRecovered
} from '../../redux/covidSlice'

function CountryData() {

  const dispatch = useDispatch()

  const { country } = useSelector((state) => state.covid)
  // console.log(country);

  useEffect(() => {
    axios(`https://covid19.mathdro.id/api/countries/${country}`)
    .then((response) => {
      // console.log(response.data)
      countryData(response.data)
    })
  }, [country])

  const countryData = (res) => {
    dispatch(addCountryDeaths(res.deaths.value))
    dispatch(addCountryConfirmed(res.confirmed.value))
    dispatch(addCountryRecovered(res.recovered.value))
  }

  return (
    <div> 
      <CountryDataList />
    </div>
  )
}

export default CountryData