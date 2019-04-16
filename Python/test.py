num = int(input('Ingrese el valor: '))
if num > 1:
  for i in range(2, num):
    if (num%i) == 0:
      print('Not prime number')
      print(f'{i} times {num//i} is {num}')
      break
    else:
      print('Prime number')
else:
  print('Not prime number')
