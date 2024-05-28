// Function overloads to handle different input types
function addOrConcat(a: number, b: number): number;
function addOrConcat(a: string, b: string): string;
function addOrConcat(a: number, b: string, mode: 'concat'): string;
function addOrConcat(a: string, b: number, mode: 'concat'): string;

// Implementation of the function that either adds or concatenates the inputs
function addOrConcat(a: any, b: any, mode?: string): any {
  // If mode is 'concat', concatenate the values as strings
  if (mode === 'concat') {
    return a.toString() + b.toString();
  }
  // Otherwise, add the values if they are numbers
  else if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  // Throw an error if the operation is not supported
  throw new Error('Invalid operation');
}

// Usage of the function with type assertion to prevent errors
let myVal: string = addOrConcat(2, 2, 'concat') as string;
