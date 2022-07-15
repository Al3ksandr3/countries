export function defineMode(appTheme, classToReturnIfApplies) {
  return appTheme === "Dark" ? classToReturnIfApplies : "";
}
