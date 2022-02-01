//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import Genre from './Genre';

class GenresInDb extends Component{
    constructor(){
        super()
        this.state ={
            backgroundColor: "",
            genresList: []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
        fetch('http://localhost:3500')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(genres =>{
            //console.log(genres)
            this.setState({genresList: genres.data})
        })
        .catch(error => console.log(error))

    }


    changeBackgroundColor(){
        this.setState({backgroundColor: "bg-secondary"})
    }


    render(){
        return (
            <React.Fragment>
                {/*<!-- Genres in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4 " >
                        <div className="card-header py-3">
                            <h6 onMouseOver = { () => this.changeBackgroundColor()}  className="m-0 font-weight-bold text-gray-800 titulo">Genres in Data Base</h6>
                        </div>
                        <div className={"card-body " + this.state.backgroundColor}>
                            <div  className="row">
                                {
                                    //console.log(this.state.genresList)
                                    this.state.genresList.map((genre,index)=>{
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
    
    </React.Fragment>
    )
    }
}
export default GenresInDb;
