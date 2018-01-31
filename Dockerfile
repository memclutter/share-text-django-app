FROM python:3.6

LABEL maintainer="memclutter@gmail.com"

RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app

RUN apt-get update -yqq \
 && apt-get install -yqq --no-install-recommends \
    netcat \
 && apt-get -q clean

ADD requirements.txt .
RUN pip install -r requirements.txt

ADD . .

RUN cp config/local_settings.py.dist config/local_settings.py

VOLUME "/usr/local/app/static"

EXPOSE 8000

ENTRYPOINT /usr/local/app/entrypoint.sh
