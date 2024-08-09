import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
const TopicsSection = () => {
  return (
    <section>
      <div className="relative">
        <div className="relative flex max-w-custom h-[592px] left-[312px] right-[312px] ">
          <div className="relative mt-[100px] h-[347px] w-[600px] pt-0 pr-[96px] pb-0 pl-0">
            <div>
              <h2 className="text-[48px] font-bold leading-18 h-[62px] w-[473px]">Child Care Topics</h2>
            </div>
            <div className="mt-3 m-0 mb-[16px]">
              <p className="h-[80px] w-[473px] leading-6 text-[16px] text-gray-500">
                Imperdiet tempor purus, maecenas pretium et dolor turpis arcu
                nec orci arcu lacus dictum nunc, ridiculus a vestibulum sapien
                erat nulla ipsum magna odio.
              </p>
            </div>
            <div>
              <ul className="leading-6 h-[118px] w-[473px] list-none">
                <li className="leading-5  h-[28px] w-[473px] pt-0 pr-0 pb-[2px] pl-0 top-0 bottom-0 right-0 left-0 flex text-left">
                  <span className="h-[14px] text-[#66D7D1] pt-0 pr-[12px] pb-0 pl-0">
                    <FontAwesomeIcon icon={faCircle} className="text-[14px] h-[14px] w-[17px] "/>
                  </span>
                  <span className="h-[26.3906px] w-[363.391px] pt-0 pr-0 pb-0 pl-[5px] min-h-auto min-w-auto">
                    Vestibulum donec euismod tempor ultrices
                  </span>
                </li>
                <li className="leading-5  h-[28px] w-[473px] pt-0 pr-0 pb-[2px] pl-0 top-0 bottom-0 right-0 left-0 flex text-left">
                  <span className="h-[14px] text-[#66D7D1] pt-0 pr-[12px] pb-0 pl-0">
                  <FontAwesomeIcon icon={faCircle} className="text-[14px] h-[14px] w-[17px] "/>
                  </span>
                  <span className="h-[26.3906px] w-[363.391px] pt-0 pr-0 pb-0 pl-[5px] min-h-auto min-w-auto">
                    Egestas lectus amet ut elementum
                  </span>
                </li>
                <li className="leading-5  h-[28px] w-[473px] pt-0 pr-0 pb-[2px] pl-0 top-0 bottom-0 right-0 left-0 flex text-left">
                <span className="h-[14px] text-[#66D7D1] pt-0 pr-[12px] pb-0 pl-0">
                <FontAwesomeIcon icon={faCircle} className="text-[14px] h-[14px] w-[17px] "/>
                </span>
                <span className="h-[26.3906px] w-[363.391px] pt-0 pr-0 pb-0 pl-[5px] min-h-auto min-w-auto">
                Ut rutrum eleifend turpis vel
                  </span>
                </li>
                <li className="leading-5  h-[28px] w-[473px] pt-0 pr-0 pb-[2px] pl-0 top-0 bottom-0 right-0 left-0 flex text-left">
                <span className="h-[14px] text-[#66D7D1] pt-0 pr-[12px] pb-0 pl-0">
                <FontAwesomeIcon icon={faCircle} className="text-[14px] h-[14px] w-[17px] "/>
                  </span>
                  <span className="h-[26.3906px] w-[363.391px] pt-0 pr-0 pb-0 pl-[5px] min-h-auto min-w-auto">
                  Aliquam massa tincidunt cras donec
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-[571px] w-[290px] pt-0 pr-[16px] pb-0 pl-0 relative top-0 right-0 bottom-0 left-0">
            <div>
                <img className="h-[346.688px] w-[273.5px] max-w-full transform-none transition-all  box-border break-words rounded-[16px] mb-8" src="https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/child-care-template-topics-img-1.jpg" alt="" />
            </div>
            <div>
                <img className=" transform-none transition-all  box-border break-words rounded-[16px] h-[192.594px] w-[273.5px] max-w-full" src="https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/child-care-template-topics-img-2.jpg" alt="" />
            </div>
          </div>

          <div className="h-[571px] w-[290px] pt-0 pr-[16px] pb-0 pl-0 relative top-0 right-0 bottom-0 left-0 gap-x-[32px] gap-y-[32px]">
            <div>
                <img className=" transform-none transition-all   box-border break-words rounded-[16px] h-[192.594px] w-[273.5px] max-w-full mb-8" src="https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/child-care-template-topics-img-3.jpg" alt="" />
            </div>
            <div>
                <img className="h-[346.688px] w-[273.5px] max-w-full transform-none transition-all   box-border break-words rounded-[16px]" src="https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/child-care-template-topics-img-4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
