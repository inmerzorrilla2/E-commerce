import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/filterprice.css'

const FilterPrice = ({setInputPrice}) => {

    const { handleSubmit, register } = useForm();

    const submit = (data) => {
        setInputPrice({
            min: data.min,
            max: data.max || Infinity,
            
        })

    }

  return (
    <form onSubmit={handleSubmit(submit)}>
    <h3>Price</h3>
        <div>
            <label htmlFor="min">Min</label>
            <input {...register('min')} id='min' type="text" />
        </div>
        <div>
            <label htmlFor="min">Max</label>
            <input {...register('max')}id='min' type="text" />
        </div>
        <button>Submit</button>
    </form>
  )
}

export default FilterPrice