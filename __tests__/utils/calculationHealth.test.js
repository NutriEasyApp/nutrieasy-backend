const CalculationNutrition = require('../../server/utils/calculationHealth');

describe('Calculation Health', () => {
  it("Should return the macro nutrients when {genre:'m', bodytype:'ECTOMORPH', objective:'GAIN' }", () => {
    const user = {
      genre: 'm',
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
      water: '2800',
      calories: '3253',
      protein: '203',
      lipids: '72',
      carbohydrates: '447',
    });
  });

  it("Should return the macro nutrients when {genre:'m', bodytype:'ECTOMORPH', objective:'LOSE' }", () => {
    const user = {
      genre: 'm',
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
      water: '2800',
      calories: '3253',
      protein: '203',
      lipids: '72',
      carbohydrates: '447',
    });
  });

  it("Should return the macro nutrients when {genre:'m', bodytype:'ECTOMORPH', objective:'KEEP' }", () => {
    const user = {
      genre: 'm',
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
      water: '2800',
      calories: '3253',
      protein: '203',
      lipids: '72',
      carbohydrates: '447',
    });
  });

  it("Should return the macro nutrients when {genre:'m', bodytype:'MESOMORPH', objective:'GAIN' }", () => {
    const user = {
      genre: 'm',
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
      water: '2800',
      calories: '3253',
      carbohydrates: '325',
      lipids: '108',
      protein: '244',
    });
  });

  it("Should return the macro nutrients when {genre:'m', bodytype:'MESOMORPH', objective:'LOSE' }", () => {
    const user = {
      genre: 'm',
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
      water: '2800',
      calories: '3253',
      carbohydrates: '325',
      lipids: '108',
      protein: '244',
    });
  });

  it("Should return the macro nutrients when {genre:'m', bodytype:'MESOMORPH', objective:'KEEP' }", () => {
    const user = {
      genre: 'm',
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
      water: '2800',
      calories: '3253',
      carbohydrates: '325',
      lipids: '108',
      protein: '244',
    });
  });

  it("Should return the macro nutrients when {genre:'m', bodytype:'ENDOMORPH', objective:'GAIN' }", () => {
    const user = {
      genre: 'm',
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
      water: '2800',
      calories: '3253',
      protein: '285',
      lipids: '145',
      carbohydrates: '203',
    });
  });

  it("Should return the macro nutrients when {genre:'m', bodytype:'ENDOMORPH', objective:'LOSE' }", () => {
    const user = {
      genre: 'm',
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
      water: '2800',
      calories: '3253',
      protein: '285',
      lipids: '145',
      carbohydrates: '203',
    });
  });

  it("Should return the macro nutrients when {genre:'m', bodytype:'ENDOMORPH', objective:'KEEP' }", () => {
    const user = {
      genre: 'm',
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
      water: '2800',
      calories: '3253',
      protein: '285',
      lipids: '145',
      carbohydrates: '203',
    });
  });

  it("Should return the macro nutrients when {genre:'f', bodytype:'ECTOMORPH', objective:'GAIN' }", () => {
    const user = {
      genre: 'f',
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
      water: '2800',
      calories: '2981',
      protein: '186',
      lipids: '66',
      carbohydrates: '410',
    });
  });

  it("Should return the macro nutrients when {genre:'f', bodytype:'ECTOMORPH', objective:'LOSE' }", () => {
    const user = {
      genre: 'f',
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
      water: '2800',
      calories: '2981',
      protein: '186',
      lipids: '66',
      carbohydrates: '410',
    });
  });

  it("Should return the macro nutrients when {genre:'f', bodytype:'ECTOMORPH', objective:'KEEP' }", () => {
    const user = {
      genre: 'f',
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
      water: '2800',
      calories: '2981',
      protein: '186',
      lipids: '66',
      carbohydrates: '410',
    });
  });

  it("Should return the macro nutrients when {genre:'f', bodytype:'MESOMORPH', objective:'GAIN' }", () => {
    const user = {
      genre: 'f',
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
      water: '2800',
      calories: '2981',
      carbohydrates: '298',
      lipids: '99',
      protein: '224',
    });
  });

  it("Should return the macro nutrients when {genre:'f', bodytype:'MESOMORPH', objective:'LOSE' }", () => {
    const user = {
      genre: 'f',
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
      water: '2800',
      calories: '2981',
      carbohydrates: '298',
      lipids: '99',
      protein: '224',
    });
  });

  it("Should return the macro nutrients when {genre:'f', bodytype:'MESOMORPH', objective:'KEEP' }", () => {
    const user = {
      genre: 'f',
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
      water: '2800',
      calories: '2981',
      carbohydrates: '298',
      lipids: '99',
      protein: '224',
    });
  });

  it("Should return the macro nutrients when {genre:'f', bodytype:'ENDOMORPH', objective:'GAIN' }", () => {
    const user = {
      genre: 'f',
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
      water: '2800',
      calories: '2981',
      protein: '261',
      lipids: '132',
      carbohydrates: '186',
    });
  });

  it("Should return the macro nutrients when {genre:'f', bodytype:'ENDOMORPH', objective:'LOSE' }", () => {
    const user = {
      genre: 'f',
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
      water: '2800',
      calories: '2981',
      protein: '261',
      lipids: '132',
      carbohydrates: '186',
    });
  });

  it("Should return the macro nutrients when {genre:'f', bodytype:'ENDOMORPH', objective:'KEEP' }", () => {
    const user = {
      genre: 'f',
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
      water: '2800',
      calories: '2981',
      protein: '261',
      lipids: '132',
      carbohydrates: '186',
    });
  });
});
