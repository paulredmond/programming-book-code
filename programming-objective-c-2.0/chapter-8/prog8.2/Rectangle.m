//
//  Rectangle.m
//  prog8.2
//
//  Created by Paul Redmond on 4/30/12.
//  Copyright 2012 __MyCompanyName__. All rights reserved.
//

#import "Rectangle.h"


@implementation Rectangle

@synthesize width, height;

-(void) setWidth: (int) w andHeight: (int) h
{
	width = w;
	height = h;
}

-(int) area
{
	return width * height;
}

-(int) perimeter
{
	return (width + height) * 2;
}

@end
