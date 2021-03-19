function calculationValuesNutritional(user) {
  let calorie,
    protein,
    lipid,
    carbohydrate = null;

  const calorieOfbaseChores = 750;
  const calorieSpendForhour = 300;
  const baseCalorieToLoseOrGainWeight = 500;
  const caloriesPerGramsOfProtein = 4;
  const caloriesPerGramsOfLipid = 9;
  const caloriesPerGramsOfCarbohydrate = 4;

  if (user.genre === 'male') {
    const basalMetabolicRateMale =
      66.5 +
      5 * Number(user.height) +
      13.8 * Number(user.weight) -
      6.8 * Number(user.age);
    calorie =
      basalMetabolicRateMale +
      calorieOfbaseChores +
      calorieSpendForhour * user.physicalactivitytime;
  } else {
    const basalMetabolicRateFemale =
      655.1 +
      1.8 * Number(user.height) +
      9.5 * Number(user.weight) -
      4.7 * Number(user.age);
    calorie =
      basalMetabolicRateFemale +
      calorieOfbaseChores +
      calorieSpendForhour * user.physicalactivitytime;
  }

  if (user.wantaboutweight === 'lose') {
    calorie -= baseCalorieToLoseOrGainWeight;
  } else if (user.wantaboutweight === 'gain') {
    calorie += baseCalorieToLoseOrGainWeight;
  }

  if (user.bodytype === 'ectomorfo') {
    const proportionOfProtein = 0.25;
    const proportionOfLipid = 0.2;
    const proportionOfCarbohydrate = 0.55;

    protein = (calorie * proportionOfProtein) / caloriesPerGramsOfProtein;
    lipid = (calorie * proportionOfLipid) / caloriesPerGramsOfLipid;
    carbohydrate =
      (calorie * proportionOfCarbohydrate) / caloriesPerGramsOfCarbohydrate;
  } else if (user.bodytype === 'mesomorfo') {
    const proportionOfProtein = 0.3;
    const proportionOfLipid = 0.3;
    const proportionOfCarbohydrate = 0.4;

    protein = (calorie * proportionOfProtein) / caloriesPerGramsOfProtein;
    lipid = (calorie * proportionOfLipid) / caloriesPerGramsOfLipid;
    carbohydrate =
      (calorie * proportionOfCarbohydrate) / caloriesPerGramsOfCarbohydrate;
  } else {
    const proportionOfProtein = 0.35;
    const proportionOfLipid = 0.4;
    const proportionOfCarbohydrate = 0.25;

    protein = (calorie * proportionOfProtein) / caloriesPerGramsOfProtein;
    lipid = (calorie * proportionOfLipid) / caloriesPerGramsOfLipid;
    carbohydrate =
      (calorie * proportionOfCarbohydrate) / caloriesPerGramsOfCarbohydrate;
  }

  const ValuesNutritional = {
    calorie: Math.round(calorie),
    protein: Math.round(protein),
    lipid: Math.round(lipid),
    carbohydrate: Math.round(carbohydrate),
  };

  return ValuesNutritional;
}

module.exports = calculationValuesNutritional;
