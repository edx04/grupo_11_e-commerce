import React from 'react';

function BulletPoint(props){
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    
                    <li>{props.name}</li>
                    
                </div>
            </div>    
        </React.Fragment>
    )
}
export default BulletPoint;