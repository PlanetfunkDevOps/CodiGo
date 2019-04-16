nombre = ""
sueldo = 0
tser = 0
bon = 0
nombre = input('Ingrese su nombre: ')
sueldo = int(input('Ingrese su sueldo: '))
tser = int(input('Tiempo de servicio: '))
if tser >= 1 and tser <= 3 :
  bon = sueldo * 0.02
elif tser >= 4 and tser <= 5 :
  bon = sueldo * 0.03
else :
  bon = sueldo * 0.04
print(f'La bonificacion de {nombre} es {str(bon)}')
