import icon from "../styles/Icons/icons8-back-100.svg";

export function uuidv4(): any {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const iconURI = "../styles/Icons/icons8-";

export const iconImport = {
  back: icon
};
