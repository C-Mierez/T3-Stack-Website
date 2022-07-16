# Would you Rather?

> A simple web app for polling and ranking random questions in terms of how popularly chosen they are.

This is a toy project intended to try out [init.tips](https://init.tips)'s `create-t3-app` development stack.


### Stack

Currently using:

- NextJS
- Typescript
- tRPC
- Prisma ?
- Next-Auth ?

### Page Structure

- [ ] Main Page
  - [ ] Header
  - [ ] Main game section
  - [ ] Footer explaining the project
- [ ] Ranking Page
  - [ ] List of all the questions asked, sorted by most chosen.

### Ideas
- Basic Login Feature
- Choosing one of two options
  - Choose between the chosen option against another random one
  - Poll the chosen option
- Rank options by popularity
- Animations introducing the game
- Animations introducing the options

### Some stuff learnt:

- Computing an initial state from random values can be tricky, and a decision must be made on how to handle this depending on whether SSR or CSR is being used. 

  In the case of `index.tsx` the page must begin with two random values. There were two approaches that were considered and got the job done:
  - Using `getServerSideProps` to calculate the initial values on the server before client rendering.
  - Using a combination of `useState` and `useEffect` to calculate wether the site `isMounted` on the client, and then use `useMemo` to calculate the random values only when on the client side.