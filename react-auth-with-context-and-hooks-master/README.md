# react-auth-with-context-and-hooks

This is a WIP. The goal is to create a properly secured and verified login flow using react hooks (except for the error boundary) only + react context + graphql interface.

Current stack: node, express, MongoDB and passport for the backend / react
Planned stack: node, express, MongoDB and/or Radis, Apollo or Relay Modern / react + Apollo / Relay Modern

If you'd like to contribute please let me know in an issue or through discord:

@ExNihil and use this invite: https://discord.gg/Ga2T6ke

#client state

1. Context implemnted, tested locally and is working.
2. Signup pretty much finished. Login is currently only a clone of Signup and needs some work.
3. A lot of effort was invested into creating generic reusable form components with integral validation using Bulma. This is pretty much finished - although styling is not done propely yet.

WIP:

1. Implement a P/W strength meter. Currently zxcvbn is implemented only internally and is not exposed to the user.
2. Rebuild the Nav bar for responsivity.
3. Implement an API "action" layer and connect with backend.

Planned:

1. replace API layer with an Apollo/Relay data layer and implement graphQL style views.

#server state

1. server is being converted to using babel and es6
