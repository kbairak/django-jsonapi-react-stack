FROM python:3.11.2-slim-bullseye

RUN --mount=type=cache,target=/root/.cache \
    apt-get update && \
    apt-get install -y git libpq-dev postgresql-client

COPY ./requirements.txt /app/requirements.txt
RUN --mount=type=cache,target=/root/.cache \
    pip install -r /app/requirements.txt

COPY ./src /app

WORKDIR /app

CMD ./manage.py migrate && ./manage.py runserver 0.0.0.0:80
