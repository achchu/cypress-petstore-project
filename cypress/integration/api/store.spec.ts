import {
  createNewOrder,
  getOrderById,
  getFormattedDate,
} from "../../utils/utils";

describe("When interacting with Store API", () => {
  beforeEach(() => {
    cy.fixture("order").as("orderData");
  });

  it("should be able to place a new order for a pet", function () {
    this.orderData.shipDate = getFormattedDate();
    createNewOrder(this.orderData).then((order) => {
      // toISOString() to convert the received date to ISO format
      const receivedDate = new Date(order.shipDate).toISOString();

      expect(order).to.have.property("id", this.orderData.id);
      expect(order).to.have.property("petId", this.orderData.petId);
      expect(order).to.have.property("quantity", this.orderData.quantity);
      expect(order).to.have.property("status", this.orderData.status);
      expect(receivedDate).to.equal(this.orderData.shipDate); // compare the dates in the same format
    });
  });

  it("should be able to retrieve an order by its ID", function () {
    getOrderById(this.orderData.id).then((order) => {
      expect(order).to.have.property("id", this.orderData.id);
      expect(order).to.have.property("petId", this.orderData.petId);
      expect(order).to.have.property("quantity", this.orderData.quantity);
      expect(order).to.have.property("status", this.orderData.status);
    });
  });

  // More tests go here...
});
