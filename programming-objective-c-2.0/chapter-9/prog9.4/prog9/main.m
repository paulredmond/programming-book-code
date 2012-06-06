//
//  main.m
//  prog9
//
//  Created by Paul Redmond on 6/5/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Fraction.h"

int main (int argc, const char * argv[])
{

    @autoreleasepool {
        //
        // Uncomment to see exception
        //
        // Fraction *f = [[Fraction alloc] init];
        // [f noSuchMethod];
        // NSLog(@"Execution continues!");
        // [f release];
        
        Fraction *f = [[Fraction alloc] init];
        
        @try {
            [f noSuchMethod];
        }
        @catch (NSException *exception) {
            NSLog(@"Caught: %@%@", [exception name], [exception reason]);
        }
        
        NSLog(@"Execution continues!");
        [f release];
    }
    
    return 0;
}

