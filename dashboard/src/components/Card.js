import React, {Component} from 'react';

function Card(props){
	return (
		<React.Fragment>
			<div className="col-lg-6 mb-4">
    			<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">{props.titulo}</h5>
					</div>
					<div className="card-body">
						{props.children}
									
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
export default Card;