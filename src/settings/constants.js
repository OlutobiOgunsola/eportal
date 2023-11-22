export const SIZES = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const DEVICES = {
    mobile: `min-width: ${SIZES.mobileS} and max-width: ${SIZES.tablet}`,
    tablet: `min-width: ${SIZES.tablet} and max-width: ${SIZES.laptop}`,
    laptop: `min-width: ${SIZES.laptop} and max-width: ${SIZES.desktop}`
}