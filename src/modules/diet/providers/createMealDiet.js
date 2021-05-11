class CreateMealDiet {
  constructor(diet) {
    this.carbohydrates = Math.round(diet.carbohydrates / diet.meals);
    this.protein = Math.round(diet.protein / diet.meals);
    this.lipids = Math.round(diet.lipids / diet.meals);
    this.water = Math.round(diet.water / diet.meals);
  }

  breakfast() {
    let breakfastProt = this.protein;
    let breakfastLip = this.protein;

    const toast = {
      lipid: 4,
      carbohydrate: 56,
      protein: 13,
      grams: 100,
      weightUnit: 30,
    };

    const amountToast = this.carbohydrates / toast.carbohydrate;
    breakfastProt -= amountToast * toast.protein;
    breakfastLip -= amountToast * toast.lipid;

    const egg = {
      lipid: 11,
      carbohydrate: 1,
      protein: 13,
      grams: 100,
      weightUnit: 50,
    };

    const amountEgg = this.protein / egg.protein;
    breakfastLip -= amountEgg * egg.lipid;

    const cashewNut = {
      lipid: 44,
      carbohydrate: 30,
      protein: 18,
      grams: 100,
    };

    const amountCashewNut = this.lipids / cashewNut.lipid;

    return {
      portionToast: {
        amount: Math.round((amountToast * toast.grams) / toast.weightUnit),
        type: 'units',
      },
      amountEgg: {
        amount: Math.round((amountEgg * egg.grams) / egg.weightUnit),
        type: 'units',
      },
      amountCashewNut: {
        amount: Math.round(amountCashewNut * cashewNut.grams),
        type: 'grams',
      },
    };
  }
}

module.exports = { CreateMealDiet };

const cafe = new CreateMealDiet({
  calories: '3481',
  carbohydrates: '218',
  protein: '305',
  lipids: '155',
  water: '2800',
  meals: '4',
});

console.log(cafe.breakfast());
