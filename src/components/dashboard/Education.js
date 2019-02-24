import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';


class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const { user } = this.props.auth


      const educationEmp = this.props.education.map(edu => (
        <tr key={edu._id}>
          <td>{edu.university}</td>
          <td>{edu.degree}</td>
          <td>
            <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
            {edu.to === null ? (
              'Now'
            ) : (
              <Moment format="YYYY/MM/DD">{edu.to}</Moment>
            )}
          </td>
          <td>
            <button
              onClick={this.onDeleteClick.bind(this, edu._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      ));



      const educationStud = this.props.education.map(edu => (
        <tr key={edu._id}>
          <td>{edu.university}</td>
          <td>{edu.degree}</td>
          <td>
            <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
            {edu.to === null ? (
              'Now'
            ) : (
              <Moment format="YYYY/MM/DD">{edu.to}</Moment>
            )}
          </td>
          <td>
            <button
              onClick={this.onDeleteClick.bind(this, edu._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      ));

      const EduRender = () => user.__type === 'Employer' ?  educationEmp : educationStud
      const EduRendernew = new EduRender()

    /*  const EmpEduc = (
        <div>
          <h4 className="mb-4">Education Credentials</h4>
          <table className="table">
            <thead>
              <tr>
                <th>University</th>
                <th>Degree</th>
                <th>Years</th>
                <th />
              </tr>
              {education}
            </thead>
          </table>
          </div>

      )

      const StuEduc = (
        <div>
          <h4 className="mb-4">Education Credentials</h4>
          <table className="table">
            <thead>
              <tr>
                <th>University</th>
                <th>Degree</th>
                <th>Years</th>
                <th />
              </tr>
              {education}
            </thead>
          </table>
          </div>

      )*/


    //  const EduRender = () => user.__type === 'Employer' ? EmpEduc  : StuEduc
    //const EduRendernew = new EduRender
    return (

      <div className="container" >
        <div className="row">
          <div className="col-md-12 col-sm-12" >
        <h4 className="mb-4">Education Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th />
            </tr>
            {EduRendernew}
          </thead>
        </table>
      </div>
      </div>
      </div>
    );
  }
}

Education.propTypes = {

  deleteEducation: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, { deleteEducation})(Education);
