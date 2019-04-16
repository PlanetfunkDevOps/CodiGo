import os

nombre = ""
answ = ""
sueldo = 0
tservicio = 0
bonus = 0
count = 0

while answ != "n" :
  nombre = input('Ingrese su nombre: ')
  sueldo = int(input('Ingrese su sueldo: '))
  tservicio = int(input('Ingrese su tiempo de servicio: '))
  count = count + 1
  if tservicio >= 1 and tservicio <= 3 :
    bonus = sueldo * 0.02
  elif tservicio >= 4 and tservicio <= 5 :
    bonus = sueldo * 0.03
  else :
    bonus = sueldo * 0.04
  print(f'La bonificacion de {nombre} es {str(bonus)}')
  answ = input("Desea continuar? (s/n): ")
  os.system('cls')
print(f'Se han guardado los datos de {count} empleados')
