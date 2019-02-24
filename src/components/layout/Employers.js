import React, { Component } from 'react'
import './Employer.css'
import {Link} from 'react-router-dom'

class Employers extends Component {

  render(){
    return(


      <div>

    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active" style = {{backgroundColor: '#009999', height: 500 }}>

          <div className="container">
            <div className="carousel-caption text-left">
              <h1>Ready to recruit the right students.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><Link  className="btn btn-lg btn-primary" to="/register" role="button">Create Employer Account</Link></p>
            </div>
          </div>
        </div>
        <div className="carousel-item" style = {{backgroundColor: '#ff3399', height: 500 }}>

          <div className="container">
            <div className="carousel-caption">
              <h1>Diverse pool of students to recruit from.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item" style = {{backgroundColor: '#009933', height: 500 }}>

          <div className="container">
            <div className="carousel-caption text-right">
              <h1>Efficient recruitment.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>



    <div className="container marketing">


      <div className="row">
        <div className="col-lg-4 "  >
          <div className="rounded-circle m-auto" style = {{backgroundColor: '#009999',  height: 190 , width: 190 , textAlign:'center'  }}>
              <div  style={{textAlign: 'center', color: '#ffffff', paddingTop: 80}}>Opportunity</div>
          </div>
          <h2 className="text-muted">Various Universities</h2>
          <p>Students and graduates register with AlphaResume, this provides a big opportunity for employers to choose the right candidates for vacancies in the company.
          Choose students who fit the company profile and add value to the company.</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4 "  >
              <div className="rounded-circle m-auto" style = {{backgroundColor: '#009999', height: 190 , width: 190 , margin: 1, textAlign:'center' }}>
                    <div  style={{textAlign: 'center', color: '#ffffff', paddingTop: 80}}>Diversity</div>
            </div>
          <h2 className="text-muted">Different Backgrounds</h2>
          <p>AlphaResume provides students from different backgrounds, by recruiting via this platform it enables the company to promote diversity in the company. Equality and diversity promote productivity in the company.</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4 " >
            <div className="rounded-circle m-auto" style = {{backgroundColor: '#009999', height: 190 , width: 190 , margin: 1,  textAlign:'center' }}>
              <div  style={{textAlign: 'center', color: '#ffffff', paddingTop: 80}}>Time</div>
            </div>
          <h2 className="text-muted">Shorten Recruitment</h2>
          <p>Fast track recruitment into availabe posts by having using AlphaResume, ready available students/graduate portfolios available. Full support through recruitment from AlphaResume Team from start to finish of the process.</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
      </div>




      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Changing the culture of recruitment. <span className="text-muted">A Company providing Equal Opportunities.</span></h2>
          <p className="lead">Students and various graduates miss import employment opportunities due to varies factors, geographical location, lack of information, baised recruitment and thiis also denies companies deserved employees with the right skills. AlphaResume is here to provide a wide and diversified pool for recruitment.</p>
        </div>
        <div className="col-md-5" style = {{backgroundColor: '#009999', height: 500 }}>

        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Thousands of students and graduates registered on AlphaResume platform. <span className="text-muted">See the their portfolios.</span></h2>
          <p className="lead">As an employer registered with on the AlphaResume plattform, you will be able to see all student portfolios appropriate to your company. Access to the portfolios, gives employers chance to select the right candidate with the right skills and for the right job.</p>
        </div>
        <div className="col-md-5 order-md-1" style = {{backgroundColor: '#009999', height: 500 }}>


        </div>
        </div>


      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Post your vacancies on AlphaResume platform for students to see. <span className="text-muted">Recruitment made easy. Directly recruit from the platform.</span></h2>
          <p className="lead">Employers can directly communicate with students via AlphaResume platform. Through our filtering system employers will only see the right candidates for the vacancies posted.</p>
        </div>
        <div className="col-md-5" style = {{backgroundColor: '#009999', height: 500 }}>

          //{'{'}% include icons/placeholder.svg width="500" height="500" background="#eee" color="#aaa" className="bd-placeholder-img-lg featurette-image img-fluid mx-auto" %{'}'}
        </div>

      </div>

      <hr className="featurette-divider"/ >


            </div>

    </div>






    )
  }
}

export default Employers
