// First program example

#import <Foundation/Foundation.h>

int main (int argc, const char * argv[])
{

    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];
    NSLog(@"Programming is fun!");
    NSLog(@"Programming in Objective-C is even more fun!");
    
    // Program 2.4
    int sum; // Define variable to be of type integer. Could also do on same line: int sum = 50 + 25;
    
    sum = 50 + 25;
    NSLog(@"The sum of 50 and 25 is %i", sum);
    
    // Program 2.5
    int value1, value2; // sum is already defined. Define multiple varibles on one line.
    value1 = 75;
    value2 = 25;
    sum = value1 + value2;
    
    NSLog(@"The sum of %i and %i is %i", value1, value2, sum);

    
    [pool drain];
    return 0;
}

