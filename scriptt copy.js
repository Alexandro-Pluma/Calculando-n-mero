let NumberOne = Number(prompt("Digite o primeiro número:")
)
let NumberTwo = Number( prompt("Digite o segundo número:"))

let sum = NumberOne + NumberTwo

let subtraction = NumberOne - NumberTwo

let multiplication = NumberOne * NumberTwo

let division = NumberOne / NumberTwo

let rest = NumberOne % NumberTwo

let equalDifferent = NumberOne != NumberTwo

alert(`A soma dos dois números; ${sum}`)
alert(`A subtração dos dois números; ${subtraction}`)
alert(`A multiplicação dos dois números; ${multiplication}`)
alert(`A divisão dos dois números; ${division}`)
alert(`O resto da divisão dos dois números; ${rest}`)


if(sum % 2 == 0) {
  alert(`o numero ${sum} é par`)
} else {
  alert(`o numero ${sum} é impar`)
}

if (equalDifferent) {
  alert("Os números inseridos são diferentes ")
} else {
  alert("Os números inseridos são iguais")
}
