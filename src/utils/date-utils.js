function getFormatedDate(value, type) {
  if (!type) return value;

  let date = new Date();
  if (value) {
    date = new Date(value);
  }

  let options;

  if (type === "date") {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export { getFormatedDate, formatDate };
