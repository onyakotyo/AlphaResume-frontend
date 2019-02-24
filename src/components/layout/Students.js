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
        <div className="carousel-item active" style = {{backgroundColor: '#cc0000', height: 500 }}>
          <div className="container">
            <div className="carousel-caption text-left">
              <h1>Ready to get the right job?</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><Link className="btn btn-lg btn-primary" to="/register" role="button">Create Student Account</Link></p>
            </div>
          </div>
        </div>
        <div className="carousel-item" style = {{backgroundColor: '#ff3300', height: 500 }}>
          <div className="container">
            <div className="carousel-caption">
              <h1>Equal opportunity and diversity.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item" style = {{backgroundColor: '#009999 ', height: 500 }}>
          <div className="container">
            <div className="carousel-caption text-right">
              <h1>Employers working with AlphaResume</h1>
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
        <div className="rounded-circle m-auto" style = {{backgroundColor: '#cc0000', height: 190 , width: 190 , margin: 1, textAlign:'center' }}>
              <div  style={{textAlign: 'center', color: '#ffffff', paddingTop: 80}}>Employment Opportunity</div>
          </div>
          <h2 className=" text-muted">Position Yourself</h2>
          <p>AlphaResume positions you for the right employment, apply to your desired employers directly and expect your application to arrive safely. Give your equal chance of being elected and getting your desired job.</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4"  >
        <div className="rounded-circle m-auto" style = {{backgroundColor: '#cc0000', height: 190 , width: 190 , margin: 1, textAlign:'center' }}>
              <div  style={{textAlign: 'center', color: '#ffffff', paddingTop: 80}}>Level ground</div>
          </div>
          <h2 className="text-muted"> Equal Opportunity to get a job</h2>
          <p>Everyone candidate who applies through AlphaResume gets an equal opportunity towards the applied job despite regardless of their background. Give your an opportunity apply through AlphaResume</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4" >
        <div className="rounded-circle m-auto" style = {{backgroundColor: '#cc0000', height: 190 , width: 190 , margin: 1, textAlign:'center' }}>
              <div  style={{textAlign: 'center', color: '#ffffff', paddingTop: 80}}>Graduates</div>
          </div >
          <h2 className="text-muted">Graduated but unemployed?</h2>
          <p>Its never too late to get a job that you really want, apply through our platform. Upload your portfolio and conncect with different employers.</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
      </div>




      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">University and college students, all welcome. <span className="text-muted">Connect with employers</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5" style = {{backgroundColor: '#cc0000', height: 500 }}>
          //{'{'}% include icons/placeholder.svg width="500" height="500" background="#eee" color="#aaa" className="bd-placeholder-img-lg featurette-image img-fluid mx-auto" %{'}'}
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Join other students who been employed after connecting with employers through AlphaResume. <span className="text-muted">See for yourself.</span></h2>
          <p className="lead">You can also give yourself the same opportunity, register, make your profile , search jobs and apply. Then sit back and wait for employers to come back to you.</p>
        </div>
        <div className="col-md-5 order-md-1" style = {{backgroundColor: ' #ff3300', height: 500 }}>

          {'{'}% include icons/placeholder.svg width="500" height="500" background="#eee" color="#aaa" className="bd-placeholder-img-lg featurette-image img-fluid mx-auto" %{'}'}
        </div>
        </div>


      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5" style = {{backgroundColor: '#cc0000', height: 500 }}>

          {'{'}% include icons/placeholder.svg width="500" height="500" background="#eee" color="#aaa" className="bd-placeholder-img-lg featurette-image img-fluid mx-auto" %{'}'}
        </div>

      </div>

      <hr className="featurette-divider"/ >


            </div>

    </div>






    )
  }
}

export default Employers
