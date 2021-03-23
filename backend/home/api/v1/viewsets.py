from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from datetime import date, datetime
from datetime import timedelta
from django.conf import settings
from django.utils import timezone

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

class QuestionApi(APIView):

    def get(self, request, format=None):
        user = self.request.user

        today = datetime.today()
        day = date.isoweekday(today)

        question = Question.objects.filter(day=day).last()
        question_serializer = QuestionSerializer(question)

        today_min = datetime.combine(timezone.now().date(), datetime.today().time().min)
        today_max = datetime.combine(timezone.now().date(), datetime.today().time().max)

        answer = Answer.objects.filter(user=user, created__range=(today_min, today_max)).first()
        answer_serializer = AnswerSerializer(answer)
        if answer:
            is_answered = True
            data = {
                'question': question_serializer.data,
                'is_answered': is_answered,
                'answer': answer_serializer.data
            }
            return Response(data)
        else:
            is_answered = False
            data = {
                'question': question_serializer.data,
                'is_answered': is_answered,
                'answer': None
            }
            return Response(data)



class AnswerApi(APIView):

    def post(self, request, format=None):
        user = self.request.user
        today_min = datetime.combine(timezone.now().date(), datetime.today().time().min)
        today_max = datetime.combine(timezone.now().date(), datetime.today().time().max)
        checkAnswer = Answer.objects.filter(user=user, created__range=(today_min, today_max)).first()
        if checkAnswer:
            tmp = {
                'message': 'Error!',
                'data': 'You already have answered question today.'
            }
            return Response(tmp)

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
