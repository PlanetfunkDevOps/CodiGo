class Mammal:
  def walk(self):
    print('walk')


class Dog(Mammal):
  def bark(self):
    print('Bark')


class Cat(Mammal):
  def be_annoying(self):
    print('Annoying')

cat1 = Cat()
cat1.be_annoying()
