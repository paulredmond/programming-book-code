//
// Program 8.2 and 8.3
//

#import <Foundation/Foundation.h>
#import "Rectangle.h"
#import "Square.h"
#import "XYPoint.h"

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
	
    // Program 8.4
    Rectangle   *myRect2 = [[Rectangle alloc] init];
    XYPoint     *myPoint = [[XYPoint alloc] init];
    
    [myPoint setX: 100 andY: 200];
    [myRect2 setWidth: 5 andHeight: 8];
    myRect2.origin = myPoint;
    
    NSLog(@"Rectangle w = %i, h = %i",
          myRect2.width, myRect2.height);
    NSLog(@"Origin at (%i, %i)",
          myRect2.origin.x, myRect2.origin.y);
    
    NSLog(@"Area = %i, Perimeter = %i",
          [myRect2 area], [myRect2 perimeter]);
    
    myPoint.x = 50;
    myPoint.y = 50;
    
    NSLog(@"Origin at (%i, %i)",
          myRect2.origin.x, myRect2.origin.y);
    
    [myRect2 release];
    [myPoint release];
    
    [pool drain];
    return 0;
}
