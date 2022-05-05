var usersService = {endpoint: `${API_HOST_PREFIX}/api/users/login`}; 

usersService.login = (payload) => {
 console.log("userLogin - POST data:", payload);

 const config = {
  method: "POST",
  url: usersService.endpoint,
  data: payload,
  crossdomain: true,
  headers: {"Content-Type": "application/json"},
 };

 console.log("userLogin - POSTing...");
 return axios(config)
 .then(console.log("usersApi (Login) - SUCCESS!"))
 .catch((response) => console.warn("usersApi (Login) - ERROR!", "\n", response));
};


var entityService = {endpoint: `${API_HOST_PREFIX}/api/entities`};

entityService.getAll = () => {
 console.log("entityApi (GET ALL) data:" + "Recipes");

 const config = {
  method: "GET",
  url: entityService.endpoint + "/" + "Recipes",
  crossdomain: true,
  headers: {"Content-Type": "application/json"},
 };

 console.log("entityApi - GETing...");
 return axios(config)
 .catch((response) => console.warn("entityApi (GET All) - ERROR!", "\n", response));
};

entityService.postRecord = (payload) => {
 console.log("entityApi (POST record) data:" + payload);

 const config = {
  method: "POST",
  url: entityService.endpoint + "/" + "Recipes",
  data: payload,
  crossdomain: true,
  headers: {"Content-Type": "application/json"},
 };

 console.log("entityApi - POSTing...");
 return axios(config)
 .catch((response) => console.warn("entityApi (POST record) - ERROR!", "\n", response));
};

entityService.putRecord = (payload) => {
 console.log("entityApi (PUT record) data:" + payload[1]);

 const config = {
  method: "PUT",
  url: entityService.endpoint + "/" + "Recipes" + "/" + payload[0],
  data: payload[1],
  crossdomain: true,
  headers: {"Content-Type": "application/json"},
 };

 console.log("entityApi - PUTing...");
 return axios(config)
 .catch((response) => console.warn("entityApi (PUT record) - ERROR!", "\n", response));
};

entityService.deleteRecord = (payload) => {
 console.log("entityApi (DELETE record) data:" + payload);

 const config = {
  method: "DELETE",
  url: entityService.endpoint + "/" + "Recipes" + "/" + payload,
  crossdomain: true,
  headers: {"Content-Type": "application/json"},
 };

 console.log("entityApi - DELETEing...");
 return axios(config)
 .catch((response) => console.warn("entityApi (DELETE record) - ERROR!", "\n", response));
};
