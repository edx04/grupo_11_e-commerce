import React from "react";

function ProductInfo(props){
	return (
		<React.Fragment>	
			<div>
                <h6 className="m-0 font-weight-bold text-gray-800">{props.nombre}</h6>
				<p>{props.descripcion}</p>
									
			</div>
			
		</React.Fragment>
	)
}

export default ProductInfo;