// Modulus operator

#import <Foundation/Foundation.h>

int main (int argc, const char * argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];
	
	int a = 25, b = 5, c = 10, d = 7;
	
	NSLog(@"a %% b = %i", a % b); // 0
	NSLog(@"a %% c = %i", a % c); // 5
	NSLog(@"a %% d = %i", a % d); // 4
	NSLog(@"a / d * d + a %% d = %i", a / d * d + a % d); // 25
	
    [pool drain];
    return 0;
}
