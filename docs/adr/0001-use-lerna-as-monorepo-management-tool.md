# Use Lerna as monorepo management tool

- Status: accepted
- Date: 2022-01-04

Technical Story: Choice of monorepo management tool

## Context and Problem Statement

How do you manage infrastructure as code, shared (library and utility) coded, and application code in one repository? Both IaC and application code should be deployable, shared code should be publishable to a npm registry.

## Decision Drivers

- Complexity
- Extensibility
- Maintenance
- Popularity
- Quality
- Abstraction

## Considered Options

- Lerna
- NX
- yarn / npm workspaces

## Decision Outcome

Chosen option: "Lerna", because comes out best.

### Positive Consequences

- We don't have to learn anything new

### Negative Consequences

- Lerna is not well maintained, the sole contrib is on leave. Chances of having to migrate to another solution in the future are big

## Pros and Cons of the Options

### Lerna

A tool for managing JavaScript projects with multiple packages.

- Good, because easy to use
- Good, because exstensible through simple life cycle triggers
- Good, because good quality code, stable
- Good, because opionated on workflow only, not on implementation of workflow
- Good, because by far the most popular choice for many projects
- Bad, because not well maintained, core contributor is on permanent leave

### NX

Nx is an extensible build system

- Good, because easy to extend
- Good, because well maintained
- Good, because many plugins
- Bad, because over-engineered
- Bad, because reasonably popular
- Bad, because too opinionated to be flexible to changing needs

### yarn / npm workspaces

Workspaces is a generic term that refers to the set of features in the yarn or npm cli that provides support to managing multiple packages from your local file system from within a singular top-level, root package.

- Good, because well maintained
- Bad, because abstraction is low level, only manages packages in a monorepo
- Bad, because doesn't do versioning, publishing or deployments

## Links

- https://lerna.js.org/
- https://nx.dev/
- https://classic.yarnpkg.com/lang/en/docs/workspaces/
- https://docs.npmjs.com/cli/v8/using-npm/workspaces
