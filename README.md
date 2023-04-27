# A Simple example of monorepo with GCP Cloudbuild and Cloud functions with turborepo.

## Idea

the root cloudbuild.yaml, use git diff to identify changes on functions folder, and deploy only functions changed since last commit.

To works, each function need has your cloudbuild.yaml.
You can use each cloudbuld.yml of functions to write all dependencies like GCP Scheduler, Pubsub Topics, and etc...

## Stack

- Node
- Typescript
- Turborepo
- GCP Cloudbuild
- GCP Cloud functions

More details about how it works soon

questions DM me on [Twitter](https://twitter.com/brunocroh)
