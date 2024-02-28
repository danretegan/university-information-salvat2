import apiRequest from "./apiRequest";

async function getTutors() {
  return apiRequest.fetchData("/tutors/");
}

async function createTutor(tutor) {
  return apiRequest.createData("/tutors/", tutor);
}

const tutorsService = {
  getTutors,
  createTutor,
};

export default tutorsService;
