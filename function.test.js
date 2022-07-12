const {sum, stringLength, reverseString, Calculator }= require('./function');

test('add 1 + 2 to equal 3', () => { 
    expect(sum(1, 2)).toBe(3);
})

test('sum number of letters in string', () => {
    //arrange
    const string = 'hello';
    //act
    const actual = stringLength(string);
    //assert
    expect(stringLength('hello')).toBe(5);
  }); //5
  
  test('Should return Error if string count isnt between 0 & 10', () => {
    //arrange
    const string = 'helloworldhowareyou';
    //act
    const actual = () => {
      stringLength(string);
    };
  
    //assert
    expect(actual).toThrowError();
  }); //this is a function that throws an error
  
  test('should return reverse string', () => {
    //arrange
    const string = 'hello';
    //act
    const actual = reverseString(string);
    //assert
    expect(actual).toBe(reverseString(string));
  })

  test('1 + 2 should return 3', () => {
    //arrange
    const num1 = 1;
    const num2 = 2;
    //act
    const actual = sum(num1, num2);
    //assert
    expect(actual).toBe(3);
  }
    )

    test('1 - 2 should return -1', () => {
        //arrange
        const num1 = 1;
        const num2 = 2;
        //act
        const calculator = new Calculator(num1, num2);
        const actual = calculator.subtract();
      
        //assert
        expect(actual).toBe(-1);
    }
        )

        test('1 * 2 should return 2', () => {
            //arrange
            const num1 = 1;
            const num2 = 2;
            //act
            const calculator = new Calculator(num1, num2);
            const actual = calculator.multiply();
            //assert
            expect(actual).toBe(2);
        }
            )

            test('1 / 2 should return 0.5', () => {
                //arrange
                const num1 = 1;
                const num2 = 2;
                //act
                const calculator = new Calculator(num1, num2);
                const actual = calculator.divide();
                //assert
                expect(actual).toBe(0.5);
            }
                )

                


