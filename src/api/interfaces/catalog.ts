export interface ICatalogResults {
  CatalogEntryView: ICatalogEntryView[];
}

export interface ICatalogEntryView {
  CustomerReview: ICustomerReview[];
  DPCI: string;
  Images: IImage[];
  ItemDescription: ItemDescription[];
  Offers: IOffer[];
  POBoxProhibited: string;
  PackageDimension: IPackageDimension[];
  Promotions: IPromotion[];
  ReturnPolicy: IReturnPolicy[];
  UPC: string;
  applyCouponLink: string;
  buyable: string;
  callOutMsg: string;
  catEntryId: string;
  classId: string;
  department: string;
  eligibleFor: string;
  inventoryCode: string;
  inventoryStatus: string;
  itemId: string;
  itemType: string;
  manufacturer: string;
  manufacturerPartNumber: string;
  packageQuantity: string;
  partNumber: string;
  purchasingChannel: string;
  purchasingChannelCode: string;
  shortDescription: string;
  title: string;
  webclass: string;
}

export interface IReturnPolicy {
  ReturnPolicyDetails: IReturnPolicyDetail[];
  legalCopy: string;
}

export interface IReturnPolicyDetail {
  guestMessage: string;
  policyDays: string;
  user: string;
}

export interface IPromotion {
  Description: IDescription[];
  endDate: string;
  promotionIdentifier: string;
  promotionType: string;
  startDate: string;
}

export interface IDescription {
  legalDisclaimer: string;
  shortDescription: string;
}

export interface IPackageDimension {
  name: string;
  unit: string;
  value: string;
}

export interface IOffer {
  OfferPrice: IOfferPrice[];
}

export interface IOfferPrice {
  currencyCode: string;
  formattedPriceValue: string;
  priceQualifier: string;
  priceValue: string;
}

export interface ItemDescription {
  features: string[];
}

export interface IImage {
  AlternateImages: IImageLocation[];
  PrimaryImage: IImageLocation[];
  imageCount: string;
  source: string;
}

export interface IImageLocation {
  image: string;
}

export interface ICustomerReview {
  Con: ICon[];
  ConsolidatedRatableAttributes: IRatableAttribute[];
  Pro: ICon[];
  Reviews: IReview[];
  consolidatedOverallRating: string;
  totalPages: string;
  totalReviews: string;
}

export interface IReview {
  RatableAttributes: IRatableAttribute[];
  city: string;
  customerId: string;
  datePosted: string;
  helpfulVotes: string;
  overallRating: string;
  review: string;
  reviewKey: string;
  screenName: string;
  state: string;
  title: string;
  totalComments: string;
  totalVotes: string;
  Comments?: IComment[];
}

export interface IComment {
  city: string;
  commentKey: string;
  commentText: string;
  postedDate: string;
  screenName: string;
  userKey: string;
  userTier: string;
}

export interface ICon {
  RatableAttributes: IRatableAttribute[];
  datePosted: string;
  overallRating: string;
  review: string;
  reviewKey: string;
  screenName: string;
  title: string;
}

export interface IRatableAttribute {
  description: string;
  name: string;
  value: string;
}
