import React from "react";
import Scrol from "./Scrol";

const Resume=()=>{
 
  const onButtonClick = () => {

    fetch('Updates_Resume_one.pdf').then(response => {
        response.blob().then(blob => {
           
            const fileURL = window.URL.createObjectURL(blob);
          
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Updates_Resume_one.pdf';
            alink.click();
        })
    })
}
    return(
        <>
       <div class="container aos-init aos-animate" data-aos="fade-up">

<div class="section-title">
  <h2 className="text-center">Resume</h2>
  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
</div>

<div class="row">
  <div class="col-lg-6">
    <h3 class="resume-title">Sumary</h3>
    <div class="resume-item pb-0">

      <h4>Pankaj yadav</h4>
      <p><em>Innovative and deadline-driven UI Developer with 1+ years of experience as front end developer</em></p>
      <p>
      </p><ul>
        <li>Portland par 127,Orlando, FL</li>
        <li>630789971</li>
        <li>py796880@gmail.com</li>
       
 <center>
  <button onClick={onButtonClick}>
                    Resume Download
                </button>
            </center>
      </ul>
      <p></p>
    </div>

    <h3 class="resume-title">Education</h3>
    <div class="resume-item">
      <h4>Batchler of sceince </h4>
      <h5>2016 - 2020</h5>
      <p><em>GZSCCET,bathinda</em></p>
      <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
    </div>
    
  </div>
  <div class="col-lg-6">
    <h3 class="resume-title">Professional Experience</h3>
    <div class="resume-item">
      <h4>junior front end developer</h4>
      <h5>2021 - Present</h5>
      <p><em>Experion, New York, NY </em></p>
      <p>
      </p><ul>
        <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
        <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
        <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
        <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
      </ul>
      <p></p>
    </div>

  </div>
</div>

</div>
<Scrol/>
        </>
    )
}
export default Resume;