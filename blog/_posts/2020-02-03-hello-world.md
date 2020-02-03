---
title: Hello World
date: 2020-02-03
tags:
  - HelloWorld
  - Regular
author: Li Jiahao
location: Guangdong
---

The novel coronavirus outbreak is sweeping across China. Everybody is staying at home doing nothing. It is so boring that I even start running a blog.

This blog is powered by [vuepress](https://github.com/vuejs/vuepress), using the default blog theme [vuepress-theme-blog](https://github.com/vuepressjs/vuepress-theme-blog).

Actually, I don't have much to blog, so this site may not be updated in the future. It is currently deployed at my [Github Pages](https://home.liplus.top/) for long-time maintenance. Maybe I will post new blogs, or maybe I won't. Just let it go.

This is my first blog, so let me say `hello` to the world.

```bash
#!/bin/bash
echo "Hello World"
```

```c
#include <stdio.h>

int main() {
    printf("Hello World\n");
    return 0;
}
```

```cpp
#include <iostream>

int main() {
    std::cout << "Hello World" << std::endl;
    return 0;
}
```

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

```python
if __name__ == "__main__":
    print("Hello World")
```

```js
console.log("Hello World");
```

```html
<h1>Hello World</h1>
```

```assembly
.data
msg:
    .ascii "Hello World\n"
    len = . - msg

.text
.global _start
_start:
    movq    $len, %rdx
    movq    $msg, %rsi
    movq    $1, %rax
    movq    $1, %rdi
    syscall

    movq    $60, %rax
    movq    $0, %rdi
    syscall
```
