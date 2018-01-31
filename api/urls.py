from django.conf.urls import url
from django.urls import include
from rest_framework.routers import DefaultRouter

from api import views

app_name = 'api'

router = DefaultRouter()
router.register(r'entries', views.EntryListCreateViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
