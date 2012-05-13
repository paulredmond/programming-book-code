//
//  main.m
//  prog8
//
//  Created by Paul Redmond on 5/12/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ClassA.h"
#import "ClassB.h"

int main (int argc, const char * argv[])
{

    @autoreleasepool {
        
        ClassB *b = [[ClassB alloc] init];
        
        [b initVar];
        [b printVar];
        
        [b release];
        
    }
    return 0;
}

