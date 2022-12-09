import { useEffect, useState } from 'react'
import ProductsList from '../ProductsList/ProductList'

const products = [ 
    {
      id: '1',
      name: 'Libra de café',
      description: 'Una libra de café de Jerico Antioquia, cultivado a 1950 msnm con un perfil a lima, almendras y caramelo.',
      img: './images/Lb de café.jpeg'
    },
    {
    id: '2',
    name: '1/2 Libra de café',
    description: 'Una libra de café de Jerico Antioquia, cultivado a 1950 msnm con un perfil a lima, almendras y caramelo.',
    img: './images/Lb de café.jpeg'
    },
    {
    id: '3',
    name: 'Molino de acero',
    description: 'Nuestra molinillo de café manual es no sólo lo suficientemente pequeño como para caber en un bolso de mano, pero se puede desmontar para ahorrar espacio a medida que viajan en cualquier lugar.',
    img: '/images/Molino.jpg'
    },
    ]
    
    const getProducts = () => {
      return new Promise ((resolve) => {
        setTimeout(() => {
          resolve(products)
        }, 2000)
      })
    }

const ProductsContainer =() => {
    const [products, setProducts] = useState([])

    useEffect (() => {
        getProducts()
        .then(response => {
          setProducts(response)
        })
        .catch(error =>{
          console.log(error)
        })
        }, [])
    
    return(
        <div>
            <ProductsList products={products}/>
        </div>
    )
}

export default ProductsContainer