export const validata = (data , type) => {
  const errors = {};


  if (!data.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "password is required";
  } else if (data.password.length < 6) {
    errors.password = "password neesto be 6 charecter or more";
  } else {
    delete errors.password;
  }


  if (type === "Signup") {
    
  if (!data.name.trim()) {
    errors.name = "Username riquired";
  } else {
    delete errors.name;
  }
  
  if (!data.confirmPassword) {
    errors.confirmPassword = "confirm tha password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "password do not match";
  } else {
    delete errors.confirmPassword;
  }

  // if (data.isAccepted) {
  //   delete errors.isAccepted;
  // } else {
  //   errors.isAccepted = "Accept our requlation";
  // }

  }

  return errors;
};
