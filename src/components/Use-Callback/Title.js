import React from 'react'

const Title = () => {
    console.log('rending title')
    return (
        <div>
            <h1>useCallback hooks</h1>
        </div>
    )
}

export default React.memo(Title)
