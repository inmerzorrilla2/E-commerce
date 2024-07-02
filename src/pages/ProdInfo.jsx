import React from 'react'
import ProdSimiliar from '../components/prodInfo/ProdSimiliar'
import ProdSlider from '../components/prodInfo/ProdSlider'
import ProdDetail from '../components/prodInfo/ProdDetail'

const Prodinfo = () => {
  return (
    <div>
      <ProdSimiliar/>
      <ProdSlider/>
      <ProdDetail/>
    </div>
  )
}

export default Prodinfo