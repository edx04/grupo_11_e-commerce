import React from 'react';
import TotalsRow from './TotalsRow';
import SecondRow from './SecondRow';

function Content(){
    return(
        <React.Fragment>
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
				</div>
				
				<TotalsRow />

				<SecondRow />

			</div>
        </React.Fragment>
    )
}
export default Content;