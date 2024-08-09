import React from "react";

const FeaturedSection = () => {
  return (
    <section className="relative max-w-custom">
     
        <div className="relative max-w-custom  right-[312px] left-[312px] pt-[150px] pb-[120px]">
          <div className="flex h-[174px] w-[1194px] leading-5">
            <div>
              <div className="text-[48px] font-bold leading-8 h-[62px] w-[594px]">
                <h2 class="elementor-heading-title elementor-size-default">
                  Featured Articles
                </h2>
              </div>
              <div className="text-base leading-10 h-[52px] w-[594px] mb-4 text-[#3d3d4e]">
                <p >
                  Dolor ultrices facilisis odio donec massa amet mattis nunc
                  scelerisque nunc tincidunt vitae nunc amet placerat.
                </p>
              </div>
            </div>
            <div>
                {/* <div className="w-[594px] h-[47px]"> */}
              <div className="text-base font-bold  h-[64px] w-[594px]  cursor-pointer rounded-[8px] text-white flex justify-end">
                <button  className="bg-[#6369D1] leading-5 center py-[14px] px-[30px]">View All Articles</button>
              </div>
            
            </div>
          </div>

        <div>
          <div className="flex  max-w-custom ">
            
            <div className="h-[495px] w-[33%] mb-6 pt-0 px-[32px] pb-[40px] rounded-lg">
              <a href="#" className="block">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="h-[236px] w-[366px] rounded-lg "
                />

                <h3 className="mt-4 text-[24px] leading-7 h-[57px] w-[298px] font-bold text-gray-900 sm:text-xl">
                  Lorem, ipsum dolor.
                </h3>

                <p className="text-[14px] leading-6 h-[80px] m-0 mb-[14px] text-[#3d3d4e] w-[298px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni reiciendis sequi ipsam incidunt.
                </p>
              </a>
            </div>

            <div className="h-[495px] w-[33%] mb-6 pt-0 px-[32px] pb-[40px] rounded-lg">
              <a href="#" className="block">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="h-[236px] w-[366px] rounded-lg "
                />

                <h3 className="mt-4 text-[24px] leading-7 h-[57px] w-[298px] font-bold text-gray-900 sm:text-xl">
                  Lorem, ipsum dolor.
                </h3>

                <p className="text-[14px] leading-6 h-[80px] m-0 mb-[14px] text-[#3d3d4e] w-[298px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni reiciendis sequi ipsam incidunt.
                </p>
              </a>
            </div>

            <div className="h-[495px] w-[33%] mb-6 pt-0 px-[32px] pb-[40px] rounded-lg">
              <a href="#" className="block">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="h-[236px] w-[366px] rounded-lg "
                />

                <h3 className="mt-4 text-[24px] leading-7 h-[57px] w-[298px] font-bold text-gray-900 sm:text-xl">
                  Lorem, ipsum dolor.
                </h3>

                <p className="text-[14px] leading-6 h-[80px] m-0 mb-[14px] text-[#3d3d4e] w-[298px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni reiciendis sequi ipsam incidunt.
                </p>
              </a>
            </div>
          </div>
          </div>
        </div>
    
    </section>
  );
};

export default FeaturedSection;
