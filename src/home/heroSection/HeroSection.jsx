import React from 'react';
import '../../styles/HeroSection.css'; 
function HeroSection() {
  return (
    <section>
    <div className='hero-section'>
      <div className='container m-[-10px] mx-[-5px] pt-0 pr-0 pb-[12px] pl-0'>
        <div className='title'>
          <h6 className='header-text text-base tracking-tighter uppercase'>
            Welcome to Boocah
          </h6>
        </div>
        <div className='title'>
          <h1 id='h1'>Child Care Expert</h1>
        </div>
        <div className='description'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus numquam sapiente veniam veritatis ducimus eaque doloremque distinctio! Vitae, iure.
          </p>
        </div>
        <div className='button-group'>
          <button className='btn'>Contact Us</button>
         <div className='divL'> <span className='learn'>Learn More</span></div>
        </div>
        <div className='featured-in'>
          <h6>AS FEATURED IN:</h6>
          <div className='logo'>
            <img src="https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/logo-4.svg" alt="" />
            <img src="https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/logo-1.svg" alt="" />
            <img src="https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/logo-2.svg" alt="" />
            <img src="https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/logo-3.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default HeroSection;
