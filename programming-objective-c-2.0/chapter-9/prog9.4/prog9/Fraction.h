//
//  Fraction.h
//  prog9
//
//  Created by Paul Redmond on 6/5/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Fraction : NSObject
{
	int numerator;
	int denominator;
}

-(void) print;
-(void) setNumerator: (int) n;
-(void) setDenominator: (int) d;

@end
