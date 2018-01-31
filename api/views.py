from rest_framework.mixins import ListModelMixin, CreateModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import AllowAny

from api.serializers import EntrySerializer
from entries.models import Entry


class EntryListCreateViewSet(ListModelMixin, CreateModelMixin, GenericViewSet):
    queryset = Entry.objects.all().order_by('-created_at')
    serializer_class = EntrySerializer
    permission_classes = (AllowAny,)
