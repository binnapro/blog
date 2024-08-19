---
nav: 后端
group:
  title: 反射
  order: 1
order: 0
---

# 反射机制

Reflection（反射）是 Java 被视为动态语言的关健，反射机制允许程序在执行期借助于 Reflection APl 取得任何类的内部信息，并能直接操作任意对象的内部属性及方法。

```java | pure
Class c = Class.forName("java.lang.String")
```

加载完类之后，在堆内存的方法区中就产生了一个 Class 类型的对象（一个类只有一个 Class 对象），这个对象就包含了完整的类的结构信息。我们可以通过这个对象看到类的结构。这个对象就像一面镜子，透过这个镜子看到类的结构，所以， 我们形象的称之为：反射

一个类在内存中只有一个 Class 对象
一个类在加载后,类的整个结构都会被封装在 Class 对象中

```java | pure
// 已知一个类的全类名,且该类在类路径下,可通过Class类的静态方法forName()获取,可能抛出ClassNotFoundException
Class<?> c1 = Class.forName("com.example.xxl.User");
// 若已知具体的类,通过类的class属性获取,该方法最为安全可靠,程序性能最高
Class c2 = Person.Class;
// 已知某个类的实例,调用该实例的getClass()方法获取Class对象
Class c3 = person.getClass();
// 基本内置类型的包装类都有一个Type属性
Class c4 = Integer.TYPE;
Class c5 = Integer.class;
```
