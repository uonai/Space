# Angular, an Opinionated Platform
Someday I aim to design and build frameworks and languages from the ground up. For now, I enjoy studying and using what has already exists. Developers put a lot of time into building frameworks, and I learn so many new concepts and thinking styles each time I implement a new framework.

My current passion is kitbashing: taking frameworks that others have built, studying the features, limitations, bugs, and caveats and pushing the limits of the kits. At some point in the near or far-out future, I'll become frustrated (or enlightened!) with kitbashing. At that point I'll build my own framework. Until then, I'm enjoying where I'm at, studying and using existing frameworks and codebases to build my projects.

I've spent roughly two years working (professionally) in Angular for frontend development. Angular differs from most frontend frameworks in that it is designated as a "platform". That meaning it's an all encompassing way of doing things, rather than a library that can bolted onto any existing project.

If you decide to use Angular for a project, note that you're committing to it for the long haul. There is no migrating away to other frameworks once you begin. You'll not be able to reference Vue, React, or whatever framework happens to be the flavor of the week. You'll only be using Angular, and the packages that Angular supports. A move away from Angular would need a complete rewrite of your codebase, with some possible lift and shift of HTML/CSS.

My review of Angular so far is that it's possibly the perfect for larger teams if you (and the people you're coding with) are willing to put in the time to get past the learning curve. I wasn't comfortable for about three months, and only after that started making breakthroughs.

Angular is opinionated and limiting. It forces developers to think the same way. For large teams, this is beneficial and allows for a scalable webapp. New developers can be added to teams easily and pick up where others left off, provided they understand Angular concepts.

Architecture is enforced by default. By design, Angular implements a separation of concerns into service calls, TypeScript components, html+css views, and reusable modules. To architect a truly terrible app, you'd need to be on a mission. The [Angular documentation](https://angular.io/docs) provide guidelines for architecture and coding best practices, which seem to be spot on in practice.

## JavaScript is flawed in many ways
JavaScript was created in 10 days in May 1995 by Brendan Eich. This is a feat in itself, but something I'm also wary of.

As Eich stated to Computer Magazine, "(JavaScript) was an incredible rush job, so there were mistakes in it. Something that I think is important about it is that I knew there would be mistakes, and there would be gaps, so I made it very malleable as a language."

We've come far with ES5 and ES6 but Typescript adds prestige to JavaScript. Malleability is limited, code implementation is precise and TypeScript compiles down to different versions of JavaScript to better meet the needs of web browsers. For larger projects with many people working in the same codebase, Typescript is perfect: it's what JavaScript is missing. With Angular 2+ completely embracing TypeScript, this is a move in the right direction.

For smaller projects and passion projects, TypeScript and Angular may not be the right solution. It's an extra layer of abstraction, and if you have most of the functionality already memorized, the abstraction may be overkill. I am using TypeScript in my personal [Angular App](uonai.space), but that is mostly because I'm comfortable with it.

## My Concerns with Angular
Since I have been working in Angular for two years, I'm finding that my JavaScript is getting rusty. If I had to pivot over to ES6, Vue, or React, it would be difficult. What is nice, particularly about React and Vue is that you have the ability to use traditional JavaScript to build features. This can get quite messy, but it lets you grow as a developer and explore less rigid coding styles. One of my goals now is to build a personal project using ES6 so I can keep up to date there. Angular isn't going away any time soon but I want to make sure my skillset isn't too narrow. Plus, I enjoy and miss regular old JavaScript

## What I'm excited about for Angular's future:
- Angular Ivy: faster build times and smaller overall file size. One of the current limitations of Angular is the relatively large file size of the compiled webapp. A comparison of frontend frameworks can be found [here](https://www.freecodecamp.org/news/a-real-world-comparison-of-front-end-frameworks-with-benchmarks-2018-update-e5760fb4a962/)
- [Nest.js](https://nestjs.com) is a typescript framework for building NodeJS microservices and pairs well with Angular. My current focus for backend and API development is ASP.NET paired with Azure Functions, but Nest seems to be a trustworthy Node.JS alternative that I plan on exploring a bit.

## Recommended Reading
To learn Angular, I read [Ng-Book, The Complete Book on Angular](https://www.ng-book.com/2/)
This book provides an overview of Angular concepts along with tutorials for building out features.

I also spent time watching the [Pluralsight tutorials](https://www.pluralsight.com/courses/angular-fundamentals) as they provide supplementary material.

For general JavaScript, I recommend [JavaScript: The Good Parts](https://www.amazon.com/dp/0596517742/ref=cm_sw_r_cp_apa_i_xEO9CbND6C5MT). Crockford writes in a concise, weird, and entertaining way that is a rarity in the programming world.

## Onward
Thanks for reading, and I hope you come back
