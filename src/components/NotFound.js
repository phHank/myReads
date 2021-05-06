import React from 'react'

import { Link } from 'react-router-dom'

class NotFound extends React.Component {
    render() {
        return (
            <div style={{marginLeft: '20%'}}>
                <h3>
                    404: Resource Not Found
                </h3>
                <Link to='/'><small>Return To Home?</small></Link>
            </div>
        )
    }
}

export default NotFound