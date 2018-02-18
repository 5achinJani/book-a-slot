export const getErrorObject = error => {
  let message = "Error!";
  console.log(error);
  if (error && error.data && error.data.message) {
    // API server error message
    message = error.data.message;
  } else if (error && error.message) {
    // js error message
    message = error.message;
  }
  return {
    message
  };
};

export const normalize = ({ data, key }) => {
  let obj = {};
  let ids = [];
  data.forEach(element => {
    obj[element[key]] = element;
    ids.push(element[key]);
  });
  return { data: obj, ids };
};

export const genUniqueId = () => {
  return Date.now();
};
