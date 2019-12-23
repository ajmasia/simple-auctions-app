export const checkAuction = (buyerValue, sellerValue) => {
  return (
    parseInt(buyerValue, 10) >= parseInt(sellerValue, 10) &&
    sellerValue !== null
  )
}
