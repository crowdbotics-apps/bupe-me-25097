from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model

from users.forms import UserChangeForm, UserCreationForm

User = get_user_model()


@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):

    form = UserChangeForm
    add_form = UserCreationForm
    fieldsets = (("User", {"fields": ("email", "name", "dob", "phone", "street", "city", "state", "zip", "dl", "ssn")}),)
    list_display = ["email", "name", "is_superuser"]
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ("email", "name", "dob", "phone", "street", "city", "state", "zip", "dl", "ssn", 'password1', 'password2', )}
         ),
    )
    search_fields = ["name"]
