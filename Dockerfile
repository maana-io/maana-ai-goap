FROM tiangolo/uvicorn-gunicorn:python3.7-alpine3.8

RUN pip install uvicorn gunicorn ariadne graphqlclient asgi-lifespan

COPY ./app /app