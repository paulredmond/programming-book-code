//
//  Fraction.m
//  prog9
//
//  Created by Paul Redmond on 6/5/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import "Fraction.h"

@implementation Fraction

-(void) print
{
	NSLog(@"%i/%d", numerator, denominator);
}

-(void) setNumerator: (int) n
{
	numerator = n;
}

-(void) setDenominator: (int) d
{
	denominator = d;
}

@end
