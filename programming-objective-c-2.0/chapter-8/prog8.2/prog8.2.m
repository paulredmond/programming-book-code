//
// Program 8.2 and 8.3
//

#import <Foundation/Foundation.h>
#import "Rectangle.h"
#import "Square.h"

int main (int argc, const char * argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

    Rectangle *myRect = [[Rectangle alloc] init];
	
	[myRect setWidth: 5 andHeight: 8];
	
	NSLog(@"Rectangle: w = %i, h = %i",
		  myRect.width, myRect.height);
	NSLog(@"Area = %i, Perimeter = %i",
		  [myRect area], [myRect perimeter]);
	
	[myRect release];
	
	// Prog 8.3
	Square *mySquare = [[Square alloc] init];
	
	[mySquare setSide: 5];
	
	NSLog(@"Square: s = %i", [mySquare side]);
	NSLog(@"Area = %i, Perimeter = %i",
		  [mySquare area], [mySquare perimeter]);
	
    [pool drain];
    return 0;
}
