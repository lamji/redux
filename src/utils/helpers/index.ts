// for APIs
// usage: formatToQueries({ name: ser, position: ino }) = return "?name=ser&position=ino"
export const formatToQueries = (query: { [x: string]: any }) => {
  const keys = Object.keys(query);
  const queries = keys
    ?.map((item) => {
      return query[item] && `${item}=${query[item]}`;
    })
    .join("&");

  return queries;
};

// Format Number into Philippines CUrrency
// usage: currency.format(100) = return ₱100.00
export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PHP",
});

// Get Discount percentage of two numbers
// usage: getDiscountPercentage(originalPrice, price) = return "100%"
export const getDiscountPercentage = (
  numA: number | string,
  numB: number | string
) => {
  const isEqual = numA === numB;
  const deci = ((Number(numA) - Number(numB)) / Number(numA)) * 100 || 0;
  const value = deci < 1 ? deci.toFixed(2) : deci.toFixed(0);
  if (isEqual) return;
  return `${value}%`;
};

// Get abbreviation of string
// usage: abbr(str) = Serino Admin -> SA
export const abbr = (str: string) => {
  return (str || "")
    .split(" ")
    .map((item) => item[0])
    .join("");
};

// get params in window.localtion.search
// usage: getParams?.search = return value as string
export const getParams: any = new Proxy(
  new URLSearchParams(window.location.search),
  {
    get: (searchParams, prop: string) => searchParams.get(prop),
  }
);
