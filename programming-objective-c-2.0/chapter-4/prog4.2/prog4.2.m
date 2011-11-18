//
// Operator precedence 4.2 - pg 56
//

#import <Foundation/Foundation.h>

int main (int argc, const char * argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];
	
	int a = 100;
	int b = 2;
	int c = 25;
	int d = 4;
	int result;
	
	result = a - b;
	NSLog(@"a - b = %i", result);
	
	result = b * c;
	NSLog(@" b * c = %i", result);
	
	result = a / c;
	NSLog(@"a / c = %i", result);
	
	result = a + b * c;
	NSLog(@"a + b * c = %i", result);
	
	NSLog(@"a * b + c * d = %i", a * b + c * d);
	
    [pool drain];
    return 0;
}
