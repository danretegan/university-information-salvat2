import apiRequest from "./apiRequest";

async function get() {
  return apiRequest.fetchData("/faculties");
}

async function getItem(id) {
  return apiRequest.fetchData(`/faculties/${id}`);
}

async function create(item) {
  return apiRequest.createData("/faculties", item);
}

async function remove(itemId) {
  return apiRequest.deleteData(`/faculties/${itemId}`);
}

async function update(itemId, item) {
  return apiRequest.updateData(`/faculties/${itemId}`, item);
}

const facultiesService = {
  get,
  getItem,
  create,
  remove,
  update,
};

export default facultiesService;
