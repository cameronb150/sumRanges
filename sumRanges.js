//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (list = []) => {
  list.reduce((total, value) => total + value, 0);
  // todo: implement
};

export const firstSum = (list) =>{
  let total = 0;

  for(let value of list){
    total += value;
  }
  return total;
}


export const range = (start,end,step) => {
  const result = [];
  // todo: implement
  if (step === undefined){
    step = start <= end ? 1 : -1;


  }
  if (step > 0){
    for(let i  = start;i <= end; i += step){
      result.push(i);
    }
  }else{
    for(let i = start; i >= end; i += end){
      result.push(i)
    }
  }
};
