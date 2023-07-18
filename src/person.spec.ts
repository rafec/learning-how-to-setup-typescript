import Person from "@/person"

it("should hello-world", () => {
  const person = new Person()

  expect(person.sayHello()).toBe("hello world!")
})
