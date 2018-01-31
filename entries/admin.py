from django.contrib import admin
from entries.models import Entry


@admin.register(Entry)
class EntryAdmin(admin.ModelAdmin):
    pass
