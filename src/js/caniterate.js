export default function canIterate(input) {
  try {
    let iterator = input[Symbol.iterator]();
    return true;
  } catch {
    return false;
  }
}
