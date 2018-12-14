FROM ruby:2.5.3-alpine

RUN apk update \
    && apk add --virtual build-dependencies \
        build-base \
        gcc \
    && apk add \
        curl \
        bash

WORKDIR /

COPY Gemfile .
COPY Gemfile.lock .
RUN bundle check || bundle install

# Add app files into docker image.
COPY . .
