function spendCalories(user){
  let calorie, protein, lipid, carbohydrate = null

  if(user.genre === 'male'){
    calorie = 66.5 + (5 * Number(user.height)) + (13.8 * Number(user.weight)) - (6.8 * Number(user.age)) + 750 + 300 * user.lifestyle
  }else{
    calorie = 655.1 + (1.8 * Number(user.height)) + (9.5 * Number(user.weight)) - (4.7 * Number(user.age)) + 750 + 300 * user.lifestyle
  }

  if(user.want === 'lose'){
    calorie -= 500
  }else if(user.want === 'gain'){
    calorie += 500
  }

  if(user.bodytype === 'ectomorfo'){
    protein = calorie * 0.25 / 4
    lipid = calorie * 0.20 / 9
    carbohydrate = calorie * 0.55 / 4
  }else if(user.bodytype === 'mesomorfo'){
    protein = calorie * 0.30/4
    lipid = calorie * 0.30/9
    carbohydrate = calorie * 0.40 / 4
  }else{
    protein = calorie * 0.35 / 4
    lipid = calorie * 0.40 / 9
    carbohydrate = calorie * 0.25 / 4
  }

  const result = {
   'calorie':Math.round(calorie),
   'protein': Math.round(protein),
   'lipid': Math.round(lipid),
   'carbohydrate': Math.round(carbohydrate)
  }

  console.log(result);
  return result
}

module.exports = spendCalories
