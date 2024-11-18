const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];


  for(let i = 0;i<numbers.length;i++){
    for(let j = 2 ;j<=numbers[i];j++){
        if(numbers[i]%j==0){
            count+=1
        }
    if(count>1){
        primeArray.push(numbers[i]);
    }
    }
    console.log(primeArray)



  }


  let Max = primeArray[0];
  let min = primarray[0];
   let sum =0;

  for(let k = 0;k<=primarray.length;k++){
    if(primarray[k]>max){
        max = primarray[k]
    }
    if(primarray[k]<min){
        min = primarray[k]
    }
    sum = sum+primarray[k]
  }

  console.log(max);
  console.log(min);
  console.log(sum)
  