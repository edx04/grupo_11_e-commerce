import React, {Component} from 'react';
import TotalCard from './TotalCard';


class TotalsRow extends Component{
    constructor(){
        super()
        this.state={
            totalProducts:0,
            totalUsers:0,
            totalCategories:0
        }
    }

    componentDidMount(){
        this.obtenerTotalProductosyCategorias();
        this.obtenerTotalUsuarios();

    }

    obtenerTotalProductosyCategorias(){
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                let totalCat=data.meta.countByCategory;  
                this.setState({
                    totalProducts: data.meta.count,
                    totalCategories: Object.keys(totalCat).length
                })
            })
    }

    obtenerTotalUsuarios(){
        fetch('/api/users')
            .then(res => res.json())
            .then(data => 
                this.setState({
                    totalUsers: data.meta.count
                })

            )
    }


    render(){
        return(
            <React.Fragment>
				<div className="row">
                    <TotalCard 
                        titulo='Total de productos'
                        color='success'
                        total={this.state.totalProducts}
                    />
                    <TotalCard
                        titulo='Total de usuarios'
                        color='danger'
                        total={this.state.totalUsers}
                    />
                    <TotalCard
                        titulo='Total de categorias'
                        color='info'
                        total={this.state.totalCategories}
                    />
                </div>
			</React.Fragment>
        )
    }


}

export default TotalsRow;