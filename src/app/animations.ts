import {
    trigger, animateChild, group,
    transition, animate, style, query
} from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
    // Transition between any two states
    transition('* <=> *', [
        // Events to apply
        // Defined style and animation function to apply
        // Config object with optional set to true to handle when element not yet added to the DOM
        query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
        // group block executes in parallel
        group([
            query(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('300ms ease-in', style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('300ms ease-out', style({ transform: 'translateX(-100%)' }))
            ], { optional: true })
        ])
    ])
]);


// Rousable animations
/* export const slideInAnimation =
    trigger('routeMotion', [
        transition('heroes <=> hero', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]); */