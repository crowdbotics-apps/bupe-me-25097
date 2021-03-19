from allauth.account.auth_backends import AuthenticationBackend
from oauth2_provider.decorators import protected_resource
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from oauth2_provider.views.generic import ProtectedResourceView, ScopedResourceMixin
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from oauth2_provider.contrib.rest_framework import TokenHasScope, OAuth2Authentication
from rest_framework import permissions

from home.models import *

from home.api.v1.serializers import (
    SignupSerializer,
    CustomTextSerializer,
    HomePageSerializer,
    UserSerializer,
    QuestionSerializer,
    AnswerSerializer
)
from home.models import CustomText, HomePage


### CORE APP ###

class QuestionViewSet(ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()


class AnswerApi(APIView):

    def post(self, request, format=None):
        user = self.request.user
        question = request.data['question']
        answer = request.data['answer']

        data = {'question': question, 'answer': answer, 'user': user.id}
        newAnswer = AnswerSerializer(data=data)

        if newAnswer.is_valid():
            newAnswer.save()
            tmp = {
                'message': 'Successfully answered!',
                'data': newAnswer.data
            }

        else:
            tmp = {
                'message': 'Error!',
                'data': newAnswer.errors
            }

        return Response(tmp)

### END CORE APP ###

class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})


class CustomTextViewSet(ModelViewSet):
    serializer_class = CustomTextSerializer
    queryset = CustomText.objects.all()
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsAdminUser]
    http_method_names = ["get", "put", "patch"]


class HomePageViewSet(ModelViewSet):
    serializer_class = HomePageSerializer
    queryset = HomePage.objects.all()
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsAdminUser]
    http_method_names = ["get", "put", "patch"]
