export function getRandomTitle() {
  const isTitle = Math.random() > 0.5;
  let title = null;
  if (isTitle) {
    title =
      "Привіт, мене звати Володимир і я розробник. Цей заголовок з'являється з вірогідністю 50%.";
  }
  return title;
}
