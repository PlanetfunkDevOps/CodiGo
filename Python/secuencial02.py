igv = 0.18
precio = int(input("Ingresar precio: "))
cantidad = int(input("Ingresar cantidad: "))
subtotal = precio * cantidad
impuesto = subtotal * igv
neto = subtotal + impuesto
input("El total a pagar es: " + str(neto))
