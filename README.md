# Stepwise login in Angular (7)

We want to build a functional login stage to learn Angular and to obtain a useful tool.

The web service offers two routes:

- the "login" route, that is the landing point of our web service,ù
- the "main" route, that is the protected route, accessible only after a successful login

The operation is based on two components:

- The "login" component, visible when authorization is pending
- The "main" component, visible after successful login

The directory of the login components hosts also:

- an "auth" service implementing an observable
- the "login" guard that implement a blocking "onActivate" method

## First commit

Added main and login components with guard and service in the login component

They are added using the ng-cli primitives, without editing

## Second commit

The app-routing.module.ts is populated with suitable routes. The guard is added to the main route.

The html of the root app component contains only a title and the router-outlet.

The guard is always false.

### Observe

Visiting the URL with empty route points to the login page ("login works"), the same with a login route. The URL with the "main" route return only the title.
