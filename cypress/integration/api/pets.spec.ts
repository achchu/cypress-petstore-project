import { createNewPet, getPetById } from "../../utils/utils";

describe("When interacting with Pets API", () => {
  beforeEach(() => {
    cy.fixture("pet").as("petData");
  });

  it("should be able to create a new pet and receive a successful response", function () {
    createNewPet(this.petData).then((pet) => {
      expect(pet).to.have.property("id", this.petData.id);
      expect(pet).to.have.property("name", this.petData.name);
    });
  });

  it("should be able to retrieve an existing pet by its ID", function () {
    getPetById(this.petData.id).then((pet) => {
      expect(pet).to.have.property("id", this.petData.id);
      expect(pet).to.have.property("name", this.petData.name);
    });
  });

  // More tests go here...
});
