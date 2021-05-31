export function mail(mail) {
  return {
    type: "SAVE_MAIL",
    data: mail,
  };
}

export function shared() {
  return {
    type: "SHARED",
  };
}
