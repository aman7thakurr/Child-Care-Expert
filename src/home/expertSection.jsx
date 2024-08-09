import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const ExpertSection = () => {
  return (
    <section className="relative max-w-custom left-[312px] right-[312px]">
      <div>
        <div className="flex relative w-full mt-[150px] gap-[42px]">
          <div className="w-[25%]">
            <div>
              <h2 className="text-[48px] font-bold leading-18  h-[124px] w-[236px] ">
                Meet The Experts
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 h-[131px] w-[236px] mt-0 mr-0 mb-[16px] ml-0 no-underline custom-text-decoration mt-[34px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>

          <div className="w-[25%]">
            <div>
              <img
                loading="lazy"
                decoding="async"
                width="268"
                height="332"
                src="https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/child-care-template-expert-img-1.jpg"
                className="h-[332px] w-[268px] rounded-2xl"
                alt=""
                srcset="https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/child-care-template-expert-img-1.jpg 268w, https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/child-care-template-expert-img-1-242x300.jpg 242w"
                sizes="(max-width: 268px) 100vw, 268px"
              />
            </div>
            <div>
              <h5 className="text-[20px] font-bold h-[24px] w-[268px] text-center">
                Sarah B. Johnson
              </h5>{" "}
            </div>
            <div className="flex h-[16px] w-[268px] text-[#6369D1] text-center gap-[20px] justify-center mt-[10px]">
              <span className="text-base h-4 w-4 relative top-0 bottom-0 left-0 right-0">
                <FontAwesomeIcon icon={faFacebook} />
              </span>
              <span className="text-base h-4 w-4 relative top-0 bottom-0 left-0 right-0">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
              <span className="text-base h-4 w-4 relative top-0 bottom-0 left-0 right-0">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className="text-base h-4 w-4 relative top-0 bottom-0 left-0 right-0">
                <FontAwesomeIcon icon={faYoutube} />
              </span>
            </div>
          </div>

          <div className="w-[25%]">
            {" "}
            <div>
              <img
                loading="lazy"
                decoding="async"
                width="268"
                height="332"
                src="https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/child-care-template-expert-img-2.jpg"
                className="h-[332px] w-[268px] rounded-2xl"
                alt=""
                sizes="(max-width: 268px) 100vw, 268px"
              />
            </div>
            <div>
              <h5 className="text-[20px] font-bold h-[24px] w-[268px] text-center">
                Sarah B. Johnson
              </h5>{" "}
            </div>
            <div className="flex h-[16px] w-[268px] text-[#6369D1] text-center gap-[20px] justify-center mt-[10px]">
              <span className="text-base h-4 w-4 relative top-0 bottom-0 left-0 right-0">
                <FontAwesomeIcon icon={faFacebook} />
              </span>
              <span className="text-base h-4 w-4 relative top-0 bottom-0 left-0 right-0">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
              <span className="text-base h-4 w-4 relative top-0 bottom-0 left-0 right-0">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className="text-base h-4 w-4 relative top-0 bottom-0 left-0 right-0">
                <FontAwesomeIcon icon={faYoutube} />
              </span>
            </div>
          </div>

          <div className="w-[25%]">
            <div>
              <img
                loading="lazy"
                decoding="async"
                width="268"
                height="332"
                src="https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/child-care-template-expert-img-3.jpg"
                className="h-[332px] w-[268px] rounded-2xl"
                alt=""
                sizes="(max-width: 268px) 100vw, 268px"
              />
            </div>
            <div >
              <h5 className="text-[20px] font-bold h-[24px] w-[268px] text-center">
                Sarah B. Johnson
              </h5>{" "}
            </div>
            <div className="flex h-[16px] w-[268px] text-[#6369D1] text-center gap-[20px] justify-center mt-[10px]">
              <span className="text-base h-4 w-4 relative top-0 bottom-0 left-0 right-0">
                <FontAwesomeIcon icon={faFacebook} />
              </span>
              <span className="text-base h-4 w-4 relative top-0 bottom-0 left-0 right-0">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
              <span className="text-base h-4 w-4 relative top-0 bottom-0 left-0 right-0">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className="text-base h-4 w-4 relative top-0 bottom-0 left-0 right-0">
                <FontAwesomeIcon icon={faYoutube} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
