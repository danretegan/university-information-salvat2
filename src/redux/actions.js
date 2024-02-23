export const addFaculty = (value) => {
  return {
    type: "faculties/addFaculty",
    payload: value,
  };
};

export const deleteFaculty = (value) => {
  return {
    type: "faculty/deleteFaculty",
    payload: value,
  };
};

export const setFacultiesSearchTerm = (value) => {
  return {
    type: "faculties/setSearchTerm",
    payload: value,
  };
};
