import React from 'react'
import "./worldData.css"

import { useSelector } from 'react-redux/es/exports'

function WorldDataList() {

    const {
        currentDeaths,
        currentLastUpdate,
        currentRecovered,
        globalInfected,
    } = useSelector((state) => state.covid)

    return (
        <div>
            <>
                <div className='img'>
                    <img
                        src="/pic/covid.png"
                        alt="covid"
                        width={400}
                        height={200}
                    />
                    <h3 className='desc'>
                        Global and Country Wise Cases of Corona Virus
                    </h3>
                </div>

                <div className="world-data-container">

                    <div className="box">
                        <h2>Global Infected</h2>
                        <hr />
                        <h3>Infected : {globalInfected}</h3>
                        <h4>Last update : {currentLastUpdate}</h4>
                        <small>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore enim nobis illo et perferendis nostrum assumenda ex sed nisi.
                        </small>
                    </div>
                    <div className="box">
                        <h2>Global Recovered</h2>
                        <hr />
                        <h3>Recovered : {currentRecovered}</h3>
                        <h4>Last update : {currentLastUpdate}</h4>
                        <small>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore enim nobis illo et perferendis nostrum assumenda ex sed nisi.
                        </small>
                    </div>
                    <div className="box">
                        <h2>Global Deaths</h2>
                        <hr />
                        <h3>Deaths : {currentDeaths}</h3>
                        <h4>Last update : {currentLastUpdate}</h4>
                        <small>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore enim nobis illo et perferendis nostrum assumenda ex sed nisi.
                        </small>
                    </div>
                    <div className="box">
                        <h2>Global Thinks</h2>
                        <hr />
                        <h3>Thinks : 3141592653589793</h3>
                        <h4>Last update : {currentLastUpdate}</h4>
                        <small>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore enim nobis illo et perferendis nostrum assumenda ex sed nisi.
                        </small>
                    </div>

                </div>
            </>
        </div>
    )
}

export default WorldDataList