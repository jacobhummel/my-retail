import * as React from "react";

import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import { IImageLocation } from "../../../../api/interfaces/catalog";
import ImageCarousel, {
  TESTID_CAROUSEL_PAGE_NEXT,
  TESTID_CAROUSEL_PAGE_PREV,
  TESTID_CAROUSEL_PRIMARY_IMAGE,
  TESTID_CAROUSEL_TITLE
} from "../ImageCarousel";

configure({ adapter: new Adapter() });

const title: string = "Hello world";
const images: IImageLocation[] = [
  {
    image: "http://target.scene7.com/is/image/Target/14263758_Alt01"
  },
  {
    image: "http://target.scene7.com/is/image/Target/14263758_Alt03"
  },
  {
    image: "http://target.scene7.com/is/image/Target/14263758_Alt02"
  },
  {
    image: "http://target.scene7.com/is/image/Target/14263758_Alt04"
  },
  {
    image: "http://target.scene7.com/is/image/Target/14263758_Alt05"
  },
  {
    image: "http://target.scene7.com/is/image/Target/14263758_Alt06"
  },
  {
    image: "http://target.scene7.com/is/image/Target/14263758_Alt07"
  }
];

test("Carousel renders correct title", () => {
  const defaultSelectedImage: number = 0;

  const imageCarousel = shallow(
    <ImageCarousel
      title={title}
      images={images}
      defaultSelectedImage={defaultSelectedImage}
    />
  );

  expect(
    imageCarousel.find(`[data-testid="${TESTID_CAROUSEL_TITLE}"]`).children()
      .length
  ).toEqual(1);

  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_TITLE}"]`)
      .children() // needed for styled component
      .first()
      .text()
  ).toEqual(title);
});

test("Carousel implicitly renders default image 0", () => {
  const defaultSelectedImage: number = 0;

  const imageCarousel = shallow(
    <ImageCarousel title={title} images={images} />
  );

  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .exists()
  ).toEqual(true);

  // Check that defaultSelectedImage is showing in primary
  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[defaultSelectedImage].image);
});

test("Carousel explicity renders default image 1", () => {
  const defaultSelectedImage: number = 1;

  const imageCarousel = shallow(
    <ImageCarousel
      title={title}
      images={images}
      defaultSelectedImage={defaultSelectedImage}
    />
  );

  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .exists()
  ).toEqual(true);

  // Check that defaultSelectedImage is showing in primary
  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[defaultSelectedImage].image);
});

test("Carousel pages next through images", () => {
  let selectedImageIndex: number = 1;

  const imageCarousel = shallow(
    <ImageCarousel
      title={title}
      images={images}
      defaultSelectedImage={selectedImageIndex}
    />
  );

  // Check that defaultSelectedImage is showing in primary
  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[selectedImageIndex].image);

  expect(
    imageCarousel.find(`[data-testid="${TESTID_CAROUSEL_PAGE_NEXT}"]`).exists()
  ).toEqual(true);

  imageCarousel
    .find(`[data-testid="${TESTID_CAROUSEL_PAGE_NEXT}"]`)
    .simulate("click");

  selectedImageIndex += 1;
  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[selectedImageIndex].image);

  imageCarousel
    .find(`[data-testid="${TESTID_CAROUSEL_PAGE_NEXT}"]`)
    .simulate("click");
  selectedImageIndex += 1;

  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[selectedImageIndex].image);

  imageCarousel
    .find(`[data-testid="${TESTID_CAROUSEL_PAGE_NEXT}"]`)
    .simulate("click");
  selectedImageIndex += 1;

  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[selectedImageIndex].image);

  imageCarousel
    .find(`[data-testid="${TESTID_CAROUSEL_PAGE_NEXT}"]`)
    .simulate("click");
  selectedImageIndex += 1;

  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[selectedImageIndex].image);

  imageCarousel
    .find(`[data-testid="${TESTID_CAROUSEL_PAGE_NEXT}"]`)
    .simulate("click");
  selectedImageIndex += 1;

  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[selectedImageIndex].image);

  // Make sure it looped back to 0
  imageCarousel
    .find(`[data-testid="${TESTID_CAROUSEL_PAGE_NEXT}"]`)
    .simulate("click");
  selectedImageIndex = 0;

  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[selectedImageIndex].image);
});

test("Carousel pages back through images", () => {
  let selectedImageIndex: number = 1;

  const imageCarousel = shallow(
    <ImageCarousel
      title={title}
      images={images}
      defaultSelectedImage={selectedImageIndex}
    />
  );

  // Check that defaultSelectedImage is showing in primary
  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[selectedImageIndex].image);

  expect(
    imageCarousel.find(`[data-testid="${TESTID_CAROUSEL_PAGE_PREV}"]`).exists()
  ).toEqual(true);

  imageCarousel
    .find(`[data-testid="${TESTID_CAROUSEL_PAGE_PREV}"]`)
    .simulate("click");

  selectedImageIndex -= 1;
  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[selectedImageIndex].image);

  // Make sure it looped back to the end
  imageCarousel
    .find(`[data-testid="${TESTID_CAROUSEL_PAGE_PREV}"]`)
    .simulate("click");
  selectedImageIndex = images.length - 1;

  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[selectedImageIndex].image);

  imageCarousel
    .find(`[data-testid="${TESTID_CAROUSEL_PAGE_PREV}"]`)
    .simulate("click");
  selectedImageIndex -= 1;

  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[selectedImageIndex].image);

  imageCarousel
    .find(`[data-testid="${TESTID_CAROUSEL_PAGE_PREV}"]`)
    .simulate("click");
  selectedImageIndex -= 1;

  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[selectedImageIndex].image);

  imageCarousel
    .find(`[data-testid="${TESTID_CAROUSEL_PAGE_PREV}"]`)
    .simulate("click");
  selectedImageIndex -= 1;

  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[selectedImageIndex].image);

  imageCarousel
    .find(`[data-testid="${TESTID_CAROUSEL_PAGE_PREV}"]`)
    .simulate("click");
  selectedImageIndex -= 1;

  expect(
    imageCarousel
      .find(`[data-testid="${TESTID_CAROUSEL_PRIMARY_IMAGE}"]`)
      .prop("src")
  ).toEqual(images[selectedImageIndex].image);
});
