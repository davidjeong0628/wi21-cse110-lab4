1. `prices.length` will be printed to the console. Since the variable `i` is declared using the `var` keyword, it is scoped to the function `discountPrices` rather than the for-loop code block.

2. The last calculated `discountedPrice` will be printed to the console. Since `discountedPrice` is declared using the `var` keyword, it is scoped to the function `discountPrices` rather than the for-loop code block.

3. The last calculated `finalPrice` will be printed to the console. Since `finalPrice` is declared using the `var` keyword, it is scoped to the function `discountPrices`.  

4. `discountPrices([100,200,300], .5)` will return the list `[50,100,150]`. The function `discountPrices` iterates through each element in the list `[100,200,300]` and applies the discount of `.5`, adding each discounted value to the list `discounted`, which it returns at the end. 

5. An error would occur. The variable `i` is declared using the `let` keyword within the for-loop code block. Thus, it is scoped to the for-loop, making it out of scope for line 11.

6. An error would occur. The variable `discountedPrice` is declared using the `let` keyword within the for-loop code block. Thus, it is scoped to the for-loop, making it out of scope for line 12.

7. The last calculated `finalPrice` will be printed to the console. Since `finalPrice` is declared using the `let` keyword, it is scoped to the function `discountPrices`. 

8. Assuming that we are disregarding the errors caused from lines 11 and 12, `discountPrices([100,200,300], .5)` will return the list `[50,100,150]`. The function `discountPrices` iterates through each element in the list `[100,200,300]` and applies the discount of `.5`, adding each discounted value to the list `discounted`, which it returns at the end.  

9. An error would occur. The variable `i` is declared using the `let` keyword within the for-loop code block. Thus, it is scoped to the for-loop, making it out of scope for line 11.

10. An error would occur. The variable `discountedPrice` is declared using the `const` keyword within the for-loop code block. Thus, it is scoped to the for-loop, making it out of scope for line 12.

11. Disregarding the reassignment error inside the for-loop, 0 will be printed to the console. Since `finalPrice` is declared using the `const` keyword, it is scoped to the function `discountPrices`. Furthermore, its value must remain at 0, its first assigned value.   

12. Assuming that we are disregarding any error caused by the reassignment of `finalPrice` and lines 11 and 12, `discountPrices([100,200,300], .5)` will return the list `[50,100,150]`. The function `discountPrices` iterates through each element in the list `[100,200,300]` and applies the discount of `.5`, adding each discounted value to the list `discounted`, which it returns at the end.

13.
    1. `student.name`
    2. `student['Grad Year']`
    3. `student.greeting()`
    4. `student['Favorite Teacher'].name`
    5. `student.courseLoad[0]`

14.
    1. `'32'`. Since `+` is operating on the string `'3'`, `+` acts as a concatenation operator. Thus, `2` is converted to a string in order to be concatenated with `'3'`.
    2. `1`. Since `-` is a mathematical operator, its operands are converted to numbers. Thus, the result is the difference between 3 and 2. 
    3. `3`. Here, `+` is a mathematical operator, as it is operating on `3`. Thus, `null` is converted into its numeric form, which is `0`.
    4. `'3null'`. Since `+` is operating on the string `'3'`, `+` acts as a concatenation operator. Thus, `null` is converted to a string (`'null'`) in order to be concatenated with `'3'`.  
    5. `4`. Here, `+` is a mathematical operator, as it is operating on `3`. Thus, `true` is converted into its numeric form, which is `1`.
    6. `0`. Here, `+` is a mathematical operator, as it is not operating on strings. Therefore, `false` and `null` are converted to their numeric form, which is `0`.
    7. `'3undefined'`. Since `+` is operating on the string `"3"`, `+` acts as a concatenation operator. Thus, `undefined` is converted to a string in order to be concatenated with `"3"`.  
    8. `NaN`. Since `-` is a mathematical operator, its operands must be converted to numbers. Since the numeric form of `undefined` is `NaN`, the result is `NaN`.

15.
    1. `true`. `'2'` and `1` are of different types. Therefore, they are converted to their numeric forms. 2 is greater than 1. 
    2. `false`. The operands are both of type string. Strings are compared based on "dictionary" order. Since 2 would go after 12 in the dictionary, the result is `false`.
    3. `true`. The operands are of different types. Thus, they are converted to their numeric forms. 2 is equal to 2.
    4. `false`. `===` does not type-convert its operands. Since `2` and `'2'` are of different types, they cannot be equal without type conversions.
    5. `false`. The operands are of different types. Thus, they are converted to their numeric forms. 1 is not equal to 2.
    6. `true`. `Boolean(2)` returns `true`. `true` is strictly equal to `true`.

16. `===` checks for equality without any type conversion. On the other hand, `==` converts its operands to their numeric forms if they are of different types. 

17. `'How are you?'`. `2 == true` evaluates to `false`, for 2 does not equal to 1. Any number besides 0 becomes converted to `true`. Thus, the second condition evaluates to `true`.

18. Refer to part1-question18.js.

19. The result is that the list `[1,2,3]` becomes `[6,8,10]`. In `modifyArray`, we iterate through each element in `[1,2,3]`. For each element, we call `callback`, which is `doSomething`. We pass the current element and a function as arguments. `doSomething` then calls on the function that was passed in as the second argument with the argument current element + 2. This function then returns (current element + 2)*2, which is the value pushed in to `newArr`.

20. Refer to the corresponding file.

21. The output is 1 4 3 2. Each on a newline.