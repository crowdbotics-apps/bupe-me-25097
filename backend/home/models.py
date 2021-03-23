from django.db import models
from users.models import User

# Create your models here.


class Question(models.Model):
    days = (
        ("1", "Monday"),
        ("2", "Tuesday"),
        ("3", "Wednesday"),
        ("4", "Thursday"),
        ("5", "Friday"),
        ("6", "Saturday"),
        ("7", "Sunday"),
    )
    question = models.TextField(null=True, blank=True)
    day = models.CharField(max_length=225, choices=days, default="1")


class Answer(models.Model):
    answer = (
        ("0", "NO"),
        ("1", "YES"),
    )
    question = models.ForeignKey(Question, related_name='question_answer', on_delete=models.PROTECT, null=True, blank=True)
    answer = models.CharField(max_length=225, choices=answer, default="0")
    user = models.ForeignKey(User, related_name='users_notifications', on_delete=models.PROTECT, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, editable=False)


class CustomText(models.Model):
    """
    Boilerplate model to populate the index homepage to demonstrate that the app was
    successfuly built. All references to it should be removed in order to remove this
    app from the project.
    """

    title = models.CharField(max_length=150)

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f'/api/v1/customtext/{self.id}/'

    @property
    def field(self):
        return 'title'


class HomePage(models.Model):
    """
    Boilerplate model to populate the index homepage to demonstrate that the app was
    successfuly built. All references to it should be removed in order to remove this
    app from the project.
    """
    body = models.TextField()

    @property
    def api(self):
        return f'/api/v1/homepage/{self.id}/'

    @property
    def field(self):
        return 'body'
