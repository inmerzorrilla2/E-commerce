import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProdCard from '../components/homPage/ProdCard'
import { getProductsThunk }  from '../stores/slices/products.slice.js'
import './styles/homePage.css'
import FilterPrice from '../components/homPage/FilterPrice.jsx'
import FilterSelect from '../components/homPage/FilterSelect.jsx'

const HomePage = () => {

  const [inputValue, setInputValue] = useState('')
  const [inputPrice, setInputPrice] = useState({
    min: 0,
    max: Infinity,
  })

  const [categoryValue, setCategoryValue] = useState('')

  const products = useSelector((store) => store.products)

  const dispatch = useDispatch()

  // console.log(categoryValue)

  console.log(products)

  useEffect(() => {
     dispatch(getProductsThunk());
  }, [])

  const textInput = useRef();

  const handleChange = () => {
    setInputValue(textInput.current.value.trim().toLowerCase())

  }

  const cbFilter = (prod) => {
    const name = prod.title.toLowerCase().includes
    (inputValue)
    const price = prod.price <= +inputPrice.max && +prod.price >= +inputPrice.min
    const category = categoryValue==='' ? true : prod.
    categoryId=== +categoryValue;
    return name && price && category;
    

  }
  
  return (
    <div className='homepage'>
    
    
      <div className='homepage__filters'>
        <div>
        <input ref={textInput} onChange=
        {handleChange} type="text" />
        <button>🔍</button>
        </div>
        <FilterPrice
            setInputPrice={setInputPrice}
        />
        
      </div>
      <FilterSelect
        setCategoryValue={setCategoryValue}
      />

      <div className='homepage__container'>
        {
          products?.filter(cbFilter).map((prod) =>(
            <ProdCard
              key={prod.id}
              prod={prod}
            />
          ))
        }

      </div>
    </div>
  )
}

export default HomePage