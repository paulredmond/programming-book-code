// Basic conversions


#import <Foundation/Foundation.h>

int main (int argc, const char * argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

    float f1 = 123.125, f2;
	int i1, i2 = -150;
	
	i1 = f1;
	NSLog(@"%f assigned to an int produces %i", f1, i1); // 123
	
	f1 = i2;
	NSLog(@"%i assigned to a float produces %f", i2, f1); // -150.0000
	
	f1 = i2 / 100; // -1.000000
	NSLog(@"%i divided by 100 produces %f", i2, f1);
	
	f2 = i2 / 100.0; // -1.500000
	NSLog(@"%i divided by 100.0 produces %f", i2, f2);
	
	f2 = (float) i2 / 100; // -1.500000
	NSLog(@"(float) %i divided by 100 produces %f", i2, f2);
	
    [pool drain];
    return 0;
}
