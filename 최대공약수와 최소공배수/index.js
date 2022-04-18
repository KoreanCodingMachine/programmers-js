// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수,
// solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 최대공약수

// → 유클리드 호제법으로 구함

// - 두 자연수 A,B에 대하여 (A > B) A를 B로 나눈 나머지를 R이라고 한다.
// - 이때, A와 B의 최대공약수는 B와 R의 최대공약수와 같다.

// 최소공배수

// →최소공배수 = A * B / 최대공약수

function findGcd(a, b) {
  if (a % b === 0) {
    return b;
  } else {
    return findGcd(b, a % b);
  }
}

function solution(a, b) {
  let answer = [];
  const gcd = findGcd(a, b);
  const lcm = (a * b) / gcd;
  answer.push(gcd);
  answer.push(lcm);
  console.log(answer);
  return answer;
}

solution(3, 12);
