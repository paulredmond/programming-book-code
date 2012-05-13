//
//  Rectangle.h
//  prog8.2
//
//  Created by Paul Redmond on 4/30/12.
//  Copyright 2012 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "XYPoint.h"

@interface Rectangle : NSObject {
	int width;
	int height;
    XYPoint *origin;
}

@property int width, height;

-(XYPoint *) origin;
-(void) setOrigin: (XYPoint *) pt;
-(void) setWidth: (int) w andHeight: (int) h;
-(int) area;
-(int) perimeter;
@end
