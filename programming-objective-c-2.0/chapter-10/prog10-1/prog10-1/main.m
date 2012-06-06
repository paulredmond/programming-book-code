//
//  main.m
//  prog10-1
//
//  Created by Paul Redmond on 6/6/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "Fraction.h"

int main (int argc, const char * argv[])
{

    @autoreleasepool {
        Fraction *a, *b;
        
        a = [[Fraction alloc] initWith: 1: 3];
        b = [[Fraction alloc] initWith: 3: 7];
        
        [a print];
        [b print];
        
        [a release];
        [b release];
    }
    return 0;
}

