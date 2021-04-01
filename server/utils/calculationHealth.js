class CalculationNutrition {
  constructor({
    genre,
    height,
    weight,
    age,
    bodytype,
    objective,
    exercisetime,
    calorieOfbaseChores = 750,
    calorieSpendForhour = 300,
    baseCalorie = 500,
  }) {
    this.calorieOfbaseChores = calorieOfbaseChores;
    this.calorieSpendForhour = calorieSpendForhour;
    this.baseCalorie = baseCalorie;
    this.caloriesPerGramsOfProtein = 4;
    this.caloriesPerGramsOfLipid = 9;
    this.caloriesPerGramsOfCarbohydrate = 4;
    this.genre = genre;
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.bodytype = bodytype;
    this.objective = objective;
    this.exercisetime = exercisetime;
  }

  calculationBasal() {
    if (this.genre === 'm')
      return (
        66.5 +
        5 * Number(this.height) +
        13.8 * Number(this.weight) -
        6.8 * Number(this.age)
      );

    return (
      655.1 +
      1.8 * Number(this.height) +
      9.5 * Number(this.weight) -
      4.7 * Number(this.age)
    );
  }

  calculationCalorie(basal) {
    const usedCalorie =
      basal +
      this.calorieOfbaseChores +
      this.calorieSpendForhour * this.exercisetime;

    if (this.objective === 'gain') {
      return Math.round(usedCalorie + this.baseCalorie);
    } else if (this.objective === 'lose')
      return Math.round(usedCalorie - this.baseCalorie);

    return Math.round(usedCalorie);
  }

  nutritionalProportion(calorie) {
    let proportionOfProtein = 0.35;
    let proportionOfLipid = 0.4;
    let proportionOfCarbohydrate = 0.25;

    if (this.bodytype === 'ECTOMORPH') {
      proportionOfProtein = 0.25;
      proportionOfLipid = 0.2;
      proportionOfCarbohydrate = 0.55;
    } else if (this.bodytype === 'MESOMORPH') {
      proportionOfProtein = 0.3;
      proportionOfLipid = 0.3;
      proportionOfCarbohydrate = 0.4;
    }

    return {
      protein: Math.round(
        (calorie * proportionOfProtein) / this.caloriesPerGramsOfProtein
      ),
      lipid: Math.round(
        (calorie * proportionOfLipid) / this.caloriesPerGramsOfLipid
      ),
      carbohydrate: Math.round(
        (calorie * proportionOfCarbohydrate) /
          this.caloriesPerGramsOfCarbohydrate
      ),
    };
  }

  needToDrink() {
    return this.weight * 35;
  }

  valuesNutritional() {
    const water = this.needToDrink();
    const basal = this.calculationBasal();
    const calorie = this.calculationCalorie(basal);
    const { protein, lipid, carbohydrate } = this.nutritionalProportion(
      calorie
    );

    return {
      water: water.toString(),
      calories: calorie.toString(),
      protein: protein.toString(),
      lipids: lipid.toString(),
      carbohydrates: carbohydrate.toString(),
    };
  }
}

module.exports = CalculationNutrition;
