from django.contrib.auth import get_user_model
from django.http import HttpRequest
from django.utils.translation import ugettext_lazy as _
from allauth.account import app_settings as allauth_settings
from allauth.account.forms import ResetPasswordForm
from allauth.utils import email_address_exists, generate_unique_username
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from rest_framework import serializers
from rest_auth.serializers import PasswordResetSerializer
from rest_auth.models import TokenModel

from home.models import CustomText, HomePage, Question, Answer

User = get_user_model()


### CORE APP ###

class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = "__all__"

class AnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Answer
        fields = "__all__"

### CORE APP END ###


### USER BASED SERIALIZERS ###

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'middle_name', 'last_name', 'email', 'password', 'dob', 'phone', 'street1', 'street2', 'city', 'state', 'zip', 'dl', 'ssn')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {
                    'input_type': 'password'
                }
            },
            'email': {
                'required': True,
                'allow_blank': False,
            }
        }

    def _get_request(self):
        request = self.context.get('request')
        if request and not isinstance(request, HttpRequest) and hasattr(request, '_request'):
            request = request._request
        return request

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address."))
        return email

    def create(self, validated_data):
        user = User(
            email=validated_data.get('email'),
            first_name=validated_data.get('first_name'),
            middle_name=validated_data.get('middle_name'),
            last_name=validated_data.get('last_name'),

            dob=validated_data.get('dob'),
            phone=validated_data.get('phone'),
            street1=validated_data.get('street1'),
            street2=validated_data.get('street2'),
            city=validated_data.get('city'),
            state=validated_data.get('state'),
            zip=validated_data.get('zip'),
            dl=validated_data.get('dl'),
            ssn=validated_data.get('ssn'),

            username=generate_unique_username([
                validated_data.get('first_name'),
                validated_data.get('email'),
                'user'
            ])
        )
        user.set_password(validated_data.get('password'))
        user.save()
        request = self._get_request()
        setup_user_email(request, user, [])
        return user

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()


class CustomTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomText
        fields = '__all__'


class HomePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePage
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'middle_name', 'email', 'dob', 'phone', 'street1', 'street2', 'state', 'city', 'zip', 'dl', 'ssn')

class TokenSerializer(serializers.ModelSerializer):
    """
    Serializer for Token model.
    """
    id = serializers.SerializerMethodField('get_id')
    email = serializers.SerializerMethodField('get_email')
    first_name = serializers.SerializerMethodField('get_first_name')
    middle_name = serializers.SerializerMethodField('get_middle_name')
    last_name = serializers.SerializerMethodField('get_last_name')

    dob = serializers.SerializerMethodField('get_dob')
    phone = serializers.SerializerMethodField('get_phone')
    street1 = serializers.SerializerMethodField('get_street1')
    street2 = serializers.SerializerMethodField('get_street2')
    state = serializers.SerializerMethodField('get_state')
    city = serializers.SerializerMethodField('get_city')
    zip = serializers.SerializerMethodField('get_zip')
    dl = serializers.SerializerMethodField('get_dl')
    ssn = serializers.SerializerMethodField('get_ssn')

    def get_id(self, obj):
        return obj.user.id

    def get_first_name(self, obj):
        return obj.user.first_name

    def get_middle_name(self, obj):
        return obj.user.middle_name

    def get_last_name(self, obj):
        return obj.user.last_name

    def get_email(self, obj):
        return obj.user.email

    def get_dob(self, obj):
        return obj.user.dob

    def get_phone(self, obj):
        return obj.user.phone

    def get_street1(self, obj):
        return obj.user.street1

    def get_street2(self, obj):
        return obj.user.street2

    def get_city(self, obj):
        return obj.user.city

    def get_state(self, obj):
        return obj.user.state

    def get_zip(self, obj):
        return obj.user.zip

    def get_dl(self, obj):
        return obj.user.dl

    def get_ssn(self, obj):
        return obj.user.ssn

    class Meta:
        model = TokenModel
        fields = ('key', 'id', 'first_name', 'last_name', 'middle_name', 'email', 'dob', 'phone', 'street1', 'street2', 'city', 'state', 'zip', 'dl', 'ssn')

class PasswordSerializer(PasswordResetSerializer):
    """Custom serializer for rest_auth to solve reset password error"""
    password_reset_form_class = ResetPasswordForm
