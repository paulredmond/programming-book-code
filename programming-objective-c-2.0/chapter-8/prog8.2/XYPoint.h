//
//  XYPoint.h
//  prog8.2
//
//  Created by Paul Redmond on 5/12/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface XYPoint : NSObject
{
    int x;
    int y;
}
@property int x, y;

-(void) setX: (int) xVal andY: (int) yVal;
@end
