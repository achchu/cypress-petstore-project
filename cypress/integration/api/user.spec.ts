import { createUser, getUserByUsername } from "../../utils/utils";

describe("When interacting with the User API", () => {
  let userData;

  before(() => {
    cy.fixture("user").then((user) => {
      userData = user;
    });
  });

  it("should be able to create a new user and receive a successful response", () => {
    createUser(userData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("code", 200);
      expect(response.body).to.have.property("type", "unknown");
      expect(response.body).to.have.property("message", "123"); // the actual response body is different to the docs, it doesn't return 'ok'
    });
  });

  it("should be able to retrieve an existing user by username", () => {
    getUserByUsername(userData.username).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("username", userData.username);
      expect(response.body).to.have.property("firstName", userData.firstName);
      expect(response.body).to.have.property("lastName", userData.lastName);
      expect(response.body).to.have.property("email", userData.email);
      expect(response.body).to.have.property("password", userData.password);
      expect(response.body).to.have.property("phone", userData.phone);
      expect(response.body).to.have.property("userStatus", userData.userStatus);
    });
  });

  // More tests go here...
});
