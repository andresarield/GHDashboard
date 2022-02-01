import react from 'react';
import React from 'react';
import SmallCard from './SmallCard';

let amount ={
    color:   "success",
    titulo: "Total awards",
    valor: 79,
    icono: "fas fa-award",
}


let cardProps = [amount];


function ContentRowTop(){
    const [productCount, setProductCount] = React.useState(0);
    React.useEffect(function(){
        fetch("http://localhost:3500/api/products")
        .then(res => res.json())
        .then(res => setProductCount(res.data.count))    
    }, [] )

    //const [userCount, setUserCount] = React.useState(0);
    //React.useEffect(function(){
    //    fetch("http://localhost:3500/api/categories")
    //    .then(res => res.json())
    //    .then(res => setUserCount(res.data.count))    
    //}, [] )

    const [userCount, setUserCount] = React.useState(0);
    React.useEffect(function(){
        fetch("http://localhost:3500/api/users")
        .then(res => res.json())
        .then(res => setUserCount(res.data.count))    
    }, [] )


    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">

            {productCount && <SmallCard color= {"primary"} titulo= {"Games in DB"} valor={productCount} icono= "fas fa-film" />}
            
            {userCount && <SmallCard color= {"warning"} titulo= {"Users in DB"} valor={userCount} icono= "fas fa-user" />}

            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;