import { Assets } from "../../settings/connections";
import { EXPLORE_COPIES } from "../literature";

const EXPLORE_IMAGES = Assets.exploreImages;

export const EXPLORE_CONFIG = {
  motor3pt: {
    literature: EXPLORE_COPIES.motor3pt,
    popularOption: {
      title: "Private Car",
      image: EXPLORE_IMAGES.Motor3PT.PrivateCar,
      price: 15000,
      benefitLimit: 3000000,
    },
    options: [
      {
        title: "Private Bus",
        image: EXPLORE_IMAGES.Motor3PT.PrivateBus,
        price: 20000,
        benefitLimit: 3000000,
      },
      {
        title: "Commercial Bus",
        image: EXPLORE_IMAGES.Motor3PT.CommercialBus,
        price: 20000,
        benefitLimit: 3000000,
      },
      {
        title: "Tricycle",
        image: EXPLORE_IMAGES.Motor3PT.Tricycle,
        price: 5000,
        benefitLimit: 1000000,
      },
      {
        title: "Motorcycle",
        image: EXPLORE_IMAGES.Motor3PT.Motorcycle,
        price: 3000,
        benefitLimit: 1000000,
      },
    ],
  },
  homePP: {
    literature: EXPLORE_COPIES.homePP,
    popularOption: {
      title: "Option A",
      image: EXPLORE_IMAGES.HomePP.OptionA,
      price: 2500,
      benefitLimit: 500000,
    },
    options: [
      {
        title: "Option B",
        image: EXPLORE_IMAGES.HomePP.OptionB,
        price: 3750,
        benefitLimit: 750000,
      },
      {
        title: "Option C",
        image: EXPLORE_IMAGES.HomePP.OptionC,
        price: 5000,
        benefitLimit: 1000000,
      },
      {
        title: "Option D",
        image: EXPLORE_IMAGES.HomePP.OptionD,
        price: 7500,
        benefitLimit: 1500000,
      },
      {
        title: "Option E",
        image: EXPLORE_IMAGES.HomePP.OptionE,
        price: 10000,
        benefitLimit: 2000000,
      },
    ],
  },
  shopPP: {
    literature: EXPLORE_COPIES.shopPP,
    popularOption: {
      title: "Option A",
      image: EXPLORE_IMAGES.ShopPP.OptionA,
      price: 4000,
      benefitLimit: 500000,
    },
    options: [
      {
        title: "Option B",
        image: EXPLORE_IMAGES.ShopPP.OptionB,
        price: 6000,
        benefitLimit: 750000,
      },
      {
        title: "Option C",
        image: EXPLORE_IMAGES.ShopPP.OptionC,
        price: 8100,
        benefitLimit: 1000000,
      },
      {
        title: "Option D",
        image: EXPLORE_IMAGES.ShopPP.OptionD,
        price: 12100,
        benefitLimit: 1500000,
      },
      {
        title: "Option E",
        image: EXPLORE_IMAGES.ShopPP.OptionE,
        price: 16250,
        benefitLimit: 2000000,
      },
    ],
  },
  parcelPP: {
    literature: EXPLORE_COPIES.parcelPP,
    popularOption: {
      title: "Option A",
      image: EXPLORE_IMAGES.ParcelPP.OptionA,
      price: 1000,
      benefitLimit: 100000,
    },
    options: [
      {
        title: "Option B",
        image: EXPLORE_IMAGES.ParcelPP.OptionB,
        price: 1500,
        benefitLimit: 1500000,
      },
      {
        title: "Option C",
        image: EXPLORE_IMAGES.ParcelPP.OptionC,
        price: 2000,
        benefitLimit: 200000,
      },
      {
        title: "Option D",
        image: EXPLORE_IMAGES.ParcelPP.OptionD,
        price: 2500,
        benefitLimit: 250000,
      },
      {
        title: "Option E",
        image: EXPLORE_IMAGES.ParcelPP.OptionE,
        price: 3000,
        benefitLimit: 300000,
      },
    ],
  },
  personalCP: {
    literature: EXPLORE_COPIES.PersonalCP,
    popularOption: {
      title: "Option A",
      image: EXPLORE_IMAGES.PersonalCP.OptionA,
      price: 2625,
      benefitLimit: 250000,
    },
    options: [
      {
        title: "Option B",
        image: EXPLORE_IMAGES.PersonalCP.OptionB,
        price: 3375,
        benefitLimit: 300000,
      },
      {
        title: "Option C",
        image: EXPLORE_IMAGES.PersonalCP.OptionC,
        price: 5250,
        benefitLimit: 500000,
      },
      {
        title: "Option D",
        image: EXPLORE_IMAGES.PersonalCP.OptionD,
        price: 7875,
        benefitLimit: 750000,
      },
      {
        title: "Option E",
        image: EXPLORE_IMAGES.PersonalCP.OptionE,
        price: 10500,
        benefitLimit: 1000000,
      },
    ],
  },
  royalGC: {
    literature: EXPLORE_COPIES.royalGC,
    popularOption: {
      title: "Option A",
      image: EXPLORE_IMAGES.RoyalGC.OptionA,
      price: 5150,
      benefitLimit: 500000,
    },
    options: [
      {
        title: "Option B",
        image: EXPLORE_IMAGES.RoyalGC.OptionB,
        price: 7725,
        benefitLimit: 750000,
      },
      {
        title: "Option C",
        image: EXPLORE_IMAGES.RoyalGC.OptionC,
        price: 103,
        benefitLimit: 1000000,
      },
      {
        title: "Option D",
        image: EXPLORE_IMAGES.RoyalGC.OptionD,
        price: 14000,
        benefitLimit: 1500000,
      },
      {
        title: "Option E",
        image: EXPLORE_IMAGES.RoyalGC.OptionE,
        price: 17700,
        benefitLimit: 2000000,
      },
    ],
  },
  royalFC: {
    literature: EXPLORE_COPIES.royalFC,
    popularOption: {
      title: "Option A",
      image: EXPLORE_IMAGES.RoyalFC.OptionA,
      price: 2625,
      benefitLimit: 250000,
    },
    options: [
      {
        title: "Option B",
        image: EXPLORE_IMAGES.RoyalFC.OptionB,
        price: 5250,
        benefitLimit: 500000,
      },
      {
        title: "Option C",
        image: EXPLORE_IMAGES.RoyalFC.OptionC,
        price: 10500,
        benefitLimit: 1000000,
      },
    ],
  },
  parcelPP: {
    literature: EXPLORE_COPIES.parcelPP,
    popularOption: {
      title: "Option A",
      image: EXPLORE_IMAGES.ParcelPP.OptionA,
      price: 1000,
      benefitLimit: 100000,
    },
    options: [
      {
        title: "Option B",
        image: EXPLORE_IMAGES.ParcelPP.OptionB,
        price: 1500,
        benefitLimit: 1500000,
      },
      {
        title: "Option C",
        image: EXPLORE_IMAGES.ParcelPP.OptionC,
        price: 2000,
        benefitLimit: 200000,
      },
      {
        title: "Option D",
        image: EXPLORE_IMAGES.ParcelPP.OptionD,
        price: 2500,
        benefitLimit: 250000,
      },
      {
        title: "Option E",
        image: EXPLORE_IMAGES.ParcelPP.OptionE,
        price: 3000,
        benefitLimit: 300000,
      },
    ],
  },
};
