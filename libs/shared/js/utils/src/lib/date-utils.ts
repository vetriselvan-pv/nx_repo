//  To check the input date is valid or not
export const isDateValid = (dateVal: any) =>
  !Number.isNaN(new Date(dateVal).valueOf())

//  Find the day of year

export const dayOfYear = (dateVal: any) =>
  Math.floor(
    (dateVal - Number(new Date(dateVal.getFullYear(), 0, 0))) /
      1000 /
      60 /
      60 /
      24
  )
