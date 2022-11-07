interface Cookie {
  name: string;
  value: string;
}

const getCookie = (name: string) => {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift();
  }
};

const setCookie = (name: string, value: string) => {
  let date = new Date();
  date.setTime(date.getTime() + 29 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString}};`;
};

const deleteCookie = (name: string) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};

export { getCookie, setCookie, deleteCookie };
