import * as React from "react";

import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import PurchaseOptions, {
  TESTID_AVAILABLE_IN_STORE,
  TESTID_AVAILABLE_ONLINE
} from "../PurchaseOptions";

configure({ adapter: new Adapter() });

test("PurchaseOptions shows Online and In store for purchasingChannelCode=0", () => {
  // Render a checkbox with label in the document
  const purchaseOptions = shallow(
    <PurchaseOptions purchasingChannelCode="0" />
  );

  expect(
    purchaseOptions
      .find(`[data-test-id="${TESTID_AVAILABLE_ONLINE}"]`)
      .children().length
  ).toEqual(1);

  expect(
    purchaseOptions
      .find(`[data-test-id="${TESTID_AVAILABLE_IN_STORE}"]`)
      .children().length
  ).toEqual(1);

  expect(
    purchaseOptions
      .find(`[data-test-id="${TESTID_AVAILABLE_ONLINE}"]`)
      .children() // needed for styled component
      .first()
      .text()
  ).toEqual("Add to cart");

  expect(
    purchaseOptions
      .find(`[data-test-id="${TESTID_AVAILABLE_IN_STORE}"]`)
      .children() // needed for styled component
      .first()
      .text()
  ).toEqual("Pick up in store");
});

test("PurchaseOptions shows Online only for purchasingChannelCode=1", () => {
  const purchaseOptions = shallow(
    <PurchaseOptions purchasingChannelCode="1" />
  );

  expect(
    purchaseOptions
      .find(`[data-test-id="${TESTID_AVAILABLE_ONLINE}"]`)
      .children().length
  ).toEqual(1);

  expect(
    purchaseOptions
      .find(`[data-test-id="${TESTID_AVAILABLE_IN_STORE}"]`)
      .children().length
  ).toEqual(0);

  expect(
    purchaseOptions
      .find(`[data-test-id="${TESTID_AVAILABLE_ONLINE}"]`)
      .children() // needed for styled component
      .first()
      .text()
  ).toEqual("Add to cart");
});

test("PurchaseOptions shows In store only for purchasingChannelCode=3", () => {
  // Render a checkbox with label in the document
  const purchaseOptions = shallow(
    <PurchaseOptions purchasingChannelCode="2" />
  );

  expect(
    purchaseOptions
      .find(`[data-test-id="${TESTID_AVAILABLE_IN_STORE}"]`)
      .children().length
  ).toEqual(1);

  expect(
    purchaseOptions
      .find(`[data-test-id="${TESTID_AVAILABLE_ONLINE}"]`)
      .children().length
  ).toEqual(0);

  expect(
    purchaseOptions
      .find(`[data-test-id="${TESTID_AVAILABLE_IN_STORE}"]`)
      .children() // needed for styled component
      .first()
      .text()
  ).toEqual("Pick up in store");
});
