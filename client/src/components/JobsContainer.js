import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numofPages,
  } = useAppContext();

  useEffect(() => {
    const delayForTyping = setTimeout(() => {
      getJobs();
    }, 500);
    return () => clearTimeout(delayForTyping);
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return <h2>No jobs to display...</h2>;
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numofPages > 1 && <PageBtnContainer />}
      {/* pagination buttons */}
    </Wrapper>
  );
};
export default JobsContainer;
