//
//  Square.m
//  prog8.2
//
//  Created by Paul Redmond on 4/30/12.
//  Copyright 2012 __MyCompanyName__. All rights reserved.
//

#import "Square.h"


@implementation Square: Rectangle

-(void) setSide: (int) s
{
	[self setWidth: s andHeight: s];
}

-(int) side
{
	return width;
}

@end
