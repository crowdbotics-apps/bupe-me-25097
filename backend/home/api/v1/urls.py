from django.urls import path, include
from rest_framework.routers import DefaultRouter

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    HomePageViewSet,
    CustomTextViewSet,
    QuestionViewSet,
    AnswerApi,
)

router = DefaultRouter()

router.register("customtext", CustomTextViewSet)
router.register("homepage", HomePageViewSet)

### AUTH ROUTES ###
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
### END AUTH ROUTES ###

### CORE ROUTES ###
router.register("questions", QuestionViewSet)
### END CORE ROUTES ###

urlpatterns = [
    path("", include(router.urls)),
    path('answer', AnswerApi.as_view())
]
