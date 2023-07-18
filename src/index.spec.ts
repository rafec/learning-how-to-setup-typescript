import Person from "."

it("should return name", () => {
  const person = new Person()
  expect(person.sayMyName()).toBe("Rafael")
})
