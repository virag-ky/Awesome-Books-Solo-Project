const siteDate = document.querySelector("#date");

export function time() {
  const date = new Date();
  const locale = navigator.language;
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: "false",
  };
  siteDate.textContent = `${date.toLocaleTimeString(locale, options)}`;
}

setInterval(time, 1000);
