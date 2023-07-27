# canvas-notification-api

I just made this API to handle some difficult functions that would not be possible on the front end

**DISCLAIMER:** I do NOT encourage plugging your own auth tokens anywhere randomly to avoid data hijacking, and because it is against Canvas LMS's API ToS

## how this works

This application fetchs course and assignment data from the canvas build of my school of choice (in this case, USF) using an auth token generated for my own personal use for an app, and pulled data from its **REST** and **GRAPHQL** APIs.

`node-cron` is used to schedule API calls on regular intervals, and `nodemailer` is used to email notifications to your email destination (this is so that I can build a native app and have it send push notifications instead)

## cool tech

This was built with _expressJS_ and the aforementioned technologies.
