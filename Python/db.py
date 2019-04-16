import sqlite3
import time
import os

cn = sqlite3.connect("almacen.db")
cursor = cn.cursor()
resp = ""

def createTable():
  cursor.execute("CREATE TABLE user (codusr TEXT, nombre TEXT, edad NUMERIC)")
  cn.commit()
  cursor.close()
  cn.close()

def menu():
  print("Menu: ")
  print("1.- Create table.")
  op = input('>')
  if op == '1':
    createTable()
  else:
    print('That is not an option...!')

menu()
