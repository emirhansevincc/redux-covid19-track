import React, { useState } from 'react'
import { addCountry } from '../../redux/covidSlice'
import { useDispatch, useSelector } from 'react-redux'

function CountryDataList() {

    const [inputValue, setInputValue] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addCountry(inputValue))
    }

    const {
        countryConfirmed,
        countryDeaths,
        countryRecovered
    } = useSelector(state => state.covid)

    return (
        <div>
            <>
                <div className='search-part'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='Search City'
                            className='search'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button
                            className='submit'
                            type="submit"
                        >Search
                        </button>
                    </form>
                </div>

                <div className="country-info">
                    <div className="info">
                        <div className="data">
                            <p>Confirmed : {countryConfirmed}</p>
                            <p>Recovered : {countryRecovered}</p>
                            <p>Deaths : {countryDeaths}</p>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CountryDataList