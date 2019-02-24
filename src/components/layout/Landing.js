import React, { Component } from 'react'


class Landing extends Component {

  render(){
    return(

      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12  text-center">
                <h1 className="d mb-3 "style={{fontWeight: '14', fontSize: '2.5rem'}} >AlphaResume
                </h1>
                <p  className="lead " style={{fontWeight: '16', fontSize: '1.7rem'}}>A place where employers connect with students</p>
                <hr style={{background: '#ffffff',  height: 0.1 , marginTop: 40}} />
                </div>
              </div>
              </div>
              </div>

          //  <div style= {{ marginTop: 300 }}>
              <div className="container">
            <div className="row">
            <hr style= {{color: '#ff3300',  height: 0.1 , marginTop: 40}} />

            <div className="row featurette" style={{marginTop: '1rem'}}>
              <div className="col-md-7">
                <h2 className="featurette-heading"> Employers meet Students. <span className="text-muted">An opportunity for the right Employment.</span></h2>
                <p className="lead" style={{color: '#009999' }}>Access to students from different universities and a diverse pool of students to recruit from. All done on one platform, making recruitment efficient. Get the right employees for your company via our equal opportunity platform.</p>
              </div>
              <div className="col-md-5  order-md-1 "  style = {{backgroundColor: '#009999', height: "31em", marginTop: 80 }}>

                 <div className="rounded-circle m-auto"  style = {{backgroundColor: '#ffffff', height: 300, width: 300 , textAlign:'center' }}>
                    <div className="featurette-heading " style={{textAlign: 'center', color: '#009999', paddingTop: 120}}>Employers</div>
                </div>
              </div>
            </div>

            <hr style= {{color: '#ff3300',  height: 0.1 , marginTop: 40}} />

            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">Students Connect with Employers. <span className="text-muted">Your potential employers</span></h2>
                <p className="lead"  style={{color:  '#cc0000' }}>If you are thinking of your career after university, you are in the right place. Find your potential employers, all in one place. Choose from all the different employers, a whole collection of potential employers, put yourself in a position of advantage.</p>
              </div>
              <div className="col-md-5 order-md-1"  style = {{backgroundColor: '#cc0000', height: "31rem" }}>
                 <div className="rounded-circle m-auto" style = {{backgroundColor: '#ffffff', height: 300, width: 300 , textAlign:'center' }}>

                  <div className="featurette-heading" style={{textAlign: 'center', color:  '#cc0000', paddingTop: 120}}>Students</div>
                  </div>
              </div>
            </div>



            <hr style= {{color: '#ff3300',  height: 0.1 , marginTop: 40}} / >

            </div>
          </div>
          </div>







       </div>




    )
  }
}

export default Landing
