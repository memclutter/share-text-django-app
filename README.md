# Share Text Django App

Django app for example.

## Up and running

1. Copy and edit `config/local_settings.py.dist` to `config/local_settings.py`
2. Apply database migrations `./manage.py migrate`
3. Create superuser for admin UI `./manage.py createsuperuser`
4. Run development web-server `./manage.py runserver`
5. Open http://localhost:8000

# Up and running (in docker)

1. Create docker machine `docker-machine create -d virtualbox shtxtdjapp.local`
2. Activate docker machine `eval $(docker-machine env shtxtdjapp.local)`
3. Up docker compose `docker-comppose up -d --build`
4. Resolve docker-machine ip-address `docker-machine ip shtxtdjapp.local`
5. Open http://docker-machine-ip
