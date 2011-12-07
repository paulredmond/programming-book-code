#import <Foundation/Foundation.h>

@interface Rectangle : NSObject
{
	int	width;
	int height;
}

- (void)	setWidth: (int) w;
- (void)	setHeight: (int) h;
- (int)		width;
- (int)		height;
- (int)		area;
- (int)		perimeter;

@end

@implementation Rectangle

-(void) setWidth: (int) w
{
	width = w;
}

-(void) setHeight: (int) h
{
	height = h;
}

-(int) width
{
	return width;
}

-(int) height
{
	return height;
}

// area = 1/2 base * height
-(int) area
{
	return (width * height) / 2;
}

// perimeter of right triangle
// b^2 + h^2 = c^2
// perimeter = side1 + side2 + side3
-(int) perimeter
{
	double side = pow(width, 2) + pow(height, 2);
	return width + height + sqrt(side);
}


@end


int main (int argc, const char * argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

    Rectangle * shape = [[Rectangle alloc] init];
	[shape setHeight: 5];
	[shape setWidth: 8];
	NSLog(@"The area is %i", [shape area]);
	NSLog(@"The perimeter is %i", [shape perimeter]);
    [pool drain];
    return 0;
}
