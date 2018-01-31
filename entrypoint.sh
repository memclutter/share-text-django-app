#!/bin/sh

echo "Waiting for PostgreSQL..."

while ! nc -z db 5432;
do
    sleep 0.1;
done;

echo "PostgreSQL started"

./manage.py migrate
./manage.py collectstatic --noinput

gunicorn -b 0.0.0.0:8000 wsgi
