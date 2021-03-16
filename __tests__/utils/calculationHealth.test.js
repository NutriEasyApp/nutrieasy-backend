const spendCalories = require('../../server/utils/calculationHealth');

test('Should return the macro nutrients from the health calculation when genre is male, want lose and bodytype is ectomorfo', () => {
  const user = {
    genre: 'male',
    want: 'lose',
    bodytype: 'ectomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: ''

  }
  expect(spendCalories(user)).toEqual({
    'calorie': expect.any(Number),
    'carbohydrate': expect.any(Number),
    'lipid': expect.any(Number),
    'protein': expect.any(Number),
  });
})

test('Should return the macro nutrients from the health calculation when genre is male, want lose and bodytype is mesomorfo', () => {
  const user = {
    genre: 'male',
    want: 'lose',
    bodytype: 'mesomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: ''

  }
  expect(spendCalories(user)).toEqual({
    'calorie': expect.any(Number),
    'carbohydrate': expect.any(Number),
    'lipid': expect.any(Number),
    'protein': expect.any(Number),
  });
})

test('Should return the macro nutrients from the health calculation when genre is male, want lose and bodytype is endomorfo', () => {
  const user = {
    genre: 'male',
    want: 'lose',
    bodytype: 'endomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: ''

  }
  expect(spendCalories(user)).toEqual({
    'calorie': expect.any(Number),
    'carbohydrate': expect.any(Number),
    'lipid': expect.any(Number),
    'protein': expect.any(Number),
  });
})

test('Should return the macro nutrients from the health calculation when genre is male, want gain and bodytype is ectomorfo', () => {
  const user = {
    genre: 'male',
    want: 'gain',
    bodytype: 'ectomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: ''

  }
  expect(spendCalories(user)).toEqual({
    'calorie': expect.any(Number),
    'carbohydrate': expect.any(Number),
    'lipid': expect.any(Number),
    'protein': expect.any(Number),
  });
})

test('Should return the macro nutrients from the health calculation when genre is male, want gain and bodytype is mesomorfo', () => {
  const user = {
    genre: 'male',
    want: 'gain',
    bodytype: 'mesomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: ''

  }
  expect(spendCalories(user)).toEqual({
    'calorie': expect.any(Number),
    'carbohydrate': expect.any(Number),
    'lipid': expect.any(Number),
    'protein': expect.any(Number),
  });
})

test('Should return the macro nutrients from the health calculation when genre is male, want gain and bodytype is endomorfo', () => {
  const user = {
    genre: 'male',
    want: 'gain',
    bodytype: 'endomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: ''

  }
  expect(spendCalories(user)).toEqual({
    'calorie': expect.any(Number),
    'carbohydrate': expect.any(Number),
    'lipid': expect.any(Number),
    'protein': expect.any(Number),
  });
})


test('Should return the macro nutrients from the health calculation when genre is female, want lose and bodytype is ectomorfo', () => {
  const user = {
    genre: 'female',
    want: 'lose',
    bodytype: 'ectomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: ''

  }
  expect(spendCalories(user)).toEqual({
    'calorie': expect.any(Number),
    'carbohydrate': expect.any(Number),
    'lipid': expect.any(Number),
    'protein': expect.any(Number),
  });
})

test('Should return the macro nutrients from the health calculation when genre is female, want lose and bodytype is mesomorfo', () => {
  const user = {
    genre: 'female',
    want: 'lose',
    bodytype: 'mesomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: ''

  }
  expect(spendCalories(user)).toEqual({
    'calorie': expect.any(Number),
    'carbohydrate': expect.any(Number),
    'lipid': expect.any(Number),
    'protein': expect.any(Number),
  });
})

test('Should return the macro nutrients from the health calculation when genre is female, want lose and bodytype is endomorfo', () => {
  const user = {
    genre: 'female',
    want: 'lose',
    bodytype: 'endomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: ''

  }
  expect(spendCalories(user)).toEqual({
    'calorie': expect.any(Number),
    'carbohydrate': expect.any(Number),
    'lipid': expect.any(Number),
    'protein': expect.any(Number),
  });
})

test('Should return the macro nutrients from the health calculation when genre is female, want gain and bodytype is ectomorfo', () => {
  const user = {
    genre: 'female',
    want: 'gain',
    bodytype: 'ectomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: ''

  }
  expect(spendCalories(user)).toEqual({
    'calorie': expect.any(Number),
    'carbohydrate': expect.any(Number),
    'lipid': expect.any(Number),
    'protein': expect.any(Number),
  });
})

test('Should return the macro nutrients from the health calculation when genre is female, want gain and bodytype is mesomorfo', () => {
  const user = {
    genre: 'female',
    want: 'gain',
    bodytype: 'mesomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: ''

  }
  expect(spendCalories(user)).toEqual({
    'calorie': expect.any(Number),
    'carbohydrate': expect.any(Number),
    'lipid': expect.any(Number),
    'protein': expect.any(Number),
  });
})

test('Should return the macro nutrients from the health calculation when genre is female, want gain and bodytype is endomorfo', () => {
  const user = {
    genre: 'female',
    want: 'gain',
    bodytype: 'endomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: ''

  }
  expect(spendCalories(user)).toEqual({
    'calorie': expect.any(Number),
    'carbohydrate': expect.any(Number),
    'lipid': expect.any(Number),
    'protein': expect.any(Number),
  });
})
