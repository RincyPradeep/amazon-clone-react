import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';

import Slider from 'react-slick'
import axios from 'axios'

import './Home.css'
import ProductCard from '../ProductCard/ProductCard'
import Pagination from '../Pagination/Pagination'


const Home = () => {

  axios.defaults.baseURL="http://localhost:8000/api/v1/products"

  const settings = {
    dots: false,
    arrow:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
  };

  const productsPerPage = 1

  const [banners,setBanners] = useState([])
  const [products,setProducts] = useState([])
  const [currentPage,setCurrentPage] = useState(1)

  // get current posts
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  // change page
  const paginate = (pageNumber)=>setCurrentPage(pageNumber)


  const fetchBanners =() =>{
    axios.get('/banners/').then((response)=>{
      setBanners(response.data.data)
    }).catch((error)=>{
      alert(error)
    })
  }

  const fetchProducts =() =>{
    axios.get('/').then((response)=>{
      setProducts(response.data.data)
    }).catch((error)=>{
      alert(error)
    })
  }

  useEffect(()=>{
    fetchBanners()
    fetchProducts()
  },[])

  return (
    <section id='home'>
      <div className='banner'>
        <Slider {...settings}>
            {banners.map((banner)=>{
              return(
                <div key={banner.id}>
                  <img src={banner.image} alt="banner"/>
                </div>
              )
            })}
          </Slider>
      </div>
      <div className='products'>
        <ul>
        {
          currentProducts.map((product)=>{
            return(
              <li key={product.id}>
                <Link to="#"><ProductCard product={product}/></Link>
              </li>
            )
          })
        }
        </ul>
      </div>
      <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
    </section>
  )
}

export default Home