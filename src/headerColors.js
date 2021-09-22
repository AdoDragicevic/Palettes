import seedColors from "./seedColors";

const headerColors = seedColors.map(palette => palette.colors.map(color => color.color));

console.log(headerColors);

export default headerColors;