weight = int(input('Weight: '))
metric = input('(L)bs or (K)g: ').lower()

if metric == 'k':
  converted = weight / 0.45
  print(f'You are {converted} kilos')
else:
  converted = weight * 0.45
  print(f'You are {converted} kilos')
