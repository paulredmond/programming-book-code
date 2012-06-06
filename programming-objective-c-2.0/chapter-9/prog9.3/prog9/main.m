//
//  main.m
//  prog9
//
//  Created by Paul Redmond on 5/29/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "Square.h"

int main (int argc, const char * argv[])
{

    @autoreleasepool {
        Square *mySquare = [[Square alloc] init];
        
        // isMemberOf:
        if ([mySquare isMemberOfClass: [Square class]] == YES) {
            NSLog(@"mySquare is a member of Square class");
        }
        
        if ([mySquare isMemberOfClass: [Rectangle class]] == YES) {
            NSLog(@"mySquare is a member of Rectangle class");
        }
        
        if ([mySquare isMemberOfClass: [NSObject class]] == YES) {
            NSLog(@"mySquare is a member of NSObject class");
        }
        
        // isKindOf:
        
        if ([mySquare isKindOfClass: [Square class]] == YES) {
            NSLog(@"mySquare is a kind of Square");
        }
        
        if ([mySquare isKindOfClass: [Rectangle class]] == YES) {
            NSLog(@"mySquare is a kind of Rectangle");
        }
        
        if ([mySquare isKindOfClass: [NSObject class]] == YES) {
            NSLog(@"mySquore is a kind of NSObject");
        }
        
        // respondsTo:
        
        if ([mySquare respondsToSelector: @selector(setSide:)] == YES) {
            NSLog(@"mySquare responds to setSide: method");
        }
        
        if ([mySquare respondsToSelector: @selector(setWidth:andHeight:)] == YES) {
            NSLog(@"mySquare responds to setWidth:setHeight: method");
        }
        
        if ([mySquare respondsToSelector: @selector(alloc)] == YES) {
            NSLog(@"Square class responds to alloc method");
        }
        
        // instancesRespondTo:
        
        if ([Rectangle instancesRespondToSelector: @selector(setSide:)] == YES) {
            NSLog(@"Instances of Rectangle respond to setSide: method");
        }
        
        if ([Square instancesRespondToSelector: @selector(setSide:)] == YES) {
            NSLog(@"Instances of Square respond to setSide: method");
        }
        
        if ([Square isSubclassOfClass: [Rectangle class]] == YES) {
            NSLog(@"Square is a subclass of Rectangle");
        }
        
        NSLog(@"%@", [mySquare class]); // Example of outputting Type: Class with %@
        
        [mySquare release];
    }
    
    return 0;
}

