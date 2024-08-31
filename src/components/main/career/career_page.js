import React, { useState } from 'react';

export default function CareerPage() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    resume: null,
    whyHire: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);

    // Hide the form after submission
    setFormVisible(false);
  };

  const handleApplyClick = () => {
    setFormVisible(true);

    // Ensure that the scroll occurs after the form is visible
    setTimeout(() => {
      document.getElementById('upload-resume').scrollIntoView({ behavior: 'smooth' });
    }, 10); // Short delay to ensure the form is visible before scrolling
  };

  return (
    <>
      <div className="careerSection w-100 padding animate-section1" id="current-openings">
        <div className="container">
          <p>Working at Golden Exports offers a world full of opportunities. Come and join our team.</p>
          <div className="heading mx-auto">
            <h2>Job <span className="heading-opening">Opening </span></h2>
          </div>
          <div className="table-responsive">
            <table className="table table-striped mb-0">
              <thead>
                <tr>
                  <th scope="col">S.No.</th>
                  <th scope="col">Position</th>
                  <th scope="col">Nos.</th>
                  <th scope="col">Location</th>
                  <th scope="col">Qualification</th>
                  <th scope="col">Min. Exp.</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Sales Manager</td>
                  <td>5</td>
                  <td>New Delhi Airport</td>
                  <td>Graduate</td>
                  <td>5</td>
                  <td>
                    <button
                      type="button"
                      className="career_appBtn btn btn-primary aplnowbtn"
                      onClick={handleApplyClick}
                      data-position="Sales Manager"
                      data-locations="New Delhi Airport"
                    >
                      Apply Now
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Duty Manager</td>
                  <td>1</td>
                  <td>Agra</td>
                  <td>Graduate</td>
                  <td>2</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary career_appBtn aplnowbtn"
                      onClick={handleApplyClick}
                      data-position="Duty Manager"
                      data-locations="Agra"
                    >
                      Apply Now
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container">
        <hr className="my-0" />
      </div>

      <div
        className={`Upload_section w-100 padding animate-section2 ${isFormVisible ? 'show' : 'hide'}`}
        id="upload-resume"
        style={{
          transition: 'opacity 0.5s ease, max-height 0.5s ease',
          opacity: isFormVisible ? 1 : 0,
          maxHeight: isFormVisible ? '1000px' : '0',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div className="heading mx-auto">
            <h2 className="h2">Upload <span className="heading-opening">Resume</span></h2>
          </div>
          <div className="anotherForm w-100">
            <span className="status text-danger"></span>
            <form className="careersform" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-4 form-group">
                  <input
                    type="text"
                    name="name"
                    id="crname"
                    className="form-control form-control-dark"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleInputChange}
                    maxLength="30"
                  />
                </div>
                <div className="col-sm-4 form-group">
                  <input
                    type="text"
                    name="email"
                    id="cremail"
                    className="form-control form-control-dark"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleInputChange}
                    maxLength="30"
                  />
                </div>
                <div className="col-sm-4 form-group">
                  <input
                    type="text"
                    name="mobile"
                    id="crmobile"
                    className="form-control form-control-dark"
                    placeholder="Mobile*"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    maxLength="10"
                  />
                </div>
                <div className="col-sm-4 form-group">
                  <label htmlFor="resume" className="upload-resume">Upload Resume</label>
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    className="form-control form-control-dark"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="col-sm-4 form-group mt-lg-4 mt-md-4 mt-sm-4 mt-0">
                  <input
                    type="text"
                    name="whyHire"
                    id="whyshould"
                    className="form-control form-control-dark"
                    placeholder="Why should we hire you?"
                    value={formData.whyHire}
                    onChange={handleInputChange}
                    readOnly
                  />
                </div>
                <div className="col-sm-4 readmore">
                  <input type="hidden" name="crpostion" id="crpostion" value="active" />
                  <input type="hidden" name="crlocation" id="crlocation" value="active" />
                  <input type="hidden" name="car_action" id="car_action" value="active" />
                  <button type="submit" name="Submit" value="Submit" className="button">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <p className="mb-0 mt-4">
            Don’t see the role you’re looking for? Send your resume at <a className="text-red" href="mailto:hr@golden-exports.in">hr@golden-exports.in</a>. We’re always looking for talented people to join our team.
          </p>
        </div>
      </div>
    </>
  );
}
