## 1) How to create a Stream

The document shows **5 ways** to create a stream. Think of it as “how do I place my data onto the stream conveyor belt?” 

```text
Source
  │
  ├─ Collection  -> list.stream()
  ├─ Array       -> Arrays.stream(arr)
  ├─ Static      -> Stream.of(...)
  ├─ Builder     -> Stream.builder()
  └─ Iterate     -> Stream.iterate(...)
```

### A. From Collection

```java
List<Integer> salaryList = Arrays.asList(3000, 4100, 9000, 1000, 3500);
Stream<Integer> s = salaryList.stream();
```

Use this in real projects most often.

### B. From Array

```java
Integer[] salaryArray = {3000, 4100, 9000, 1000, 3500};
Stream<Integer> s = Arrays.stream(salaryArray);
```

### C. From Stream.of()

```java
Stream<Integer> s = Stream.of(1000, 3500, 4000, 9000);
```

Good for quick test data.

### D. From Builder

```java
Stream.Builder<Integer> b = Stream.builder();
b.add(1000).add(9900).add(3500);
Stream<Integer> s = b.build();
```

### E. From iterate()

```java
Stream<Integer> s = Stream.iterate(1000, n -> n + 500).limit(5);
```

That creates a sequence like:

```text
1000 -> 1500 -> 2000 -> 2500 -> 3000
```

---

## 2) Intermediate operations

These are the “processing stations” in the pipeline. They do **not** produce the final result themselves. They return another stream, so you can chain more operations. The document lists these as intermediate operations: `filter`, `map`, `flatMap`, `distinct`, `sorted`, `peek`, `limit`, `skip`, and primitive conversions like `mapToInt`. 

```text
Stream
  │
  ├─ filter()
  ├─ map()
  ├─ flatMap()
  ├─ distinct()
  ├─ sorted()
  ├─ peek()
  ├─ limit()
  └─ skip()
```

### filter()

Keeps only matching elements.

```java
numbers.stream().filter(n -> n > 2)
```

Memory:

```text
Reject ❌ / Keep ✅
```

### map()

Transforms each element into something else.

```java
employees.stream().map(Employee::getName)
```

Memory:

```text
Same row, different shape
```

### flatMap()

Used when the input is nested, and you want to flatten it.

```java
List<List<String>> -> List<String>
```

Memory:

```text
Nested boxes -> one flat box
```

### distinct()

Removes duplicates.

```java
Arrays.stream(arr).distinct()
```

Memory:

```text
Duplicate scanner
```

### sorted()

Arranges elements in order.

```java
Arrays.stream(arr).sorted()
```

Memory:

```text
Messy shelf -> neat shelf
```

### peek()

Lets you look at the data in the middle of the pipeline for debugging.

```java
numbers.stream()
       .filter(n -> n > 2)
       .peek(System.out::println)
       .map(n -> -1 * n)
       .collect(Collectors.toList());
```

Practical tip: use `peek()` only for debugging, not business logic.

### limit()

Takes the first `n` elements.

```java
numbers.stream().limit(3)
```

### skip()

Ignores the first `n` elements.

```java
numbers.stream().skip(3)
```

### Primitive stream conversions

The document also mentions:

* `mapToInt()`
* `mapToLong()`
* `mapToDouble()`

These are useful when you want performance and when working with primitive numbers instead of wrapper objects.

Example:

```java
numbers.stream().mapToInt(Integer::parseInt)
```

---

## 3) Why intermediate operations are called lazy

This is one of the most important Stream ideas in the document. Intermediate operations do not execute immediately. They wait until a terminal operation appears. 

```text
stream()
  ↓
filter()
  ↓
map()
  ↓
sorted()
  ↓
collect()  ← execution starts here
```

### Memory

```text
Pipeline built first.
Work starts only when result is needed.
```

### Practical meaning

If you write only this:

```java
numbers.stream().filter(n -> n > 2).map(n -> n * 2);
```

nothing happens yet.

---

## 4) Stream processing order

The document shows a sequence example where values pass through `filter`, then another transformation, then `sorted`, and the “actual output” is shown in a different order because `sorted()` must first collect elements before sorting. That is a very good interview concept. 

### Key idea

* Some operations are **streaming** and can work element-by-element.
* Some operations like `sorted()` need the full set first.

### Memory image

```text
filter -> transform -> sort -> output
```

### Senior-level tip

This is why Streams are elegant, but not always the fastest choice for every problem.

---

## 5) Terminal operations

These are the “end station” operations. They start execution and produce the final result. The document lists: `forEach`, `toArray`, `reduce`, `collect`, `min`, `max`, `count`, `anyMatch`, `allMatch`, `noneMatch`, `findFirst`, and `findAny`. 

```text
Stream pipeline
      │
      ▼
Terminal operation
      │
      ▼
Final result
```

---

### forEach()

Runs an action on each element.

```java
numbers.stream()
       .filter(n -> n >= 3)
       .forEach(System.out::println);
```

Use when you just want side effects, like logging or printing.

### toArray()

Converts stream into an array.

```java
Object[] arr = numbers.stream().toArray();
```

### reduce()

Combines values into one result.

```java
Optional<Integer> sum =
    numbers.stream().reduce((a, b) -> a + b);
```

Memory:

```text
Fold everything into one answer
```

Use cases:

* total salary
* total revenue
* total quantity

### collect()

The most commonly used terminal operation.

```java
List<Integer> list =
    numbers.stream().filter(n -> n >= 3).collect(Collectors.toList());
```

Use it to collect into:

* List
* Set
* Map

### min() and max()

Find smallest/largest element by comparator.

```java
numbers.stream().min(Comparator.naturalOrder());
numbers.stream().max(Comparator.naturalOrder());
```

### count()

Counts matching elements.

```java
long count = numbers.stream().filter(n -> n >= 3).count();
```

### anyMatch()

Returns true if at least one element matches.

```java
numbers.stream().anyMatch(n -> n > 3);
```

### allMatch()

Returns true if all elements match.

```java
numbers.stream().allMatch(n -> n > 3);
```

### noneMatch()

Returns true if no element matches.

```java
numbers.stream().noneMatch(n -> n > 3);
```

### findFirst()

Returns the first matching element.

```java
numbers.stream().filter(n -> n >= 3).findFirst();
```

### findAny()

Returns any matching element, useful especially with parallel streams.

---

## 6) A stream cannot be reused after terminal operation

The document clearly points out that once a terminal operation is used, the stream is consumed and cannot be used again. 

### Example

```java
Stream<Integer> filteredNumbers =
    numbers.stream().filter(n -> n >= 3);

filteredNumbers.forEach(System.out::println);

// This will fail because the stream is already consumed
filteredNumbers.collect(Collectors.toList());
```

### Memory

```text
One stream = one use
```

### Practical rule

Always create a fresh stream if you need to process the data again.

---

## 7) Parallel Stream

The last part of the document explains `parallelStream()` and says it helps use multiple CPU cores by splitting the task into chunks and processing them in parallel. It mentions task splitting and a fork/join style of work sharing. 

```text
Data
  │
  ├─ split into chunks
  ├─ process in parallel
  └─ join results
```

### When to use

Good for:

* CPU-heavy calculations
* large in-memory datasets

Avoid for:

* database calls
* REST calls
* shared mutable state

### Memory

```text
parallelStream() = many workers doing one job
```

---

# 8) How a developer should use Streams effectively

This is the practical part that matters most in real projects.

## Use Streams when:

* You want readable data processing
* You need filter + map + collect style logic
* You are working with collections in memory
* You want grouping, counting, sorting, and transformations

## Avoid Streams when:

* A simple loop is clearer
* You are doing complicated nested logic
* You need heavy mutation of variables
* You are querying databases, because filtering should happen in SQL first

### Best practice picture

```text
Database query first
    ↓
small result set
    ↓
stream processing
    ↓
final API response
```

---

# 9) The simplest memory palace for Streams

```text
STREAMS

Source
  ↓
Create Stream
  ↓
Intermediate Ops
  ↓
Terminal Ops
  ↓
Result
```

And the main operators:

```text
filter     -> keep only required
map        -> transform
flatMap    -> flatten nested data
distinct   -> remove duplicates
sorted     -> arrange
peek       -> debug
limit      -> take first n
skip       -> ignore first n
reduce     -> combine into one
collect    -> gather into collection
```

---

# 10) Interview-ready one-liner

> Java Streams provide a declarative, lazy, pipeline-based way to process collections using intermediate operations like filter and map, and terminal operations like collect and reduce. They improve readability and support efficient bulk processing, including parallel execution when appropriate. 

