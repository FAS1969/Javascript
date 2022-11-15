class FirstClass {
	id: number | undefined;
}
class SecondClass {
	name: string | undefined;
}


class GenericCreator<T> {
	create(arg1: { new(): T }):T {
		return new arg1();
  }
}
const creator1 = new GenericCreator<FirstClass>();
const firstClass: FirstClass = creator1.create(FirstClass);
const creator2 = new GenericCreator<SecondClass>();
const secondClass: SecondClass = creator2.create(SecondClass);
firstClass.id = 12345;
secondClass.name = 'firstClass';
console.log(firstClass.id, secondClass.name);
