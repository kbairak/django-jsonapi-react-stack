# Playground for Django/{json:api}/React stack

This is a docker-compose setup to help you get familiar with the technologies
needed to make a modern full-stack web applications using:

- Django for the backend server
- [djsonapi](https://github.com/kbairak/djsonapi) to help write API endpoints
  for the backend
- React for the frontend
- [@transifex/jsonapi](https://www.npmjs.com/package/@transifex/jsonapi) to
  help the frontend interact with the backend

Other technologies:

- [vite](https://vitejs.dev/): The javascript bundler used for the frontend
- [react-query](https://react-query-v3.tanstack.com/): React hooks for
  components that fetch data asynchronously
- nginx: We use it as a reverse proxy to distribute requests between the
  frontend and backend


## Getting started

Clone this repository:

```sh
git clone https://github.com/kbairak/django-jsonapi-react-stack
cd django-jsonapi-react-stack
```

Start with pulling and building the docker images:

```sh
docker compose pull
docker compose build
```

Next, run the database migrations:

```sh
docker compose run --rm jsonapi-backend-web ./manage.py migrate
```

Next, create a superuser account:

```sh
docker compose run --rm jsonapi-backend-web ./manage.py createsuperuser
```

Now, you can start your project:

```sh
docker compose up

# or

docker compose up -d
```

## Where to go from here?

- Visit the application at `http://localhost:8000/` (at this point it will be
  an empty page)

- If you want to add data, you can visit `http://localhost:8000/_api/admin`,
  login using your superuser account and add data by hand.

- If you want to work on the backend, edit `backend/src/jsonapi_app/views.py`
  and/or `backend/src/jsonapi_app/urls.py`. Consult the
  [djsonapi](http://github.com/kbairak/djsonapi) documentation for
  instructions/inspiration on what to do

- If you want to work on the frontend, edit `frontend/src/App.jsx`. Consult the
  [@transifex/jsonapi](https://github.com/transifex/transifex-javascript/tree/master/packages/jsonapi)
  and [react-query](https://react-query-v3.tanstack.com/) documentation for
  instructions/inspiration on what to do

- Don't forget to refer to the
  [{json:api} specification](https://jsonapi.org/format/) to understand the API
  interactions
