import API from "./axios";

export default {
  getPlanets(search = "", page = 1) {
    return API.get(`/planets/?search=${search}&page=${page}`);
  },
  getPlanet(id) {
    return API.get(`/planets/${id}/`);
  },
};
