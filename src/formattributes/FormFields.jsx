const loginInputs = [

  {
    labelText: "Email address",
    labelFor: 'email-adress',
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder:"Email address"
  },

  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    isRequired: true,
    placeholder:"Password",
    autoComplete: "password",


  }

]


const registerInputs = [


  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    placeholder: "Username",
    autoComplete: "username",
    isrequired: "true"

  },

  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    isRequired: true,
    autoComplete: "Password",
    placeholder: "Password"

  },

  // {
  //   labelText: "Confirm Password",
  //   labelFor: "confirm-password",
  //   id: "confirm-password",
  //   type: "password",
  //   name: "confirm-password",
  //   autoComplete: "Confirm Password",
  //   placeholder: "Confirm Password",
  //   isRequired: true,

  // }



]


export default (loginInputs, registerInputs);
