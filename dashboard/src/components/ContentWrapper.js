import React from 'react';
import Content from './Content';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    
                    <Content />
                    
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;