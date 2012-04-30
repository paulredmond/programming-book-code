//
//  Rectangle.h
//  prog8.2
//
//  Created by Paul Redmond on 4/30/12.
//  Copyright 2012 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface Rectangle : NSObject {
	int width;
	int height;
}

@property int width, height;
-(int) area;
-(int) perimeter;
@end
