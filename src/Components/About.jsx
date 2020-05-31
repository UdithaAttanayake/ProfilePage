import React, { Component } from 'react'
import biologo from './public/image/biopicimg.jpg'



class About extends Component {
  
  
    render() {

        return (
            <section id="container-about" className="container-about">
         <form >
         <div class="row">
    <div class="col-25">
      <label for="fname">System Code</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" placeholder="System Code"/>
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label for="lname">Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Name"/>
    </div>
  </div>
         <div class="row">
    <div class="col-25">
      <label for="fname">Mobile Number</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Mobile Number"/>
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label for="lname">Address</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Address"/>
    </div>
  </div>
 


  <div class="row">
    <div class="col-25">
      <label for="country">Position</label>
    </div>
    <div class="col-75">
      <select id="country" name="country">
        <option value="australia">ReSeller</option>
        <option value="canada">Shipping Agent</option>
        <option value="usa">Buyer</option>
        <option value="usa">Seller</option>

      </select>
    </div>
  </div>
  
         </form>
            </section>
        )
    }
}

export default About
