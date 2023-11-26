import HomePPIcon from "@/assets/images/icons/home.png";

const POLICY_COPIES = {
  motor3pt: {
    summary:
      "This policy covers the third party against Bodily injury and death resulting from a car accident caused by the insured the legal liability of the insured where damage was caused to another person’s property.",
    tag: "A policy to protect you",
  },
  homePP: {
    summary:
      "All over the world, people experience the loss of their homes in various ways. The Royal Exchange Home Protection Policy&trade; protects your investments and covers you from the risk.",
    tag: "a policy for your estate",
    icon: HomePPIcon,
    // background: ,
    // image: "",
  },
  personalCP: {
    summary:
      "Ensure you have adequate provision for yourself against unforeseen circumstances. Facing everyday life risks could result in an accident. This product provides compensation for medical expenses, permanent disability and death",
    tag: "the policy of the guardian",
  },
  shopPP: {
    summary:
      "Shops, supermarket business owners are exposed to risks of loss or damage resulting from fire, burglary, flood, windstorm etc. You get protection for your goods and shop/office from us through this insurance cover.",
    tag: "a policy for the merchant",
  },
  parcelPP: {
    summary:
      "This plan provides cover for your goods while in transit by road, rail, or inland waterway. It also covers your goods while boarding or unloading and while temporarily garaged in the course of transit. The product will indemnify you on goods lost or damaged as a result of accident and theft",
    tag: "the policy that delivers",
  },
  royalGC: {
    summary:
      "Royal Group Care is an insurance product that is specially and uniquely designed for Groups, Associations and Staff of organizations to provide compensation in case of an accident resulting in bodily injury, medical expenses, permanent disability, or death. It has different levels of benefits/affordable premiums to choose from",
    tag: "a policy like a fort",
  },
  royalFC: {
    summary:
      "Ensure your family have adequate provision for yourself against unexpected events such as accidents. This product provides compensation for you and your family members in a case of such event. Stay safe, stay protected with royal personal care product care product specially designed for your family",
    tag: "a policy for all families",
  },
  driverPP: {
    summary:
      "This product is a compensation plan specially designed for licensed, personal drivers, corporate drivers, Commercial drivers, Dispatch riders, Tricycle riders and Motorcycle riders to provide payment for medical expenses in event of an accident resulting in medical expenses. Also, the product provides compensation to their dependents (Children, wives, etc.) in case death resulting from accident. Also, if an accident results in permanent disability, the product also ensures the payment of compensation to the subscriber in the amounts stated below – which depends on the option you chose.",
    tag: "the policy of the roadster",
  },
  studentPP: {
    summary:
      "Sometimes children/ward drops out of school due to permanent disability or death of parent or guardian. This cover provide students/ward the assurance of continuous education in situation where this occurs.",
    tag: "the policy for your future",
  },
};

export const ErrorCopies = {
  404: {
    header: "Error - 404.",
    summary:
      "Seems we might have renamed or moved this resource. Please check back later or contact your administrator if the error persists.",
  },
};

export const INPUT_PLACEHOLDERS = {
  EMAIL: "Email address",
  PHONE: "Please enter your phone number",
  ADDRESS_HOME: "Please enter your housing address",
  PASSWORD_INPUT: "Enter password",
  PASSWORD_CREATE:
    "Create Password. Must contain at least 8 characters long, 1 uppercase letter, 1 lowercase letter, 1 symbol and 1 number.",
};

export const EXPLORE_COPIES = {
  motor3pt: {
    title: "Motor 3rd-Party",
    summary: POLICY_COPIES["motor3pt"].summary,
  },
  homePP: {
    title: "Home Protection Plan",
    summary: POLICY_COPIES["homePP"].summary,
  },
  personalCP: {
    title: "Personal Protection Plan",
    summary: POLICY_COPIES["personalCP"].summary,
  },
  shopPP: {
    title: "Shop Protection Plan",
    summary: POLICY_COPIES["shopPP"].summary,
  },
  parcelPP: {
    title: "Parcel Protection Plan",
    summary: POLICY_COPIES["parcelPP"].summary,
  },
  royalGC: {
    title: "Royal Group Care",
    summary: POLICY_COPIES["royalGC"].summary,
  },
  royalFC: {
    title: "Royal Family Care",
    summary: POLICY_COPIES["royalFC"].summary,
  },
  studentPP: {
    title: "Student Protection Plan",
    summary: POLICY_COPIES["studentPP"].summary,
  },
  driverPP: {
    title: "Drivers Protection Plan",
    summary: POLICY_COPIES["driverPP"].summary,
  },
};

export const PolicyCopies = POLICY_COPIES;
