import React, { useEffect ,useState } from "react";

const Scrol = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else handleShow(false);
        });
        
      }, []);

    const backToTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' });

    }
    return (
        <>

            {show ? <button className="scrol-item" onClick={() => backToTop()}>scrol</button> : ""}

        </>
    )
}
export default Scrol;