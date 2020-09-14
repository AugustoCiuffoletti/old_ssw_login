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

##  Third commit

The login form is added with a view and no function.

### Observe

See the form and type login and password, with no effect

## Fourth commit

Fake authentication (always true) and accessor method (isLogged) added to the authentication service.

The login component invokes the injectable authentication service.

### Observe

The console traces the call from the login component to the authentication service

## Fifth commit

The guard uses the isLogged accessor of the injected authenticator to control the access to the main component.

The login handler routes to the user to the main component if the isLogged accessor is true, otherwise dispays a popup alert.

### Observe

After filling the credentials (any), clicking on the ok button visualizes the "main" component (and hides the login). Change the value of the return value of the fake authenticator to false, and see the popup appear.

## Sixth commit

The main component contains a logout button, linked to a function that calls a logout function in the authentication service, which sets to false the isLogged variable. The same function routes the user back to the login route.

Also the routing to the main component is moved inside the authentication service.
