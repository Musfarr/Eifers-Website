import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import { Link } from 'react-router-dom'






const Creator = () => {
  return (
<div  >
<Header/>

<div class="uk-position-relative uk-position-z-index-zero">
    <div class="uk-background-cover uk-padding uk-flex uk-flex-center uk-flex-middle uk-text-center uk-light uk-height-medium uk-position-z-index-negative" data-src = "https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80" uk-img = "loading : eager" >
    <div className='anid'>
<p className='anip' >
  
  <span className='anis'>
    Our Services
  </span>
  &mdash; Protective Security Solutions &mdash;
</p>
</div> 
</div>
</div>


<Footer/>


    </div>
  )
}

export default Creator
