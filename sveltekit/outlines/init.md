# PUG Example

   ```pug
doctype html
html
  head
    title My Pug Page
    link(rel='stylesheet', href='style.css')
    script(src='script.js')
  body
    header
      h1 Hello, World!
      nav
        ul
          li
            a(href='#') Link 1
          li
            a(href='#') Link 2
          li
            a(href='#') Link 3
    main
      section#intro
        h2 Introduction
        p This is an example of a Pug file that uses several of its features.
        p Here's some more text in the introduction.
        img(src='image.jpg', alt='An example image')
      section#features
        h2 Features
        ul
          li Lists
          li Links
          li Images
          li Forms
          li Templates
      section#outro
        h2 Conclusion
        p Thanks for reading!
    footer
      p Copyright © 2023 My Company

   ```
