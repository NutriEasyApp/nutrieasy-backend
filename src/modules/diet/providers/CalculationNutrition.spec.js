const { CalculationNutrition } = require('./CalculationNutrition');

describe('Calculation Health', () => {
  it("Should return the macro nutrients when {genre:'M', bodytype:'ECTOMORPH', objective:'GAIN' }", () => {
    const user = {
      genre: 'M',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'ECTOMORPH',
      objective: 'GAIN',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '3403',
      carbohydrates: '468',
      lipids: '76',
      protein: '213',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'M', bodytype:'ECTOMORPH', objective:'LOSE' }", () => {
    const user = {
      genre: 'M',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'ECTOMORPH',
      objective: 'LOSE',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '2403',
      carbohydrates: '330',
      lipids: '53',
      protein: '150',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'M', bodytype:'ECTOMORPH', objective:'KEEP' }", () => {
    const user = {
      genre: 'M',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'ECTOMORPH',
      objective: 'KEEP',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '2903',
      carbohydrates: '399',
      lipids: '65',
      protein: '181',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'M', bodytype:'MESOMORPH', objective:'GAIN' }", () => {
    const user = {
      genre: 'M',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'MESOMORPH',
      objective: 'GAIN',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '3403',
      carbohydrates: '340',
      lipids: '113',
      protein: '255',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'M', bodytype:'MESOMORPH', objective:'LOSE' }", () => {
    const user = {
      genre: 'M',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'MESOMORPH',
      objective: 'LOSE',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '2403',
      carbohydrates: '240',
      lipids: '80',
      protein: '180',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'M', bodytype:'MESOMORPH', objective:'KEEP' }", () => {
    const user = {
      genre: 'M',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'MESOMORPH',
      objective: 'KEEP',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '2903',
      carbohydrates: '290',
      lipids: '97',
      protein: '218',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'M', bodytype:'ENDOMORPH', objective:'GAIN' }", () => {
    const user = {
      genre: 'M',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'ENDOMORPH',
      objective: 'GAIN',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '3403',
      carbohydrates: '213',
      lipids: '151',
      protein: '298',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'M', bodytype:'ENDOMORPH', objective:'LOSE' }", () => {
    const user = {
      genre: 'M',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'ENDOMORPH',
      objective: 'LOSE',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '2403',
      carbohydrates: '150',
      lipids: '107',
      protein: '210',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'M', bodytype:'ENDOMORPH', objective:'KEEP' }", () => {
    const user = {
      genre: 'M',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'ENDOMORPH',
      objective: 'KEEP',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '2903',
      carbohydrates: '181',
      lipids: '129',
      protein: '254',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'F', bodytype:'ECTOMORPH', objective:'GAIN' }", () => {
    const user = {
      genre: 'F',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'ECTOMORPH',
      objective: 'GAIN',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '3131',
      carbohydrates: '431',
      lipids: '70',
      protein: '196',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'F', bodytype:'ECTOMORPH', objective:'LOSE' }", () => {
    const user = {
      genre: 'F',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'ECTOMORPH',
      objective: 'LOSE',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '2131',
      carbohydrates: '293',
      lipids: '47',
      protein: '133',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'F', bodytype:'ECTOMORPH', objective:'KEEP' }", () => {
    const user = {
      genre: 'F',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'ECTOMORPH',
      objective: 'KEEP',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '2631',
      carbohydrates: '362',
      lipids: '58',
      protein: '164',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'F', bodytype:'MESOMORPH', objective:'GAIN' }", () => {
    const user = {
      genre: 'F',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'MESOMORPH',
      objective: 'GAIN',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '3131',
      carbohydrates: '313',
      lipids: '104',
      protein: '235',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'F', bodytype:'MESOMORPH', objective:'LOSE' }", () => {
    const user = {
      genre: 'F',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'MESOMORPH',
      objective: 'LOSE',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '2131',
      carbohydrates: '213',
      lipids: '71',
      protein: '160',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'F', bodytype:'MESOMORPH', objective:'KEEP' }", () => {
    const user = {
      genre: 'F',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'MESOMORPH',
      objective: 'KEEP',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '2631',
      carbohydrates: '263',
      lipids: '88',
      protein: '197',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'F', bodytype:'ENDOMORPH', objective:'GAIN' }", () => {
    const user = {
      genre: 'F',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'ENDOMORPH',
      objective: 'GAIN',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '3131',
      carbohydrates: '196',
      lipids: '139',
      protein: '274',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'F', bodytype:'ENDOMORPH', objective:'LOSE' }", () => {
    const user = {
      genre: 'F',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'ENDOMORPH',
      objective: 'LOSE',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '2131',
      carbohydrates: '133',
      lipids: '95',
      protein: '186',
      water: '2800',
    });
  });

  it("Should return the macro nutrients when {genre:'F', bodytype:'ENDOMORPH', objective:'KEEP' }", () => {
    const user = {
      genre: 'F',
      height: '175',
      weight: '80',
      age: '21',
      bodytype: 'ENDOMORPH',
      objective: 'KEEP',
      exercisetime: '2.00',
    };

    const proposedDiet = new CalculationNutrition({
      ...user,
    }).valuesNutritional();

    expect(proposedDiet).toEqual({
      calories: '2631',
      carbohydrates: '164',
      lipids: '117',
      protein: '230',
      water: '2800',
    });
  });
});
