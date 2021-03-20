const faker = require('faker');
const spendCalories = require('../../server/utils/calculationHealth');

describe('test', () => {
  test('Should return the macro nutrients from the health calculation when genre is male, wantaboutweight  lose and bodytype is ectomorfo', () => {
    const user = {
      genre: 'male',
      wantaboutweight: 'lose',
      bodytype: 'ectomorfo',
      height: '1.73',
      weight: '80.00',
      age: '21',
      lifestyle: '',
    };
    expect(spendCalories(user)).toEqual({
      calorie: expect.any(Number),
      carbohydrate: expect.any(Number),
      lipid: expect.any(Number),
      protein: expect.any(Number),
    });
  });
});
test('Should return the macro nutrients from the health calculation when genre is male, wantaboutweight  lose and bodytype is mesomorfo', () => {
  const user = {
    genre: 'male',
    wantaboutweight: 'lose',
    bodytype: 'mesomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: '',
  };
  expect(spendCalories(user)).toEqual({
    calorie: expect.any(Number),
    carbohydrate: expect.any(Number),
    lipid: expect.any(Number),
    protein: expect.any(Number),
  });
});

test('Should return the macro nutrients from the health calculation when genre is male, wantaboutweight  lose and bodytype is endomorfo', () => {
  const user = {
    genre: 'male',
    wantaboutweight: 'lose',
    bodytype: 'endomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: '',
  };
  expect(spendCalories(user)).toEqual({
    calorie: expect.any(Number),
    carbohydrate: expect.any(Number),
    lipid: expect.any(Number),
    protein: expect.any(Number),
  });
});

test('Should return the macro nutrients from the health calculation when genre is male, wantaboutweight  gain and bodytype is ectomorfo', () => {
  const user = {
    genre: 'male',
    wantaboutweight: 'gain',
    bodytype: 'ectomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: '',
  };
  expect(spendCalories(user)).toEqual({
    calorie: expect.any(Number),
    carbohydrate: expect.any(Number),
    lipid: expect.any(Number),
    protein: expect.any(Number),
  });
});

test('Should return the macro nutrients from the health calculation when genre is male, wantaboutweight  gain and bodytype is mesomorfo', () => {
  const user = {
    genre: 'male',
    wantaboutweight: 'gain',
    bodytype: 'mesomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: '',
  };
  expect(spendCalories(user)).toEqual({
    calorie: expect.any(Number),
    carbohydrate: expect.any(Number),
    lipid: expect.any(Number),
    protein: expect.any(Number),
  });
});

test('Should return the macro nutrients from the health calculation when genre is male, wantaboutweight  gain and bodytype is endomorfo', () => {
  const user = {
    genre: 'male',
    wantaboutweight: 'gain',
    bodytype: 'endomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: '',
  };
  expect(spendCalories(user)).toEqual({
    calorie: expect.any(Number),
    carbohydrate: expect.any(Number),
    lipid: expect.any(Number),
    protein: expect.any(Number),
  });
});

test('Should return the macro nutrients from the health calculation when genre is female, wantaboutweight  lose and bodytype is ectomorfo', () => {
  const user = {
    genre: 'female',
    wantaboutweight: 'lose',
    bodytype: 'ectomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: '',
  };
  expect(spendCalories(user)).toEqual({
    calorie: expect.any(Number),
    carbohydrate: expect.any(Number),
    lipid: expect.any(Number),
    protein: expect.any(Number),
  });
});

test('Should return the macro nutrients from the health calculation when genre is female, wantaboutweight  lose and bodytype is mesomorfo', () => {
  const user = {
    genre: 'female',
    wantaboutweight: 'lose',
    bodytype: 'mesomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: '',
  };
  expect(spendCalories(user)).toEqual({
    calorie: expect.any(Number),
    carbohydrate: expect.any(Number),
    lipid: expect.any(Number),
    protein: expect.any(Number),
  });
});

test('Should return the macro nutrients from the health calculation when genre is female, wantaboutweight  lose and bodytype is endomorfo', () => {
  const user = {
    genre: 'female',
    wantaboutweight: 'lose',
    bodytype: 'endomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: '',
  };
  expect(spendCalories(user)).toEqual({
    calorie: expect.any(Number),
    carbohydrate: expect.any(Number),
    lipid: expect.any(Number),
    protein: expect.any(Number),
  });
});

test('Should return the macro nutrients from the health calculation when genre is female, wantaboutweight  gain and bodytype is ectomorfo', () => {
  const user = {
    genre: 'female',
    wantaboutweight: 'gain',
    bodytype: 'ectomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: '',
  };
  expect(spendCalories(user)).toEqual({
    calorie: expect.any(Number),
    carbohydrate: expect.any(Number),
    lipid: expect.any(Number),
    protein: expect.any(Number),
  });
});

test('Should return the macro nutrients from the health calculation when genre is female, wantaboutweight  gain and bodytype is mesomorfo', () => {
  const user = {
    genre: 'female',
    wantaboutweight: 'gain',
    bodytype: 'mesomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: '',
  };
  expect(spendCalories(user)).toEqual({
    calorie: expect.any(Number),
    carbohydrate: expect.any(Number),
    lipid: expect.any(Number),
    protein: expect.any(Number),
  });
});

test('Should return the macro nutrients from the health calculation when genre is female, wantaboutweight  gain and bodytype is endomorfo', () => {
  const user = {
    genre: 'female',
    wantaboutweight: 'gain',
    bodytype: 'endomorfo',
    height: '1.73',
    weight: '80.00',
    age: '21',
    lifestyle: '',
  };
  expect(spendCalories(user)).toEqual({
    calorie: expect.any(String),
    carbohydrate: expect.any(Number),
    lipid: expect.any(Number),
    protein: expect.any(Number),
  });
});
