import React, { useState, useEffect } from 'react'
import Lista from './Lista'
const Pedido = ({ item, setItems }) => {
  const [total, setTotal] = useState(0)
  const [price, setPrice] = useState([0, 0]);
  console.log(price)
  
  useEffect(() => {
    setTotal(price.reduce((a, b) => a + b))
  })

  const newArrPrice = price.slice();


  return (
    <table className='d-flex align-items-center column main-box my-2'>
      <thead className='width-100'>
        <tr className='d-flex width-100 text-align align-items-center my-2'>
          <th className='col-12'><h3>Pedido</h3></th>
        </tr>
        <tr className='d-flex width-100 text-align background-gray align-items-center my-2'>
          <th className='col-4 my-1'>Nombre</th>
          <th className='col-4 my-1'>Cantidad</th>
          <th className='col-4 my-1'>Precio</th>
        </tr>
      </thead>
      <tbody className='width-100'>
        {item.map((product, index) => {
          const newArr = item.slice();
          return <Lista
            order={product}
            key={index}
            item={item}
            deleteProd={() => {
              newArr.splice(index, 1);
              newArrPrice.splice(index + 2, 1);
              setItems(newArr)
              setPrice(newArrPrice)
            }}
            price={price}
            setPrice={setPrice} />
        })}
        <tr className=' d-flex width-100 text-align background-gray align-items-center border-top'>
          <td className='col-4 my-1'>Total:</td>
          <td className='col-4 my-1 blue-color'>S/. {total}</td>
          <td className='col-4 my-1'>
            <button className=' btn btn-primary background-blue'>Enviar a cocina</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Pedido