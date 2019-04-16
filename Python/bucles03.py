import random

command = ''
battle = 9
chest = 7
trap = 1
started = False
armed = False
scape = False

while True:
  i = random.randint(1, 10)
  command = input('>').lower()
  if command == 'go north':
    print('You are in a forest...')
    print(i)
    if i == battle:
      print('You have entered battle...')
      started = True
      command = ''
      while started:
        command = input('>').lower()
        if command == 'attack':
          if not armed:
            print("You don't have a weapon...")
          else:
            started = False
            armed = False
            print("You've defeated the enemy. You can now move forward..")
            break
        elif command == 'run':
          started = False
          print("you run away...")
          print("You have left battle, keep moving on...")
          break
        else:
          print("I dont understand that.")
          print("You are still in battle...")
    elif i == chest:
      print('You have found a golden chest...')
      started = True
      command = ''
      while started:
        command = input('>').lower()
        if command == 'open chest':
          started = False
          luck = random.randint(1, 3)
          print(luck)
          if luck == 1:
            armed = True
            print("You've found a weapon. Now keep moving on..")
            break
          elif luck == 2:
            scape = True
            print("You've found scape tools. Now keep moving on..")
            break
          else:
            print("You've found nothing. Keep moveing forward..")
            break
        elif command == 'leave chest':
          started = False
          print("You walk away from the chest, keep moving on...")
          break
        else:
          print("I dont understand that.")
          print("Waht will you do with the golden chest?")
    elif i == trap:
      print('You found yourself trapped')
      started = True
      command = ''
      while started:
        command = input('>').lower()
        if command == 'escape':
          if not scape:
            print("You don't have anything to escape with...")
          else:
            started = False
            scape = False
            print("You've escaped the trap. You can now move forward..")
            break
        elif command == 'give up':
          started = False
          print("You gave up, luckyly you didnt die. Keep moving forward...")
          break
        else:
          print("I dont understand that.")
          print("Hurry, you have got to do somthing with that trap!")
  elif command == 'You are in a desert...':
    print('east')
    print(battle)
  elif command == 'You are in a beach...':
    print('west')
    print(battle)
  elif command == 'You are in a cave...':
    print('south')
    print(battle)
  elif  command == 'quit':
    break
  else:
    print("Sorry I don't understand that.")
