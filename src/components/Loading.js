import React from 'react'
import loading from "./loading.gif"

export const Loading = () => {
    return (
        <>
            <img src={loading} alt="loading..." style={{width:"200px",display:"block",margin:"auto"}} />
        </>
    )
}

export default Loading;
