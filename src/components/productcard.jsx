// write product card here
import React from 'react';  
import Button from './button'; 
import './productcard.css';  

const Productcard = () => { 
    const data = { 
        productImage: 'https://res.cloudinary.com/dbs8l6w93/image/upload/v1741682067/cld-sample-5.jpg', 
        productName: 'DJI Ozmo', 
        price: '4500$'
    }
    
  return (  
    <div className="productcard">  
      <img src={data.productImage} alt={data.productName} className="productcard-image" />  
      <div className="productcard-details">  
        <h3 className="productcard-name">{data.productName}</h3>  
        <p className="productcard-price">${data.price}</p>  
        <Button text="View Product" onClick={() => alert(`Viewing ${data.productName}`)} />  
      </div>  
    </div>  
  );  
};  

export default Productcard;  