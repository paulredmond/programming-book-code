// Implement a calculator class

#import <Foundation/Foundation.h>

@interface Calculator : NSObject
{
	double accumulator;
}

// Accumulator methods
-(void)		setAccumulator: (double) value;
-(void)		clear;
-(double)	accumulator;

// Arithmetic methods
-(void)	add: (double) value;
-(void) subtract: (double) value;
-(void) multiply: (double) value;
-(void) divide: (double) value;

@end

@implementation Calculator

-(void) setAccumulator: (double) value
{
	accumulator = value;
}

-(void) clear
{
	accumulator = 0;
}

-(double) accumulator
{
	return accumulator;
}

-(void) add: (double) value
{
	accumulator += value;
}

-(void) subtract: (double) value
{
	accumulator -= value;
}

-(void) multiply: (double) value
{
	accumulator *= value;
}

-(void) divide: (double) value
{
	accumulator /= value;
}
@end


int main (int argc, const char * argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

	Calculator *deskCalc;
	deskCalc =[[Calculator alloc] init];
	
	[deskCalc clear];
	[deskCalc setAccumulator: 100.0];
	[deskCalc add: 200.];
	[deskCalc divide: 15.0];
	[deskCalc subtract: 10.0];
	[deskCalc multiply: 5];
	NSLog(@"The result is %g", [deskCalc accumulator]);
	
	// Clear it to see
	[deskCalc clear];
	NSLog(@"The result is %g", [deskCalc accumulator]);
	
	NSLog(@"The temperature is %0.2g degrees Celsius", (27 - 32) / 1.8);
	
	char c,d;
	
	c = 'd';
	d = c;
	
	NSLog(@"d = %c", d);
	
	// Exponent
	NSLog(@"the value is %f", 3 * pow(2.55, 3) - 5 * pow(2.55,2) + 6);//32.5125
	
	
    [pool drain];
    return 0;
}
