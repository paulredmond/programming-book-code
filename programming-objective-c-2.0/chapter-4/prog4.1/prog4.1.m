#import <Foundation/Foundation.h>

int main (int argc, const char * argv[]) {
	NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];
	
	int		integerVar = 100;
	float	floatingVar = 331.79;
	double	doubleVar = 8.44e+11;
	char	charVar = 'W';
	
	NSLog	(@"integerVar = %i", integerVar);
	NSLog	(@"floatingVar = %f", floatingVar);
	NSLog	(@"doubleVar = %e", doubleVar);
	NSLog	(@"doubleVar = %g", doubleVar);
	NSLog	(@"charVar = %c", charVar);
	
	[pool drain];
	return 0;
}