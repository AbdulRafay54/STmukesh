import HeroCarousel from '@/components/Carousel'
import Navbar from '@/components/Navbar'
import React from 'react'
import Category from './Category/category.js'
import ProductGrid from './Collection/collection.js'
import Footer from '@/components/Footer.js'



const index = () => {
  return (
    <>
    
    <HeroCarousel/>
    <Category/>
    <ProductGrid/>
   
   
    

    </>
  )
}

export default index