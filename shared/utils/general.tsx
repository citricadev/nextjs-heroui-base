// To get a CSS variable value on typescript or javascript file
export function getCSSVariable(variableName: string) {
  // Get the value from the :root or any other element
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
}