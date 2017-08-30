# Photo Lovers
Week 8 project

## Installation instructions

- Clone this repo and cd into it

- Run `npm install` to install all dependencies

## User Story

As a user, who wants to use `photo lovers`

- [x] I can open the website and see the photos on the website.

- [x] If I need to add pic to the website I can click at the photo button and uploaded it.
- [x] When I added the photo I can write title to the photo and hashTags
- [x] If I love any photo I can click at like button

## Schema

### posts:
Column | Type | Modifiers
--- | --- | ---
id | integer | not null default
title | character varying (100) | not null
tags | character varying (500) | -
filePath | character varying | not null
likes | integer | not null
