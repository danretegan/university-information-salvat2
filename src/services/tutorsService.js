import apiRequest from "./apiRequest";

async function getTutors() {
  return apiRequest.fetchData("/tutors");
}

const tutorsService = {
  getTutors,
};

export default tutorsService;
