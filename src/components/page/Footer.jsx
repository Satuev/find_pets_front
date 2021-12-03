import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
    <footer class=" bg-light text-center pt-4  mt-3">
          <div class="d-flex justify-content-center align-items-center">
            <div className="">
              
              
                  <a href="http://instagram.com/intocode" className="text-danger m-1 fs-4">
                  <i class="bi bi-instagram "></i>
                  </a>
            
            </div>
            <div className=" ">
              
                  <a href="http://facebook.com" className="text-primary m-1 fs-4">
                  <i class="bi bi-facebook"></i>
                  </a>
             
            </div>
            <div className=" ">
             
              
                  <a href="https://www.youtube.com/watch?v=9taj4TuR3VA" className="text-danger m-1 fs-4">
                  <i class="bi bi-youtube"></i>
                  </a>
               
            </div>
            <div className=" ">
             
              
                  <a href="https://twitter.com/?lang=ru" className="text-info m-1 fs-4">
                  <i class="bi bi-twitter"></i>
                  </a>
              
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
