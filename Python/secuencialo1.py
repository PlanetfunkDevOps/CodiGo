import os

nombre = ""
answ = ""
sueldo = 0
tservicio = 0
bonus = 0


while answ != "n":
    nombre = raw_input('Ingrese su nombre: ')
    sueldo = int(raw_input('Ingrese su sueldo: '))
    tservicio = int(raw_input('Ingrese su tiempo de servicio: '))
    if tservicio >= 1 and tservicio <= 3:
        bonus = sueldo * 0.02
    elif tservicio >= 4 and tservicio <= 5:
        bonus = sueldo * 0.03
    else:
        bonus = sueldo * 0.04
    print(bonus)
    answ = raw_input("Desea continuar? (s/n): ")
    os.system('cls')
