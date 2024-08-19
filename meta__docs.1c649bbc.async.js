"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[904],{19595:function(t,a,n){n.r(a),n.d(a,{demos:function(){return o}});var d=n(75271),e=n(85644),o={}},38642:function(t,a,n){n.r(a),n.d(a,{demos:function(){return o}});var d=n(75271),e=n(49940),o={}},23405:function(t,a,n){n.r(a),n.d(a,{demos:function(){return o}});var d=n(75271),e=n(98999),o={}},71681:function(t,a,n){n.r(a),n.d(a,{demos:function(){return o}});var d=n(75271),e=n(68040),o={}},24471:function(t,a,n){n.r(a),n.d(a,{demos:function(){return o}});var d=n(75271),e=n(65785),o={}},27624:function(t,a,n){n.r(a),n.d(a,{texts:function(){return e}});var d=n(85644);const e=[{value:"\u5728 Java \u4E2D\uFF0C\u6709\u5F88\u591A class \u7684\u5B9A\u4E49\u90FD\u7B26\u5408\u8FD9\u6837\u7684\u89C4\u8303\uFF1A",paraId:0,tocIndex:0},{value:`\u25CF \u82E5\u5E72 private \u5B9E\u4F8B\u5B57\u6BB5\uFF1B
\u25CF \u901A\u8FC7 public \u65B9\u6CD5\u6765\u8BFB\u5199\u5B9E\u4F8B\u5B57\u6BB5\u3002`,paraId:1,tocIndex:0},{value:"\u4F8B\u5982\uFF1A",paraId:2,tocIndex:0},{value:` public class Person {
    private String name;
    private int age;

    public String getName() { return this.name; }
    public void setName(String name) { this.name = name; }

    public int getAge() { return this.age; }
    public void setAge(int age) { this.age = age; }
}
`,paraId:3,tocIndex:0},{value:"\u5982\u679C\u8BFB\u5199\u65B9\u6CD5\u7B26\u5408\u4EE5\u4E0B\u8FD9\u79CD\u547D\u540D\u89C4\u8303\uFF1A",paraId:4,tocIndex:0},{value:`// \u8BFB\u65B9\u6CD5:
public Type getXyz()
// \u5199\u65B9\u6CD5:
public void setXyz(Type value)
`,paraId:5,tocIndex:0},{value:"\u90A3\u4E48\u8FD9\u79CD class \u88AB\u79F0\u4E3A JavaBean\uFF1A",paraId:6,tocIndex:0},{value:"String int",paraId:7,tocIndex:0},{value:"\u4E0A\u9762\u7684\u5B57\u6BB5\u662F xyz\uFF0C\u90A3\u4E48\u8BFB\u5199\u65B9\u6CD5\u540D\u5206\u522B\u4EE5 get \u548C set \u5F00\u5934\uFF0C\u5E76\u4E14\u540E\u63A5\u5927\u5199\u5B57\u6BCD\u5F00\u5934\u7684\u5B57\u6BB5\u540D Xyz\uFF0C\u56E0\u6B64\u4E24\u4E2A\u8BFB\u5199\u65B9\u6CD5\u540D\u5206\u522B\u662F getXyz()\u548C setXyz()\u3002",paraId:8,tocIndex:0},{value:"boolean",paraId:9,tocIndex:0},{value:"boolean \u5B57\u6BB5\u6BD4\u8F83\u7279\u6B8A\uFF0C\u5B83\u7684\u8BFB\u65B9\u6CD5\u4E00\u822C\u547D\u540D\u4E3A isXyz()\uFF1A",paraId:10,tocIndex:0},{value:`// \u8BFB\u65B9\u6CD5:
public boolean isChild()
// \u5199\u65B9\u6CD5:
public void setChild(boolean value)
`,paraId:11,tocIndex:0},{value:"\u6211\u4EEC\u901A\u5E38\u628A\u4E00\u7EC4\u5BF9\u5E94\u7684\u8BFB\u65B9\u6CD5\uFF08getter\uFF09\u548C\u5199\u65B9\u6CD5\uFF08setter\uFF09\u79F0\u4E3A\u5C5E\u6027\uFF08property\uFF09\u3002\u4F8B\u5982\uFF0Cname \u5C5E\u6027\uFF1A",paraId:12,tocIndex:0},{value:`\u25CF \u5BF9\u5E94\u7684\u8BFB\u65B9\u6CD5\u662F String getName()
\u25CF \u5BF9\u5E94\u7684\u5199\u65B9\u6CD5\u662F setName(String)`,paraId:13,tocIndex:0},{value:"\u53EA\u6709 getter \u7684\u5C5E\u6027\u79F0\u4E3A\u53EA\u8BFB\u5C5E\u6027\uFF08read-only\uFF09\uFF0C\u4F8B\u5982\uFF0C\u5B9A\u4E49\u4E00\u4E2A age \u53EA\u8BFB\u5C5E\u6027\uFF1A",paraId:14,tocIndex:0},{value:`\u25CF \u5BF9\u5E94\u7684\u8BFB\u65B9\u6CD5\u662F int getAge()
\u25CF \u65E0\u5BF9\u5E94\u7684\u5199\u65B9\u6CD5 setAge(int)`,paraId:15,tocIndex:0},{value:"\u7C7B\u4F3C\u7684\uFF0C\u53EA\u6709 setter \u7684\u5C5E\u6027\u79F0\u4E3A\u53EA\u5199\u5C5E\u6027\uFF08write-only\uFF09\u3002",paraId:16,tocIndex:0},{value:"\u5F88\u660E\u663E\uFF0C\u53EA\u8BFB\u5C5E\u6027\u5F88\u5E38\u89C1\uFF0C\u53EA\u5199\u5C5E\u6027\u4E0D\u5E38\u89C1\u3002",paraId:17,tocIndex:0},{value:"\u5C5E\u6027\u53EA\u9700\u8981\u5B9A\u4E49 getter \u548C setter \u65B9\u6CD5\uFF0C\u4E0D\u4E00\u5B9A\u9700\u8981\u5BF9\u5E94\u7684\u5B57\u6BB5\u3002\u4F8B\u5982\uFF0Cchild \u53EA\u8BFB\u5C5E\u6027\u5B9A\u4E49\u5982\u4E0B\uFF1A",paraId:18,tocIndex:0},{value:`public class Person {
private String name;
private int age;

    public String getName() { return this.name; }
    public void setName(String name) { this.name = name; }

    public int getAge() { return this.age; }
    public void setAge(int age) { this.age = age; }

    public boolean isChild() {   // \u4E5F\u53EF\u4EE5\u6839\u636E\u573A\u666F\u6765\u5B9A\u4E49\u4E00\u4E2A\u8BED\u4E49\u5316\u7684\u65B9\u6CD5, \u8FD9\u4E5F\u7B97\u662FBean
        return age <= 6;
    }

}
`,paraId:19,tocIndex:0},{value:"\u53EF\u4EE5\u770B\u51FA\uFF0Cgetter \u548C setter \u4E5F\u662F\u4E00\u79CD\u6570\u636E\u5C01\u88C5\u7684\u65B9\u6CD5\u3002",paraId:20,tocIndex:0},{value:"JavaBean \u7684\u4F5C\u7528",paraId:21,tocIndex:0},{value:"JavaBean \u4E3B\u8981\u7528\u6765\u4F20\u9012\u6570\u636E\uFF0C\u5373\u628A\u4E00\u7EC4\u6570\u636E\u7EC4\u5408\u6210\u4E00\u4E2A JavaBean \u4FBF\u4E8E\u4F20\u8F93\u3002\u6B64\u5916\uFF0CJavaBean \u53EF\u4EE5\u65B9\u4FBF\u5730\u88AB IDE \u5DE5\u5177\u5206\u6790\uFF0C\u751F\u6210\u8BFB\u5199\u5C5E\u6027\u7684\u4EE3\u7801\uFF0C\u4E3B\u8981\u7528\u5728\u56FE\u5F62\u754C\u9762\u7684\u53EF\u89C6\u5316\u8BBE\u8BA1\u4E2D\u3002",paraId:22,tocIndex:0},{value:"\u901A\u8FC7 IDE\uFF0C\u53EF\u4EE5\u5FEB\u901F\u751F\u6210 getter \u548C setter\u3002\u5148\u8F93\u5165\u4EE5\u4E0B\u4EE3\u7801\uFF1A",paraId:23,tocIndex:0},{value:`public class Person {
private String name;
private int age;
}
`,paraId:24,tocIndex:0},{value:"\u7136\u540E\u5728\u7C7B\u7684\u7A7A\u767D\u5904 command + n \uFF0C\u201CGenerate Getters and Setters\u201D\uFF0C\u5728\u5F39\u51FA\u7684\u5BF9\u8BDD\u6846\u4E2D\u9009\u4E2D\u9700\u8981\u751F\u6210 getter \u548C setter \u65B9\u6CD5\u7684\u5B57\u6BB5\uFF0C\u70B9\u51FB\u786E\u5B9A\u5373\u53EF\u7531 IDE \u81EA\u52A8\u5B8C\u6210\u6240\u6709\u65B9\u6CD5\u4EE3\u7801\u3002",paraId:25,tocIndex:0},{value:"\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6CE8\u89E3\u6765\u5B8C\u6210, \u4F7F\u7528[[lombok|lombok\u5305]]",paraId:26,tocIndex:0},{value:"\u679A\u4E3E JavaBean \u5C5E\u6027",paraId:27,tocIndex:0},{value:"\u8981\u679A\u4E3E\u4E00\u4E2A JavaBean \u7684\u6240\u6709\u5C5E\u6027\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 Java \u6838\u5FC3\u5E93\u63D0\u4F9B\u7684 Introspector\uFF1A",paraId:28,tocIndex:0},{value:`import java.beans.\\*;

public class Main {
public static void main(String[] args) throws Exception {
BeanInfo info = Introspector.getBeanInfo(Person.class);
for (PropertyDescriptor pd : info.getPropertyDescriptors()) {
System.out.println(pd.getName());
System.out.println(" " + pd.getReadMethod());
System.out.println(" " + pd.getWriteMethod());
}
}
}
`,paraId:29,tocIndex:0},{value:`class Person {
private String name;
private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

}
`,paraId:30,tocIndex:0},{value:"\u8FD0\u884C\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u53EF\u4EE5\u5217\u51FA\u6240\u6709\u7684\u5C5E\u6027\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u8BFB\u5199\u65B9\u6CD5\u3002\u6CE8\u610F class \u5C5E\u6027\u662F\u4ECE Object \u7EE7\u627F\u7684 getClass()\u65B9\u6CD5\u5E26\u6765\u7684\u3002",paraId:31,tocIndex:0},{value:"\u5C0F\u7ED3",paraId:32,tocIndex:0},{value:"JavaBean \u662F\u4E00\u79CD\u7B26\u5408\u547D\u540D\u89C4\u8303\u7684 class\uFF0C\u5B83\u901A\u8FC7 getter \u548C setter \u6765\u5B9A\u4E49\u5C5E\u6027\uFF1B",paraId:33,tocIndex:0},{value:"\u5C5E\u6027\u662F\u4E00\u79CD\u901A\u7528\u7684\u53EB\u6CD5\uFF0C\u5E76\u975E Java \u8BED\u6CD5\u89C4\u5B9A\uFF1B",paraId:34,tocIndex:0},{value:"\u53EF\u4EE5\u5229\u7528 IDE \u5FEB\u901F\u751F\u6210 getter \u548C setter\uFF1B",paraId:35,tocIndex:0},{value:"\u4F7F\u7528 Introspector.getBeanInfo()\u53EF\u4EE5\u83B7\u53D6\u5C5E\u6027\u5217\u8868\u3002",paraId:36,tocIndex:0},{value:"",paraId:37,tocIndex:0},{value:"",paraId:38,tocIndex:0}]},68838:function(t,a,n){n.r(a),n.d(a,{texts:function(){return e}});var d=n(49940);const e=[{value:"Reflection\uFF08\u53CD\u5C04\uFF09\u662F Java \u88AB\u89C6\u4E3A\u52A8\u6001\u8BED\u8A00\u7684\u5173\u5065\uFF0C\u53CD\u5C04\u673A\u5236\u5141\u8BB8\u7A0B\u5E8F\u5728\u6267\u884C\u671F\u501F\u52A9\u4E8E Reflection APl \u53D6\u5F97\u4EFB\u4F55\u7C7B\u7684\u5185\u90E8\u4FE1\u606F\uFF0C\u5E76\u80FD\u76F4\u63A5\u64CD\u4F5C\u4EFB\u610F\u5BF9\u8C61\u7684\u5185\u90E8\u5C5E\u6027\u53CA\u65B9\u6CD5\u3002",paraId:0,tocIndex:0},{value:`Class c = Class.forName("java.lang.String")
`,paraId:1,tocIndex:0},{value:"\u52A0\u8F7D\u5B8C\u7C7B\u4E4B\u540E\uFF0C\u5728\u5806\u5185\u5B58\u7684\u65B9\u6CD5\u533A\u4E2D\u5C31\u4EA7\u751F\u4E86\u4E00\u4E2A Class \u7C7B\u578B\u7684\u5BF9\u8C61\uFF08\u4E00\u4E2A\u7C7B\u53EA\u6709\u4E00\u4E2A Class \u5BF9\u8C61\uFF09\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5C31\u5305\u542B\u4E86\u5B8C\u6574\u7684\u7C7B\u7684\u7ED3\u6784\u4FE1\u606F\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u5BF9\u8C61\u770B\u5230\u7C7B\u7684\u7ED3\u6784\u3002\u8FD9\u4E2A\u5BF9\u8C61\u5C31\u50CF\u4E00\u9762\u955C\u5B50\uFF0C\u900F\u8FC7\u8FD9\u4E2A\u955C\u5B50\u770B\u5230\u7C7B\u7684\u7ED3\u6784\uFF0C\u6240\u4EE5\uFF0C \u6211\u4EEC\u5F62\u8C61\u7684\u79F0\u4E4B\u4E3A\uFF1A\u53CD\u5C04",paraId:2,tocIndex:0},{value:`\u4E00\u4E2A\u7C7B\u5728\u5185\u5B58\u4E2D\u53EA\u6709\u4E00\u4E2A Class \u5BF9\u8C61
\u4E00\u4E2A\u7C7B\u5728\u52A0\u8F7D\u540E,\u7C7B\u7684\u6574\u4E2A\u7ED3\u6784\u90FD\u4F1A\u88AB\u5C01\u88C5\u5728 Class \u5BF9\u8C61\u4E2D`,paraId:3,tocIndex:0},{value:`// \u5DF2\u77E5\u4E00\u4E2A\u7C7B\u7684\u5168\u7C7B\u540D,\u4E14\u8BE5\u7C7B\u5728\u7C7B\u8DEF\u5F84\u4E0B,\u53EF\u901A\u8FC7Class\u7C7B\u7684\u9759\u6001\u65B9\u6CD5forName()\u83B7\u53D6,\u53EF\u80FD\u629B\u51FAClassNotFoundException
Class<?> c1 = Class.forName("com.example.xxl.User");
// \u82E5\u5DF2\u77E5\u5177\u4F53\u7684\u7C7B,\u901A\u8FC7\u7C7B\u7684class\u5C5E\u6027\u83B7\u53D6,\u8BE5\u65B9\u6CD5\u6700\u4E3A\u5B89\u5168\u53EF\u9760,\u7A0B\u5E8F\u6027\u80FD\u6700\u9AD8
Class c2 = Person.Class;
// \u5DF2\u77E5\u67D0\u4E2A\u7C7B\u7684\u5B9E\u4F8B,\u8C03\u7528\u8BE5\u5B9E\u4F8B\u7684getClass()\u65B9\u6CD5\u83B7\u53D6Class\u5BF9\u8C61
Class c3 = person.getClass();
// \u57FA\u672C\u5185\u7F6E\u7C7B\u578B\u7684\u5305\u88C5\u7C7B\u90FD\u6709\u4E00\u4E2AType\u5C5E\u6027
Class c4 = Integer.TYPE;
Class c5 = Integer.class;
`,paraId:4,tocIndex:0}]},61243:function(t,a,n){n.r(a),n.d(a,{texts:function(){return e}});var d=n(98999);const e=[{value:`\u25CF \u53EF\u4EE5\u5B9E\u4F8B\u5316 class\uFF08\u975E abstract\uFF09\uFF1B
\u25CF \u4E0D\u80FD\u5B9E\u4F8B\u5316 interface\u3002`,paraId:0,tocIndex:0},{value:"\u6240\u6709 interface \u7C7B\u578B\u7684\u53D8\u91CF\u603B\u662F\u901A\u8FC7\u67D0\u4E2A\u5B9E\u4F8B\u5411\u4E0A\u8F6C\u578B\u5E76\u8D4B\u503C\u7ED9\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF\u7684\uFF1A",paraId:1,tocIndex:0},{value:"CharSequence cs = new StringBuilder();",paraId:2,tocIndex:0},{value:"\u6709\u6CA1\u6709\u53EF\u80FD\u4E0D\u7F16\u5199\u5B9E\u73B0\u7C7B\uFF0C\u76F4\u63A5\u5728\u8FD0\u884C\u671F\u521B\u5EFA\u67D0\u4E2A interface \u7684\u5B9E\u4F8B\u5462\uFF1F",paraId:3,tocIndex:0},{value:"\u8FD9\u662F\u53EF\u80FD\u7684\uFF0C\u56E0\u4E3A Java \u6807\u51C6\u5E93\u63D0\u4F9B\u4E86\u4E00\u79CD\u52A8\u6001\u4EE3\u7406\uFF08Dynamic Proxy\uFF09\u7684\u673A\u5236\uFF1A\u53EF\u4EE5\u5728\u8FD0\u884C\u671F\u52A8\u6001\u521B\u5EFA\u67D0\u4E2A interface \u7684\u5B9E\u4F8B\u3002",paraId:4,tocIndex:0},{value:"\u4EC0\u4E48\u53EB\u8FD0\u884C\u671F\u52A8\u6001\u521B\u5EFA\uFF1F\u542C\u8D77\u6765\u597D\u50CF\u5F88\u590D\u6742\u3002\u6240\u8C13==\u52A8\u6001\u4EE3\u7406\uFF0C\u662F\u548C\u9759\u6001\u76F8\u5BF9\u5E94\u7684\u3002\u6211\u4EEC\u6765\u770B\u9759\u6001\u4EE3\u7801==\u600E\u4E48\u5199\uFF1A",paraId:5,tocIndex:0},{value:"\u5B9A\u4E49\u63A5\u53E3\uFF1A",paraId:6,tocIndex:0},{value:`public interface Hello {
void morning(String name);
}
`,paraId:7,tocIndex:0},{value:"\u7F16\u5199\u5B9E\u73B0\u7C7B\uFF1A",paraId:8,tocIndex:0},{value:`public class HelloWorld implements Hello {
public void morning(String name) {
System.out.println("Good morning, " + name);
}
}
`,paraId:9,tocIndex:0},{value:"\u521B\u5EFA\u5B9E\u4F8B\uFF0C\u8F6C\u578B\u4E3A\u63A5\u53E3\u5E76\u8C03\u7528\uFF1A",paraId:10,tocIndex:0},{value:`Hello hello = new HelloWorld();
hello.morning("Bob");
`,paraId:11,tocIndex:0},{value:"\u8FD9\u79CD\u65B9\u5F0F\u5C31\u662F\u6211\u4EEC\u901A\u5E38\u7F16\u5199\u4EE3\u7801\u7684\u65B9\u5F0F\u3002",paraId:12,tocIndex:0},{value:`\u8FD8\u6709\u4E00\u79CD\u65B9\u5F0F\u662F\u52A8\u6001\u4EE3\u7801\uFF0C\u6211\u4EEC\u4ECD\u7136\u5148\u5B9A\u4E49\u4E86\u63A5\u53E3 Hello\uFF0C
\u4F46\u662F\u6211\u4EEC\u5E76\u4E0D\u53BB\u7F16\u5199\u5B9E\u73B0\u7C7B\uFF0C
\u800C\u662F\u76F4\u63A5\u901A\u8FC7 JDK \u63D0\u4F9B\u7684\u4E00\u4E2A Proxy.newProxyInstance()\u521B\u5EFA\u4E86\u4E00\u4E2A Hello \u63A5\u53E3\u5BF9\u8C61\u3002
\u8FD9\u79CD\u6CA1\u6709\u5B9E\u73B0\u7C7B\u4F46\u662F\u5728\u8FD0\u884C\u671F\u52A8\u6001\u521B\u5EFA\u4E86\u4E00\u4E2A\u63A5\u53E3\u5BF9\u8C61\u7684\u65B9\u5F0F\uFF0C\u6211\u4EEC\u79F0\u4E3A\u52A8\u6001\u4EE3\u7801\u3002
JDK \u63D0\u4F9B\u7684\u52A8\u6001\u521B\u5EFA\u63A5\u53E3\u5BF9\u8C61\u7684\u65B9\u5F0F\uFF0C\u5C31\u53EB\u52A8\u6001\u4EE3\u7406\u3002`,paraId:13,tocIndex:0},{value:"\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0\u5982\u4E0B\uFF1A",paraId:14,tocIndex:0},{value:`import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

public class Main {
public static void main(String[] args) {
InvocationHandler handler = new InvocationHandler() {
@Override
public Object invoke(Object proxy, Method method, Object[] args)
throws Throwable {
System.out.println(method);
if (method.getName().equals("morning")) {
System.out.println("Good morning, " + args[0]);
}
return null;
}
};
Hello hello = (Hello) Proxy.newProxyInstance(
Hello.class.getClassLoader(), // \u4F20\u5165 ClassLoader
new Class[] { Hello.class }, // \u4F20\u5165\u8981\u5B9E\u73B0\u7684\u63A5\u53E3
handler); // \u4F20\u5165\u5904\u7406\u8C03\u7528\u65B9\u6CD5\u7684 InvocationHandler
hello.morning("Bob");
}
}

interface Hello {
void morning(String name);
}
`,paraId:15,tocIndex:0},{value:"\u5728\u8FD0\u884C\u671F\u52A8\u6001\u521B\u5EFA\u4E00\u4E2A interface \u5B9E\u4F8B\u7684\u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:16,tocIndex:0},{value:"\u5B9A\u4E49\u4E00\u4E2A InvocationHandler \u5B9E\u4F8B\uFF0C\u5B83\u8D1F\u8D23\u5B9E\u73B0\u63A5\u53E3\u7684\u65B9\u6CD5\u8C03\u7528\uFF1B",paraId:17,tocIndex:0},{value:`\u901A\u8FC7 Proxy.newProxyInstance()\u521B\u5EFA interface \u5B9E\u4F8B\uFF0C\u5B83\u9700\u8981 3 \u4E2A\u53C2\u6570\uFF1A
a. \u4F7F\u7528\u7684 ClassLoader\uFF0C\u901A\u5E38\u5C31\u662F\u63A5\u53E3\u7C7B\u7684 ClassLoader\uFF1B
b. \u9700\u8981\u5B9E\u73B0\u7684\u63A5\u53E3\u6570\u7EC4\uFF0C\u81F3\u5C11\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u63A5\u53E3\u8FDB\u53BB\uFF1B
c. \u7528\u6765\u5904\u7406\u63A5\u53E3\u65B9\u6CD5\u8C03\u7528\u7684 InvocationHandler \u5B9E\u4F8B\u3002`,paraId:17,tocIndex:0},{value:"\u5C06\u8FD4\u56DE\u7684 Object \u5F3A\u5236\u8F6C\u578B\u4E3A\u63A5\u53E3\u3002",paraId:17,tocIndex:0},{value:"\u52A8\u6001\u4EE3\u7406\u5B9E\u9645\u4E0A\u662F JVM \u5728\u8FD0\u884C\u671F\u52A8\u6001\u521B\u5EFA class \u5B57\u8282\u7801\u5E76\u52A0\u8F7D\u7684\u8FC7\u7A0B\uFF0C\u5B83\u5E76\u6CA1\u6709\u4EC0\u4E48\u9ED1\u9B54\u6CD5\uFF0C\u628A\u4E0A\u9762\u7684\u52A8\u6001\u4EE3\u7406\u6539\u5199\u4E3A\u9759\u6001\u5B9E\u73B0\u7C7B\u5927\u6982\u957F\u8FD9\u6837\uFF1A",paraId:18,tocIndex:0},{value:`public class HelloDynamicProxy implements Hello {
InvocationHandler handler;
public HelloDynamicProxy(InvocationHandler handler) {
this.handler = handler;
}
public void morning(String name) {
handler.invoke(
this,
Hello.class.getMethod("morning", String.class),
new Object[] { name });
}
}
`,paraId:19,tocIndex:0},{value:"\u5176\u5B9E\u5C31\u662F JVM \u5E2E\u6211\u4EEC\u81EA\u52A8\u7F16\u5199\u4E86\u4E00\u4E2A\u4E0A\u8FF0\u7C7B\uFF08\u4E0D\u9700\u8981\u6E90\u7801\uFF0C\u53EF\u4EE5\u76F4\u63A5\u751F\u6210\u5B57\u8282\u7801\uFF09\uFF0C\u5E76\u4E0D\u5B58\u5728\u53EF\u4EE5\u76F4\u63A5\u5B9E\u4F8B\u5316\u63A5\u53E3\u7684\u9ED1\u9B54\u6CD5\u3002",paraId:20,tocIndex:0},{value:"\u5C0F\u7ED3",paraId:21,tocIndex:0},{value:"Java \u6807\u51C6\u5E93\u63D0\u4F9B\u4E86\u52A8\u6001\u4EE3\u7406\u529F\u80FD\uFF0C\u5141\u8BB8\u5728\u8FD0\u884C\u671F\u52A8\u6001\u521B\u5EFA\u4E00\u4E2A\u63A5\u53E3\u7684\u5B9E\u4F8B\uFF1B",paraId:22,tocIndex:0},{value:"\u52A8\u6001\u4EE3\u7406\u662F\u901A\u8FC7 Proxy \u521B\u5EFA\u4EE3\u7406\u5BF9\u8C61\uFF0C\u7136\u540E\u5C06\u63A5\u53E3\u65B9\u6CD5\u201C\u4EE3\u7406\u201D\u7ED9 InvocationHandler \u5B8C\u6210\u7684\u3002",paraId:23,tocIndex:0}]},96542:function(t,a,n){n.r(a),n.d(a,{texts:function(){return e}});var d=n(68040);const e=[{value:"\u5229\u7528",paraId:0,tocIndex:1},{value:"BFC",paraId:0,tocIndex:1},{value:",\u5DE6\u8FB9\u5B9A\u5BBD\u5B9A\u9AD8,\u6BD4\u5982\u4FA7\u680F,\u53F3\u8FB9\u5360\u636E\u5269\u4F59\u7A7A\u95F4,\u7528",paraId:0,tocIndex:1},{value:"float:left",paraId:0,tocIndex:1},{value:"\u5B9A\u4E49\u5DE6\u8FB9 div \u7684",paraId:0,tocIndex:1},{value:"BFC",paraId:0,tocIndex:1},{value:",\u7528",paraId:0,tocIndex:1},{value:"overfow:hidden",paraId:0,tocIndex:1},{value:"\u6765\u5B9A\u4E49\u53F3\u8FB9 div \u7684",paraId:0,tocIndex:1},{value:"BFC",paraId:0,tocIndex:1},{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <div style="width:500px;border:1px solid #ddd;height:500px">
      <div style="float:left;height:100px;width:100px;background:green;">
        hah
      </div>

      <div style="overflow:hidden;background:yellow">nihao</div>
    </div>
  </body>
</html>
`,paraId:1,tocIndex:1},{value:"\u7ED3\u679C",paraId:2,tocIndex:1},{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <div
      style="background:gold;overflow: hidden;width:100px;position: relative;height: 100px;"
    >
      <div style="width:20px;background:red;height:50px;">1</div>

      <div
        style="width:30px;background:green;position: absolute;top:20px;bottom:0;"
      ></div>
    </div>
  </body>
</html>
`,paraId:3,tocIndex:2},{value:"\u7ED3\u679C",paraId:4,tocIndex:2},{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>

    <style>
      .box {
        margin-bottom: -800px;
        border: 1px solid black;
      }
      .box div {
        float: left;
      }
    </style>
  </head>

  <body>
    <div style="background:gold;overflow: hidden;width:500px;" class="box">
      <div style="width:30%;background:red;height:200px;">1</div>

      <div style="width:50%;background:green;height:300px;">2</div>

      <div style="width:10%;background:gray;height:700px;">3</div>
    </div>
  </body>
</html>
`,paraId:5,tocIndex:3},{value:"\u7ED3\u679C",paraId:6,tocIndex:3},{value:`.box div{ padding-bottom: 1000px; margin-bottom: -1000px; }
`,paraId:7,tocIndex:4}]},31473:function(t,a,n){n.r(a),n.d(a,{texts:function(){return e}});var d=n(65785);const e=[{value:`var CLONE_DEEP_FLAG    = 1,
    CLONE_FLAT_FLAG    = 2,
    CLONE_SYMBOLS_FLAG = 4;

function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;
  ...
  ...
  ...
  return result;
}
`,paraId:0,tocIndex:1},{value:"\u53EA\u770B\u4E0A\u8FF0\u4EE3\u7801 1",paraId:1,tocIndex:1},{value:`3 \u884C\u7684\u503C\uFF0C\u786E\u5B9E\u5F88\u8FF7\u7CCA\u3002\u4F46\u662F\u6211\u4EEC\u770B\u5B83\u7684\u540D\u5B57\uFF0C\u770B\u5B8C\u540D\u5B57\u5927\u6982\u5C31\u77E5\u9053\uFF0C\u5176\u5B9E\u8FD9 3 \u4E2A\u6570\u5B57\u4EE3\u8868\u4E86\u4E09\u79CD\u573A\u666F\u3002\u800C 3 \u79CD\u573A\u666F\uFF0C\u7528 3 \u4E2A\u6570\u5B57\u6765\u4EE3\u8868\uFF0C\u5C31\u548C\u6211\u4EEC\u5E73\u65F6\u7ED9\u7EC4\u4EF6\u533A\u5206\u7C7B\u578B\u4E00\u6837\uFF08\u867D\u7136\u6211\u4E0D\u8BA9\u4F60\u4EEC\u8FD9\u4E48\u5199\uFF09\u3002
\u6240\u4EE5 1`,paraId:1,tocIndex:1},{value:"3 \u884C\u8FD8\u662F\u597D\u7406\u89E3\u7684\uFF0C\u4F46\u662F 7~8 \u884C\u5462\uFF1F",paraId:1,tocIndex:1},{value:"&",paraId:1,tocIndex:1},{value:" \u{1F47F}",paraId:1,tocIndex:1},{value:"\u6807\u9898\u662F\u4E00\u4E9B\u8FD0\u7B97\u7B26\uFF0C\u4ED6\u4EEC\u64CD\u7EB5\u7684\u662F",paraId:2,tocIndex:2},{value:"\u4E8C\u8FDB\u5236",paraId:2,tocIndex:2},{value:"(\u9047\u5230 2 \u8FDB\u4E00\u4F4D\uFF0C\u6240\u4EE5\u4E0D\u50CF 10 \u8FDB\u5236\uFF0C2 \u8FDB\u5236\u53EA\u6709 0 \u548C 1\uFF0C\u800C 10 \u8FDB\u5236\u6709 0 \u5230 9)\uFF0C\u8FD9\u70B9\u5F88\u91CD\u8981\u3002",paraId:2,tocIndex:2},{value:`var a = 0; // 0000   0
var a = 1; // 0001   2^0
var a = 2; // 0010   2^1
var a = 3; // 0011   2^1+2^0
var a = 4; // 0100   2^2
var a = 5; // 0101   2^2+2^0
var a = 6; // 0110   2^2+2^1
var a = 7; // 0111   2^2+2^1+2^0
var a = 8; // 1000   2^3
`,paraId:3,tocIndex:2},{value:`|
| 0
0 | 0
1 | 1
1 |
| --- | --- | --- | --- |
| & \u4E0E | 0 | 0 | 1 |
| &#124; \u6216 | 0 | 1 | 1 |
`,paraId:4,tocIndex:2},{value:`1 & 2 = 0;   // 0001 & 0010    0000
4 & 8 = 0;   // 0100 & 1000    0000
3 & 5 = 1;   // 0011 & 0101    0001
`,paraId:5,tocIndex:2},{value:`1 & 2 = 3;    // 0001 | 0010   0011
4 & 8 = 12;   // 0100 | 1000   1100
3 & 5 = 7;    // 0011 | 0101   0111
`,paraId:6,tocIndex:2},{value:`// \u5047\u8BBE\u4E00\u4E2A\u7CFB\u7EDF\u67094\u79CD\u6743\u9650\uFF1A\u589E \u5220 \u6539 \u67E5
// \u6709\u4E2A\u7528\u6237\u6709\u6743\u9650\uFF1A\u589E \u5220 \u6539
var auth = { add: true, del: true, upadte: true, read: false };
// \u6216\u8005
var add = 1,
  del = 2,
  update = 3,
  read = 4;
var auth = [1, 2, 3];
// \u7B49\u7B49\u5199\u6CD5\uFF0C\u90FD\u6CA1\u5565\u95EE\u9898\uFF01\uFF01\uFF01

// ===================== \u5982\u679C\u662F\u8FD9\u6837\u5462  =====================
var ADD = 1,
  DEL = 2,
  UPDATE = 4,
  READ = 8;
var authAddDel = ADD | DEL;
var authAll = ADD | DEL | UPDATE | READ;

if (authAddDel & (ADD === ADD)) {
  // \u53EF\u4EE5\u76F4\u63A5\u5224\u65AD\u662F\u5426\u5927\u4E8E0
  console.log('\u6709\u65B0\u589E\u6743\u9650');
}
`,paraId:7,tocIndex:3},{value:"\u539F\u56E0\u5982\u4E0B",paraId:8,tocIndex:3},{value:`  0001  ->  1
| 0010  ->  2
------
  0011  ->  3  |     0011  ->  3
& 0001  ->  1  |   & 0010  ->  2
------         |   ------
  0001  ->  1  |     0010  ->  2

1 | 2 = 3;
3 & 1 === 1; // \u8BF4\u660E\u542B\u67091
3 & 2 === 2; // \u8BF4\u660E\u542B\u67092
`,paraId:9,tocIndex:3},{value:"\u5C06 ADD \u548C DEL \u8FD9\u4E9B\u8BBE\u7F6E\u6210 1 2 4 8 \u662F\u4E5F\u662F\u7279\u610F\u7684\uFF0C\u7528 1bit\uFF081 \u4E2A\u76F4\u63A5\u7B49\u4E8E 8 \u4F4D bit\uFF09\u6765\u5360\u7528\u4E00\u79CD\u529F\u80FD\uFF08\u6BCF\u4E00\u4F4D\u4EE3\u8868\u4E00\u79CD\u529F\u80FD\uFF09\u3002",paraId:10,tocIndex:3},{value:`3 | 5 = 7;
7 & 1 === 1;  // \u56E0\u4E3A3\u5305\u542B\u4E862\u548C1\uFF1B5\u5305\u542B\u4E864\u548C1\u3002
7 & 2 === 2;
7 & 4 === 4;
`,paraId:11,tocIndex:3}]}}]);
