export function convertSlugToUrl(slug, parameters) {
  let url = slug;
  Object.entries(parameters).forEach(([key, value]) => {
    url = url.replace(`:${key}`, value);
  });
  return url;
}

export const setLocalStorageItemWithExpiry = (key, ttl) => {
  const now = new Date();
  const item = {
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorageItemWithExpiry = (key) => {
  const localStorageData = JSON.parse(localStorage.getItem(key));
  if (!localStorageData) {
    return null;
  }
  const now = new Date();
  // compare the expiry time of the key with the current time
  if (now.getTime() > localStorageData?.expiry) {
    localStorage.removeItem(key);
    return null;
  } else {
    return localStorageData;
  }
};

export const getViewInvitationText = () => {
  const userData = localStorage.getItem("user");
  if (userData) {
    const userDataObject = JSON.parse(userData);
    const keys = Object.keys(userDataObject);
    const keyCount = keys.length;
    if (keyCount > 1) {
      return "View Invitation";
    }
  }

  return "Get Started";
};

export const getRandomWithProbability = (A, B) => {
  let randomValue = Math.random();
  if (randomValue < 0.8) {
    return A;
  } else {
    return B;
  }
};

console.log(getRandomWithProbability());
