---
title: Annotation
tags: JLS
---
### 声明

```
public @interface TestAnnotation {
}
```

### 元注解

| Annotation |  参数    |描述|
| :--------- | :--------- | :---------- |
| @Retention  |   | 限定元数据的存活时间  |
|  | RetentionPolicy.SOURCE   |注解只在源码阶段保留，在编译器进行编译时它将被丢弃忽视|
|   |  RetentionPolicy.CLASS | 注解只被保留到编译进行的时候，它并不会被加载到 JVM 中 |
|   |RetentionPolicy.RUNTIME   |注解可以保留到程序运行的时候，它会被加载进入到 JVM 中 |
|@Documented   |   |注解的元数据将添加到Javadoc中   |
|@Target   |   | 注解运用位置  |
|   |  ElementType.ANNOTATION_TYPE | 为注解进行注解  |
|   |ElementType.CONSTRUCTOR   |   可以给构造方法进行注解|
| |ElementType.FIELD          |可以给属性进行注解|
| |ElementType.LOCAL_VARIABLE |可以给局部变量进行注解|
| |ElementType.METHOD         |可以给方法进行注解|
| |ElementType.PACKAGE        |可以给一个包进行注解|
| |ElementType.PARAMETER      | 可以给一个方法内的参数进行注解|
| |ElementType.TYPE           | 可以给一个类型进行注解，比如类、接口、枚举|
|@Inherited   |   | 表明注解可以集成  |
|@Repeatable   |   | 可重复注解  |

### 调用
Class类中有如下方法：
```
public Annotation[] getAnnotations()

Description copied from interface: AnnotatedElement
Returns all annotations present on this element. (Returns an array of length zero if this element has no annotations.) The caller of this method is free to modify the returned array; it will have no effect on the arrays returned to other callers.

Specified by:
getAnnotations in interface AnnotatedElement

Returns:
all annotations present on this element
Since:
1.5
```
```
public boolean isAnnotationPresent(Class<? extends Annotation> annotationClass)
Description copied from interface: AnnotatedElement
Returns true if an annotation for the specified type is present on this element, else false. This method is designed primarily for convenient access to marker annotations.
Specified by:
isAnnotationPresent in interface AnnotatedElement
Parameters:
annotationClass - the Class object corresponding to the annotation type
Returns:
true if an annotation for the specified annotation type is present on this element, else false
Throws:
NullPointerException - if the given annotation class is null
Since:
1.5
```
以上两个方法可以获取注解类的相关信息
