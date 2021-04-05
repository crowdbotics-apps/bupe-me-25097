from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django.db.models.signals import pre_save
import uuid

class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """

    # First Name and Last Name do not cover name patterns
    # around the globe.
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(_("First Name of User"), blank=True, null=True, max_length=255)
    middle_name = models.CharField(_("Middle Name of User"), blank=True, null=True, max_length=255)
    last_name = models.CharField(_("Last Name of User"), blank=True, null=True, max_length=255)
    dob = models.DateField(max_length=255, null=True, blank=True)
    phone = models.CharField(max_length=255, blank=True, null=True)
    street1 = models.CharField(max_length=255, blank=True, null=True)
    street2 = models.CharField(max_length=255, blank=True, null=True)
    state = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    zip = models.CharField(max_length=255, blank=True, null=True)
    dl = models.CharField(max_length=255, blank=True, null=True)
    ssn = models.CharField(max_length=255, blank=True, null=True)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"id": self.id})


    @staticmethod
    def pre_save(sender, instance, **kwargs):
        cd = uuid.uuid4().hex[:6].upper()
        instance.username = instance.email.split('@')[0] + cd


pre_save.connect(User.pre_save, User, dispatch_uid="users.models.User")
