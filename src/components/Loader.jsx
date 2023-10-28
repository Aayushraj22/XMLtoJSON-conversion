import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Triangle
                height="90"
                width="90"
                color="#050b76"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}

export default Loader