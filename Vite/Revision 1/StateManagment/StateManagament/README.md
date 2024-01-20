### Code 1: Delayed State Update

**Explanation**
 - When we call the setCount function, The React schedules an update to the components but not apply immediatly <br /> 
     that's why in console we are seeing the previous value 
**Solution**
 - we can use useEffect hook because this hook console the current value in the conosle. <br />
        And this useEffect hook rerender after the components are rendred.


### Code 2: Multiple State Updates

**Explanation**
 - in React useState hook The setCount function is asynchronous. <br />
        when we call the setCount function 3 times the react does not apply
        update instead of this 
        it schedules the update for the next rendering. when you log count
        immediately after the three setCount calls, you're logging the current
        value of count before any of the updates have been applied

**Solution - 1**
 - We can use a callback function inside the setCount function to update
        the value of count this callback function update the value of count
        immediately

**Solution -2**
 - We can use useEffect hook by which it update the value after the
        rerender is completed