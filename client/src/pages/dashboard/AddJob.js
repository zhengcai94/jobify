import { FormRow, FormRowSelect, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if(isEditing) {
      editJob()
      return;
    }
    createJob();
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const clearValuesHandler = (e) => {
    e.preventDefault();
    clearValues();
  }

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            changeHandler={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            changeHandler={handleJobInput}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText={"job location"}
            name="jobLocation"
            value={jobLocation}
            changeHandler={handleJobInput}
          />
          {/* job type */}
          <FormRowSelect
            name="status"
            value={status}
            changeHandler={handleJobInput}
            list={statusOptions}
          />
          {/* job status */}
          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            changeHandler={handleJobInput}
            list={jobTypeOptions}
          />
          {/* btn container */}
          <div className="btn-container">
            <button
              className="btn btn-block submit-btn"
              onClick={submitHandler}
              disabled={isLoading}
            >
              submit
            </button>
            <button className="btn btn-block submit-btn" onClick={clearValuesHandler}>
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
