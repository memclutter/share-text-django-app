from rest_framework.serializers import HyperlinkedModelSerializer

from entries.models import Entry


class EntrySerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Entry
        fields = ('id', 'text', 'created_at', 'updated_at')
