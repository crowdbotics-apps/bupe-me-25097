from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model

from users.forms import UserChangeForm, UserCreationForm

User = get_user_model()


@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):

    form = UserChangeForm
    add_form = UserCreationForm
    fieldsets = (("User", {"fields": ("email", "first_name", "middle_name", "last_name", "dob", "phone", "street1", "street2", "city", "zip", "dl", "ssn")}),)
    list_display = ["email", "first_name", "is_superuser"]
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ("email", "first_name", "middle_name", "last_name", "dob", "phone", "street1", "street2", "city", "zip", "dl", "ssn", 'password1', 'password2', )}
         ),
    )
    search_fields = ["email", "first_name"]
