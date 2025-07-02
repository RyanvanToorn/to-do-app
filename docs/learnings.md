# Learnings from this project

## Github:

- Basically redid my entire github account and almost all repos, completely bugged out my VSCode + Github sync in the process, but the root cause was my initial lack of knowledge RE local vs remote Repos and how github works.
- Created a 'GitGuide' file for personal use containing the common console commands and what they do - will primarily use the built in Source Control UI to facilitate this, but it's valuable knowledge regardless.
- Furthered my understanding of best practices, specifically not YOLO working on the primary branch and straight committing.
- Tried to follow best practices as far as possible, including committing and pushing on feature or component specific branches and then merging/approving the pull request on Github as if I was reviewing my own code.

## MUI:

- It's somewhat tricky to understand the props initially, however the props for a specific component can be
  accessed by going to the actual code definition.
- It's useful to extend the already extensive built in props with a generic set of props which I'd like all components to have, i.e isVisible, extendedClass etc.

## TypeScript:

- Basic syntax and usage, very similar to JS obviously, but the type enforcement is cool
- Spent a solid few minutes trying to find the syntax for an integer, but it's either a number by default, or a BigInt if required.

## Interfaces:

- Essentially serve as a nicer way to declare props (? is optional) and enforce it across usages, very neat and will be certainly be using in future.

## Imports/Exports:

- Struggled considerably with several minor issues, first learning is that { name } is a named export and should be imported with similar syntax, however you can use a default export (minus the "{}") and import from the file directly. Not sure what industry best practice is but naming the exports seems like it should be the standard even if it's a single export file/folder.
- Interfaces/types should always be exported as such. Won't throw an IDE or compile time issue, but will throw a console error in the browser.
