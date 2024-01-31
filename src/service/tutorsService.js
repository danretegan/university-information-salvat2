import apiRequest from "./apiRequest";

async function getTutors() {
  return apiRequest.makeGetRequest("/tutors");
}

const tutorsService = {
  getTutors,
};

export default tutorsService;
