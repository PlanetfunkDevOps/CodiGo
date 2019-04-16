nombre = input("Ingrese el nombre del participante: ")
credencial = input("Ingrese el codigo de su credencial: ")
if credencial == "A1" :
  print("Zona Norte")
elif credencial == "A2" :
  print("Zona Sur")
elif credencial == "A3" :
  print("Zona Centro")
elif credencial == "A4" :
  print ("Zona Oeste")
else :
  print("Zona Inhabilitada")
