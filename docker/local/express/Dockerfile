ARG NODE_VERSION=18-alpine3.19

FROM node:${NODE_VERSION}

LABEL name="invoicer"
LABEL license="MIT"
LABEL description="invoicer image"

ENV NODE_ENV=developement


ARG APP_HOME=/app

WORKDIR ${APP_HOME}

RUN addgroup --system invoicer \
    && addUser --system --ingroup invoicer invoicer


COPY package*.json ./
RUN npm install

COPY --chown=invoicer:invoicer . ${APP_HOME}

RUN chow invoicer:invoicer ${APP_HOME}

USER invoicer

CMD [ "npm","run","dev" ]