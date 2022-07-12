const {sum, stringLength }= require('./function');

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
  })  