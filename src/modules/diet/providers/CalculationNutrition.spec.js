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
      water: '2800',
      calories: '3753',
      carbohydrates: '516',
      lipids: '83',
      protein: '235',
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
      water: '2800',
      calories: '2753',
      carbohydrates: '379',
      lipids: '61',
      protein: '172',
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
      water: '2800',
      calories: '3253',
      protein: '203',
      lipids: '72',
      carbohydrates: '447',
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
      water: '2800',
      calories: '3753',
      carbohydrates: '375',
      lipids: '125',
      protein: '281',
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
      water: '2800',
      calories: '2753',
      carbohydrates: '275',
      lipids: '92',
      protein: '206',
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
      water: '2800',
      calories: '3253',
      carbohydrates: '325',
      lipids: '108',
      protein: '244',
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
      water: '2800',
      calories: '3753',
      carbohydrates: '235',
      lipids: '167',
      protein: '328',
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
      water: '2800',
      calories: '2753',
      carbohydrates: '172',
      lipids: '122',
      protein: '241',
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
      water: '2800',
      calories: '3253',
      protein: '285',
      lipids: '145',
      carbohydrates: '203',
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
      water: '2800',
      calories: '3481',
      carbohydrates: '479',
      lipids: '77',
      protein: '218',
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
      water: '2800',
      calories: '2481',
      carbohydrates: '341',
      lipids: '55',
      protein: '155',
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
      water: '2800',
      calories: '2981',
      protein: '186',
      lipids: '66',
      carbohydrates: '410',
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
      water: '2800',
      calories: '3481',
      carbohydrates: '348',
      lipids: '116',
      protein: '261',
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
      water: '2800',
      calories: '2481',
      carbohydrates: '248',
      lipids: '83',
      protein: '186',
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
      water: '2800',
      calories: '2981',
      carbohydrates: '298',
      lipids: '99',
      protein: '224',
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
      water: '2800',
      calories: '3481',
      carbohydrates: '218',
      lipids: '155',
      protein: '305',
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
      water: '2800',
      calories: '2481',
      carbohydrates: '155',
      lipids: '110',
      protein: '217',
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
      water: '2800',
      calories: '2981',
      protein: '261',
      lipids: '132',
      carbohydrates: '186',
    });
  });
});
