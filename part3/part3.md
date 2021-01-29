# Debugging
1. What was the bug?
`document.getElementById("num1/2").value` returns a string. Therefore, `num1` and `num2` were being concatenated, rather than added, in `calculateSum`.

2. How would you fix it? Include a screenshot of your fix.
I would fix the bug by converting the strings returned by `document.getElementById("num1/2").value` into numbers.
![Code after fixing bug](fix.png)

# Network
1. `citylots.json`.

2. `part2.js`.

3. `11.7 MB`.

4. `15.03 s`.

5. `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36`.

6. Apache.

7. Tue, 26 Jan 2021 22:14:13 GMT.

8. `application/json`.

9. `fetchData()` in `part2.js`.