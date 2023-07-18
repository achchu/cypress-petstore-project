export function getFormattedDate(): string {
  const date = new Date();
  return date.toISOString();
}

export const createNewPet = (petData) => {
  return cy
    .request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/pet`,
      body: petData,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .its("body");
};

export const getPetById = (id) => {
  return cy.request(`${Cypress.env("apiUrl")}/pet/${id}`).its("body");
};

export const createNewOrder = (orderData) => {
  return cy
    .request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/store/order`,
      body: orderData,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .its("body");
};

export const getOrderById = (id) => {
  return cy.request(`${Cypress.env("apiUrl")}/store/order/${id}`).its("body");
};

export const createUser = (userData) => {
  return cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}/user`,
    body: userData,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const getUserByUsername = (username) => {
  return cy.request(`${Cypress.env("apiUrl")}/user/${username}`);
};
