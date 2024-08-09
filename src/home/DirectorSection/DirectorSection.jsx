import React from "react";
import styles from '../../styles/DirectorSection.module.css'
function DirectorSection() {
  return (
    <>
 
    <section>
        <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div>
            
            <img
              loading="lazy"
              src="https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_640.jpg"
              alt=""
            />
          </div>
          <div className={styles.dn}>
            <h5>Theresa Miles</h5>
          </div>
          <div className={styles.dn2}>
            <p>Center Director</p>
          </div>
        </div>

        <div className={styles.detailsContainer}>
           
          <div className={styles.d1}>
            <h2>Create and Enhance Comprehensive Early Childhood Systems</h2>
          </div>
          <div className={styles.d2}>
            <p>
              Erat morbi gravida ut massa sociis tempus cras nunc lobortis
              tristique mi sollicitudin ut lectus elit est, quisque eget sed
              arcu praesent in gravida.
            </p>
          </div>
          <div className={styles.d3}>
            <p>
              “Dolor fermentum amet tortor cursus duis imperdiet amet, velit,
              amet, amet sit tincidunt morbi tristique phasellus nec pretium leo
              nulla cursus lectus.”
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
   
    </>
  );
}

export default DirectorSection;
