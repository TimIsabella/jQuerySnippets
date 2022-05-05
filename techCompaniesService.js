var techCompaniesService = {endpoint: `${API_HOST_PREFIX}/api/techcompanies`};

techCompaniesService.postNew = (payload) => {

 const config = {
  method: "POST",
  url: techCompaniesService.endpoint,
  data: payload,
  crossdomain: true,
  headers: {"Content-Type": "application/json"},
 };

 console.log("axios: Tech Companies - POSTing...");
 return axios(config);
};

techCompaniesService.getPaginated = () => {

 const config = {
  method: "GET",
  url: `${techCompaniesService.endpoint}?pageIndex=0&pageSize=10`,
  crossdomain: true,
  headers: {"Content-Type": "application/json"},
 };

 console.log("axios: Tech Companies - GETing paginated... \n");
 return axios(config);
};

techCompaniesService.getPaginatedSearch = (searchTerm) => {

 const config = {
  method: "GET",
  url: `${techCompaniesService.endpoint}/search?pageIndex=0&pageSize=10&q=${searchTerm}`,
  crossdomain: true,
  headers: {"Content-Type": "application/json"},
 };

 console.log("axios: Tech Companies - GETing paginated by search... \n");
 return axios(config);
};

techCompaniesService.getById = (id) => {
 
 const config = {
  method: "GET",
  url: `${techCompaniesService.endpoint}/${id}`,
  crossdomain: true,
  headers: {"Content-Type": "application/json"},
 };

 console.log(`axios: Tech Companies - GETing by ID:${id}... \n`);
 return axios(config);
};

techCompaniesService.putById = (payload) => {

 const config = {
  method: "PUT",
  url: `${techCompaniesService.endpoint}/${payload.id}`,
  data: payload,
  crossdomain: true,
  headers: {"Content-Type": "application/json"},
 };

 console.log(`axios: Tech Companies - PUTing by ID:${payload.id}... \n`);
 return axios(config)
 .catch((response) => console.warn(response));
};
