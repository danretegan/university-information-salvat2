const initialState = {
  list: [
    {
      id: 1,
      name: "Faculty of Math",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Faculty of Informatics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  searchTerm: "",
};

export const facultiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "faculties/addFaculty":
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case "faculties/deleteFaculty":
      return {
        ...state,
        list: state.list.filter((el) => el.id !== action.payload),
      };

    case "faculties/setSearchTerm":
      return {
        ...state,
        searchTerm: action.payload,
      };

    default:
      return state;
  }
};
