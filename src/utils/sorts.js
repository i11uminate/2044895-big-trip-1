
export const sortTime = (a, b) => {
  if (a.time.start < b.time.start) {
    return 1;
  }

  if (a.time.start > b.time.start) {
    return -1;
  }

  return 0;
};

export const sortPrice = (a, b) => {
  if (a.offers.cost < b.offers.cost) {
    return 1;
  }

  if (a.offers.cost > b.offers.cost) {
    return -1;
  }

  return 0;
};
