## What is OOPS?

Object Oriented Programming System organizes software around objects.

Examples:

* Car
* ATM
* Employee
* Customer

---

## The Four Pillars

### 🧩 Abstraction

**Memory Trick:** Car Brake

You know what happens when you press the brake.

You don't know how it works internally.

**Interview Answer**

Hide implementation details and expose only essential functionality.

---

### 🔒 Encapsulation

**Memory Trick:** ATM Locker

Data is protected and can only be accessed through methods.

```java
private String name;

public String getName() {
   return name;
}
```

---

### 👨‍👦 Inheritance

Vehicle

↓

Car

↓

SportsCar

**Interview Answer**

Reuse existing code through parent-child relationships.

---

### 🎭 Polymorphism

One person can be:

* Father
* Employee
* Husband

Same object.

Different behavior.

---

## Spring Boot Mapping

| OOPS Concept  | Spring Boot Example  |
| ------------- | -------------------- |
| Abstraction   | Interface            |
| Encapsulation | DTO                  |
| Inheritance   | BaseEntity           |
| Polymorphism  | Dependency Injection |

---

## Interview Takeaways

* Hide HOW → Abstraction
* Hide DATA → Encapsulation
* Reuse Code → Inheritance
* Many Forms → Polymorphism
