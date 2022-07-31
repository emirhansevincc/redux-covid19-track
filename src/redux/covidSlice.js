import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    country: '',

    globalInfected: 0,
    currentRecovered: 0,
    currentLastUpdate: '',
    currentDeaths: 0,

    countryConfirmed: 0,
    countryRecovered: 0,
    countryDeaths:0
}

export const covidSlice = createSlice({
    name: 'covid',
    initialState,
    reducers: {
        addConfirmedData: (state, action) => {
            state.globalInfected = action.payload
        },
        addRecoveredData: (state, action) => {
            state.currentRecovered = action.payload
        },
        addDeathData: (state, action) => {
            state.currentDeaths = action.payload
        },
        addLastUpdate: (state, action) => {
            state.currentLastUpdate = action.payload
        },
        addCountry: (state, action) => {
            state.country = action.payload
        },
        addCountryDeaths: (state, action) => {
            state.countryDeaths = action.payload
        },
        addCountryConfirmed: (state, action) => {
            state.countryConfirmed = action.payload
        },
        addCountryRecovered: (state, action) => {
            state.countryRecovered = action.payload
        },
        
    }
    
})

export const {
    addConfirmedData,
    addRecoveredData,
    addDeathData,
    addLastUpdate,
    addCountry,
    addCountryDeaths,
    addCountryConfirmed,
    addCountryRecovered,
} = covidSlice.actions

export default covidSlice.reducer