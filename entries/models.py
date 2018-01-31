from django.db import models


class Entry(models.Model):
    """Represents a text entry model."""

    text = models.TextField(null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Return readable name of the object."""
        return (self.text[0:64] + '...') if len(self.text) > 64 else self.text
