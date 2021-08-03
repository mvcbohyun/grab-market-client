import React from 'react';
import  './index.css';
import axios from 'axios';
function MainPage(){
    const [products,setproducts]= React.useState([]);
    React.useEffect(function(){
        const url = 'https://52204c37-b4fa-4cad-8981-a6b875334395.mock.pstmn.io/products'
        axios.get(url).then(function(result){
            console.log(result);
            const products = result.data.products;
            setproducts(products);
    
        }).catch(function(error){
            console.error('에러발생 :',error);
        })
    },[])

   
    

    return (<div> 
    <div id="header">
      <div id="header-area">
          <img src="images/icons/logo.png"/>
      </div>

  </div>
  <div id="body">
      <div id="banner">
          <img src="images/banners/banner1.png"/>
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
          {
              products.map(function(products,index){
                  return (<div className="product-card">
                  <div>
                      <img className="product-img" src={products.imageUrl}/>
                  </div>
                  <div className="product-contents">
                      <span className="product-name">
                      {products.name}
                      </span>
                      <span className="product-price">
                      {products.price}원
                      </span>
                      <span className="product-seller">
                          <img className="product-avatar" src="images/icons/avatar.png"/>
                          <span>{products.seller}</span>
                      </span>
                  </div>
              </div>);
              })
          }
          
      </div>

  </div>
  <div id="footer"></div>
      </div>);
}

export default MainPage;