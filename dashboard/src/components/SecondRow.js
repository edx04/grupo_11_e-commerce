import React, {Component} from 'react';
import BulletPoint from './BulletPoint';
import Card from './Card';
import ProductInfo from './ProductInfo';
import TotalCard from './TotalCard';

class SecondRow extends Component{
    constructor(){
		super();
		this.state={
            nombreProd: 'Nombre',
            descripcion: 'Descripción',
            nombreUser: 'Usuario',
            email: 'Email',
            c1:0,
            c2:0,
            c3:0,
            c4:0,
            c5:0,
            c6:0,
            c7:0,
            productsList: []
		}
	}

    componentDidMount(){
        this.obtenerPropsLastProduct();
        this.obtenerPropsLastUser();
        this.obtenerPropsCategorias();
        this.obtenerListaProductos();

    }

    obtenerPropsLastProduct(){
        fetch('/api/products/')
            .then(res => res.json())
            .then(data => {
                var lastProd=data.products[data.products.length-1]

                this.setState({
                    nombreProd: lastProd.name,
                    descripcion: lastProd.description
                })
            })
            .catch(error=> console.log(error))
    }

    obtenerPropsLastUser(){
        fetch('/api/users/')
            .then(res => res.json())
            .then(data => {
                var lastUser=data.users[data.users.length-1]

                this.setState({
                    nombreUser: lastUser.name,
                    email: lastUser.email
                })
            })
            .catch(error=> console.log(error))
    }

    obtenerPropsCategorias(){
        fetch('/api/products/')
            .then(res => res.json())
            .then(data => 
                
                this.setState({
                    c1: data.meta.countByCategory.Guitarras,
                    c2: data.meta.countByCategory.Accesorios,
                    c3: data.meta.countByCategory.Baterias,
                    c4: data.meta.countByCategory.Pianos,
                    c5: data.meta.countByCategory.Partes,
                    c6: data.meta.countByCategory.Bajos,
                    c7: data.meta.countByCategory['Otros instrumentos']
                })
            )
            .catch(error=> console.log(error))
    }

    obtenerListaProductos(){
        fetch('/api/products/')
            .then(res => res.json())
            .then(data => {
                let arr=[];
                for(let i=0;i<=data.products.length-1;i++){
                    arr.push({'name':data.products[i].name});
                }

                this.setState({
                    productsList: arr
                })          
            })
    }

    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <Card titulo="Último producto creado">                       
                        <ProductInfo
                            nombre={this.state.nombreProd}
                            descripcion={this.state.descripcion}
                        />
                    </Card>

                    <Card titulo="Último usuario creado">                       
                        <ProductInfo
                            nombre={this.state.nombreUser}
                            descripcion={this.state.email}
                        />
                    </Card>

                    <Card titulo="Categorías de productos">
                        <div className="row">
                            <TotalCard 
                                titulo="Guitarras"
                                total={this.state.c1}
                            />
                            <TotalCard 
                                titulo="Accesorios"
                                total={this.state.c2}
                            />
                            <TotalCard 
                                titulo="Baterías"
                                total={this.state.c3}
                            />
                            <TotalCard 
                                titulo="Pianos"
                                total={this.state.c4}
                            />
                            <TotalCard 
                                titulo="Partes"
                                total={this.state.c5}
                            />
                            <TotalCard 
                                titulo="Bajos"
                                total={this.state.c6}
                            />
                            <TotalCard 
                                titulo="Otros instrumentos"
                                total={this.state.c7}
                            />
                        </div>
                    </Card>

                    <Card titulo="Lista de productos">                                            
                        {this.state.productsList.map((name,index)=>{
                            return  <BulletPoint  {...name}  key={index} />
                        })}
                    </Card>
                </div>
            </React.Fragment>
        )
    }

}

export default SecondRow;