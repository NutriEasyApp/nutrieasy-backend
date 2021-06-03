class CreateMealDiet {
  constructor(diet) {
    this.carbohydrates = Math.round(diet.carbohydrates / diet.meals);
    this.protein = Math.round(diet.protein / diet.meals);
    this.lipids = Math.round(diet.lipids / diet.meals);
    this.water = Math.round(diet.water / diet.meals);
    this.amountMeals = diet.meals;
  }

  breakfast() {
    let breakfastProt = this.protein;
    let breakfastLip = this.lipids;

    const cereal = {
      lipid: 7,
      carbohydrate: 68,
      protein: 13,
      grams: 100,
    };

    const amountCereal = this.carbohydrates / cereal.carbohydrate;
    breakfastProt -= amountCereal * cereal.protein;
    breakfastLip -= amountCereal * cereal.lipid;

    const yogurt = {
      lipid: 1,
      carbohydrate: 4,
      protein: 10,
      grams: 100,
    };

    const amountYogurt =
      breakfastProt / yogurt.protein > 0 ? breakfastProt / yogurt.protein : 0;
    breakfastLip -= amountYogurt * yogurt.lipid;

    const cashewNut = {
      lipid: 44,
      carbohydrate: 30,
      protein: 18,
      grams: 100,
    };

    const amountCashewNut =
      breakfastLip / cashewNut.lipid > 0 ? breakfastLip / cashewNut.lipid : 0;

    return {
      portionCereal: {
        amount: Math.round(amountCereal * cereal.grams),
        type: 'grams',
      },
      portionYogurt: {
        amount: Math.round(amountYogurt * yogurt.grams),
        type: 'ml',
      },
      portionCashewNut: {
        amount: Math.round(amountCashewNut * cashewNut.grams),
        type: 'grams',
      },
    };
  }

  morningAndAfterSnack() {
    let morningAndAfterSnackProt = this.protein;
    let morningAndAfterSnackLip = this.lipids;

    const bread = {
      lipid: 6,
      carbohydrate: 52,
      protein: 11,
      grams: 100,
      weightUnit: 50,
    };

    const amountBread = this.carbohydrates / bread.carbohydrate;
    morningAndAfterSnackProt -= amountBread * bread.protein;
    morningAndAfterSnackLip -= amountBread * bread.lipid;

    const tuna = {
      lipid: 1,
      carbohydrate: 1,
      protein: 28,
      grams: 100,
    };

    const amountTuna =
      morningAndAfterSnackProt / tuna.protein > 0
        ? morningAndAfterSnackProt / tuna.protein
        : 0;
    morningAndAfterSnackLip -= amountTuna * tuna.lipid;

    const mayonnaise = {
      lipid: 75,
      carbohydrate: 1,
      protein: 1,
      grams: 100,
    };

    const amountMayonnaise =
      morningAndAfterSnackLip / mayonnaise.lipid > 0
        ? morningAndAfterSnackLip / mayonnaise.lipid
        : 0;

    return {
      portionBread: {
        amount: Math.round((amountBread * bread.grams) / bread.weightUnit),
        type: 'units',
      },
      portionTuna: {
        amount: Math.round(amountTuna * tuna.grams),
        type: 'grams',
      },
      portionMayonnaise: {
        amount: Math.round(amountMayonnaise * mayonnaise.grams),
        type: 'grams',
      },
    };
  }

  lunchAndDinner() {
    let lunchAndDinnerProt = this.protein;
    let lunchAndDinnerLip = this.lipids;

    const rice = {
      lipid: 1,
      carbohydrate: 28,
      protein: 2,
      grams: 100,
    };

    const amountRice = this.carbohydrates / rice.carbohydrate;
    lunchAndDinnerProt -= amountRice * rice.protein;
    lunchAndDinnerLip -= amountRice * rice.lipid;

    const grilledRump = {
      lipid: 9,
      carbohydrate: 0,
      protein: 32,
      grams: 100,
    };

    const amountGrilledRump =
      lunchAndDinnerProt / grilledRump.protein > 0
        ? lunchAndDinnerProt / grilledRump.protein
        : 0;
    lunchAndDinnerLip -= amountGrilledRump * grilledRump.lipid;

    const chesse = {
      lipid: 33,
      carbohydrate: 1,
      protein: 25,
      grams: 100,
    };

    const amountChesse =
      lunchAndDinnerLip / chesse.lipid > 0
        ? lunchAndDinnerLip / chesse.lipid
        : 0;

    return {
      portionRice: {
        amount: Math.round(amountRice * rice.grams),
        type: 'grams',
      },
      portionGrilledRump: {
        amount: Math.round(amountGrilledRump * grilledRump.grams),
        type: 'grams',
      },
      portionChesse: {
        amount: Math.round(amountChesse * chesse.grams),
        type: 'grams',
      },
    };
  }

  getMeals() {
    const meals = {
      lunchAndDinner: this.lunchAndDinner(),
    };

    if (this.amountMeals > 2) {
      meals.breakfast = this.breakfast();
    }

    if (this.amountMeals > 3) {
      meals.morningAndAfterSnack = this.morningAndAfterSnack();
    }

    return meals;
  }
}

module.exports = { CreateMealDiet };
