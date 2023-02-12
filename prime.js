function isPrime(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  }
  else {
    return false;
  }
}
for (let i = 2; i <= 10; i++) {
  let ans = isPrime(i);
  if (ans == true) {
    console.log(i, "it is a prime number")
  }
}