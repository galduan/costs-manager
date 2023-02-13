
// Team Manager: gal duan – 207951930
// Partner: Tomer Gat – 314754607

export const getStorageValue = (key, defaultValue) => {
  // getting the stored data
  const saved = localStorage.getItem(key);
  let initial
  try {
    initial = JSON.parse(saved);

  } catch {
    initial = defaultValue
  }
  //   return the value if exist else default value as Promise for asynchronous
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(initial || defaultValue);
    }, 1000);

  });
}
export const setStorageValue = (key, value) => {
  // seting new data
  localStorage.setItem(key, JSON.stringify(value));
  //   return Promise for asynchronous
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('success');
    }, 1000);

  });
}